"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    TrendingUp,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Eye,
    Edit,
    PieChart,
    DollarSign,
    Target,
} from "lucide-react";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Button from "@/components/Button.tsx";
import PortfolioHeader from "@/components/PortfolioHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { apiFetch } from "@/auth/apiFetch.ts";
import { useAuth } from "@/auth/AuthProvider.tsx";

type PortfolioCardVM = {
    id: string;
    name: string;
    value: number;
    invested: number;
    profit: number;
    profitPercent: number;
    assetsCount: number;
    chartData: { month: string; value: number }[];
};

export default function PortfoliosPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [portfolios, setPortfolios] = useState<PortfolioCardVM[]>([]);

    const totalValue = portfolios.reduce((sum, p) => sum + p.value, 0);
    const totalProfit = portfolios.reduce((sum, p) => sum + p.profit, 0);
    const totalInvested = portfolios.reduce((sum, p) => sum + p.invested, 0);
    const avgReturn = ((totalProfit / totalInvested) * 100).toFixed(2);

    const { isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) return;

        const fetchPortfolios = async () => {
            try {
                const res = await apiFetch("http://localhost:8080/api/v1/portfolio/");
                if (!res.ok) throw new Error(res.statusText);

                const data = await res.json();

                // Map read-model to UI model
                const mapped: PortfolioCardVM[] = (data || []).map((p: any) => ({
                    id: p.portfolio_id,
                    name: p.name,
                    value: Number(p.total_value),
                    invested: Number(p.invested),
                    profit: Number(p.profit),
                    profitPercent: Number(p.profit_percent),
                    assetsCount: p.assets_count,
                    chartData: [
                        { month: "Jan", value: Number(p.total_value) * 0.95 },
                        { month: "Feb", value: Number(p.total_value) },
                    ],
                }));

                setPortfolios(mapped);
            } catch (err) {
                console.error("Ошибка при получении портфелей:", err);
                setPortfolios([]);
            }
        };

        fetchPortfolios();
    }, [isLoading]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1600px] mx-auto px-6 py-20 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-slate-900 dark:text-white mb-2">
                                Мои портфели
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Управляйте всеми вашими инвестиционными портфелями
                            </p>
                        </div>
                        <Button
                            typeButton="emerald"
                            className="rounded-xl px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Создать портфель
                        </Button>
                    </div>
                </motion.div>

                {/* Stats Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl">
                                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">
                                Общая стоимость
                            </p>
                            <h3 className="text-slate-900 dark:text-white">
                                ₽{totalValue.toLocaleString()}
                            </h3>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-2xl">
                                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">
                                Общая прибыль
                            </p>
                            <h3 className="text-slate-900 dark:text-white">
                                ₽{totalProfit.toLocaleString()}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400">
                                +{avgReturn}%
                            </p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-2xl">
                                <PieChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">
                                Портфелей
                            </p>
                            <h3 className="text-slate-900 dark:text-white">
                                {portfolios.length}
                            </h3>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-2xl">
                                <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">Активов</p>
                            <h3 className="text-slate-900 dark:text-white">
                                {portfolios.reduce((sum, p) => sum + p.assetsCount, 0)}
                            </h3>
                        </div>
                    </div>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Поиск портфелей..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="outline-none w-full pl-11 pr-4 h-12 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                        />
                    </div>
                    <Button
                        typeButton="noBg"
                        className="rounded-xl px-4 flex justify-center items-center border-slate-300 dark:border-slate-700 h-12"
                    >
                        <Filter className="w-4 h-4 mr-2" />
                        Фильтры
                    </Button>
                </motion.div>

                {/* Portfolios Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {portfolios.map((portfolio, index) => (
                        <motion.div
                            key={portfolio.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        >
                            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-slate-900 dark:text-white">
                                                {portfolio.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <Button typeButton="ghost" className="rounded-xl">
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Chart */}
                                <div className="h-32 mb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            data={portfolio.chartData}
                                            margin={{
                                                top: 0,
                                                right: 0,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id={`color${portfolio.id}`}
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="5%"
                                                        stopColor="#10b981"
                                                        stopOpacity={0.3}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor="#10b981"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="month" hide />
                                            <YAxis hide />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor:
                                                        "rgba(15, 23, 42, 0.9)",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    color: "#fff",
                                                }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#10b981"
                                                strokeWidth={2}
                                                fillOpacity={1}
                                                fill={`url(#color${portfolio.id})`}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                        <div className="text-slate-600 dark:text-slate-400 mb-1">
                                            Стоимость
                                        </div>
                                        <div className="text-slate-900 dark:text-white">
                                            ₽{(portfolio.value / 1000).toFixed(0)}K
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                        <div className="text-slate-600 dark:text-slate-400 mb-1">
                                            Прибыль
                                        </div>
                                        <div className="text-emerald-600 dark:text-emerald-400">
                                            +{portfolio.profitPercent}%
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                        <div className="text-slate-600 dark:text-slate-400 mb-1">
                                            Активов
                                        </div>
                                        <div className="text-slate-900 dark:text-white">
                                            {portfolio.assetsCount}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <Button
                                        typeButton="noBg"
                                        className="flex-1 flex px-2 py-2 rounded-xl items-center justify-center border-slate-300 dark:border-slate-700"
                                    >
                                        <Eye className="w-4 h-4 mr-2" />
                                        Открыть
                                    </Button>
                                    <Button
                                        typeButton="noBg"
                                        className="flex-1 flex px-2 py-2  justify-center rounded-xl border-slate-300 dark:border-slate-700"
                                    >
                                        <Edit className="w-4 h-4 mr-2" />
                                        Редактировать
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="border rounded-xl p-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-900 text-center">
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Plus className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-slate-900 dark:text-white mb-2">
                                Создайте новый портфель
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Разделите ваши инвестиции на несколько портфелей с разными
                                стратегиями для лучшей диверсификации
                            </p>
                            <Button
                                typeButton="emerald"
                                className="rounded-xl px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Создать портфель
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
