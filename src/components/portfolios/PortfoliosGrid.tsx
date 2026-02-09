import { Button } from "@/components/ui/Button.tsx";
import {
    Archive,
    Copy,
    Download,
    Edit,
    Eye,
    MoreVertical,
    Share2,
    Trash2,
} from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { type JSX } from "react";
import type { Portfolio } from "@/types/portfolios/portfolio.ts";
import { AnimatePresence, motion } from "motion/react";
import { apiDeletePortfolio } from "@/components/portfolios/apiDeletePortfolio.ts";

type PortfoliosGridProps = {
    portfolio: Portfolio;
    openMenuId: string | null;
    setOpenMenuId: (id: string | null) => void;
};

export const PortfoliosGrid = ({
    portfolio,
    openMenuId,
    setOpenMenuId,
}: PortfoliosGridProps): JSX.Element => {
    const handleMenuToggle = (id: string) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleDeleteBtn = async (id: string) => {
        try {
            await apiDeletePortfolio(id);
            setOpenMenuId(null);
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    return (
        <>
            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-slate-900 dark:text-white">
                                {portfolio.name}
                            </h3>
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-xl"
                            onClick={() => handleMenuToggle(portfolio.id)}
                        >
                            <MoreVertical className="w-4 h-4" />
                        </Button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {openMenuId === portfolio.id && (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden"
                                    style={{
                                        zIndex: 100,
                                    }}
                                >
                                    <div className="py-2">
                                        <button className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors">
                                            <Copy className="w-4 h-4" />
                                            Дублировать
                                        </button>
                                        <button className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors">
                                            <Share2 className="w-4 h-4" />
                                            Поделиться
                                        </button>
                                        <button className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors">
                                            <Download className="w-4 h-4" />
                                            Экспорт
                                        </button>
                                        <button className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors">
                                            <Archive className="w-4 h-4" />
                                            Архивировать
                                        </button>
                                        <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />
                                        <button
                                            className="w-full px-4 py-2.5 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-3 transition-colors"
                                            onClick={() => handleDeleteBtn(portfolio.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Удалить
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
                                    backgroundColor: "rgba(15, 23, 42, 0.9)",
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
                        type="button"
                        variant="outline"
                        className="flex-1 flex px-2 py-2 rounded-xl items-center justify-center border-slate-300 dark:border-slate-700"
                    >
                        <Eye className="w-4 h-4 mr-2" />
                        Открыть
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="flex-1 flex px-2 py-2  justify-center rounded-xl border-slate-300 dark:border-slate-700"
                    >
                        <Edit className="w-4 h-4 mr-2" />
                        Редактировать
                    </Button>
                </div>
            </div>
        </>
    );
};
