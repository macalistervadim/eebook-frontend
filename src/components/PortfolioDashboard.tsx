"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Plus,
    Sparkles,
    Target,
    Calendar,
    Bell,
    Zap,
    BarChart3,
    Repeat,
    Award,
    Globe,
    Newspaper,
} from "lucide-react";
import { Progress } from "./Progress";
import Badge from "./Badge";
import {
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Button from "@/components/Button.tsx";
import Footer from "@/components/Footer.tsx";
import PortfolioHeader from "@/components/PortfolioHeader.tsx";

// Mock data
const portfolioData = [
    { month: "Янв", value: 950000, benchmark: 920000 },
    { month: "Фев", value: 980000, benchmark: 945000 },
    { month: "Мар", value: 1020000, benchmark: 990000 },
    { month: "Апр", value: 1050000, benchmark: 1015000 },
    { month: "Май", value: 1100000, benchmark: 1055000 },
    { month: "Июн", value: 1180000, benchmark: 1120000 },
];

const assetAllocation = [
    { name: "Акции", value: 690000, percent: 58.5, color: "#10b981" },
    { name: "Облигации", value: 370000, percent: 31.4, color: "#3b82f6" },
    { name: "ETF", value: 80000, percent: 6.8, color: "#8b5cf6" },
    { name: "Кэш", value: 40000, percent: 3.3, color: "#94a3b8" },
];

const topHoldings = [
    {
        symbol: "SBER",
        name: "Сбербанк",
        value: 250000,
        change: 5.4,
        dayChange: 2.3,
        weight: 21.2,
    },
    {
        symbol: "GAZP",
        name: "Газпром",
        value: 180000,
        change: -2.1,
        dayChange: -0.8,
        weight: 15.3,
    },
    {
        symbol: "LKOH",
        name: "Лукойл",
        value: 150000,
        change: 3.8,
        dayChange: 1.5,
        weight: 12.7,
    },
    {
        symbol: "YNDX",
        name: "Яндекс",
        value: 110000,
        change: 8.2,
        dayChange: 3.2,
        weight: 9.3,
    },
];

const upcomingDividends = [
    { company: "Сбербанк", date: "15 дек", amount: 8500 },
    { company: "Газпром", date: "20 дек", amount: 5600 },
    { company: "Лукойл", date: "28 дек", amount: 4800 },
];

const aiInsights = [
    {
        type: "opportunity",
        title: "Возможность ребалансировки",
        description: "Рекомендуем увеличить долю облигаций на 5% для снижения риска",
        priority: "medium",
    },
    {
        type: "alert",
        title: "Дивиденды через 3 дня",
        description: "Ожидается выплата ₽8,500 от Сбербанка",
        priority: "high",
    },
    {
        type: "info",
        title: "Отличная доходность",
        description: "Ваш портфель опережает бенчмарк на 5.4% за полгода",
        priority: "low",
    },
];

const recentTransactions = [
    { type: "buy", asset: "SBER", amount: 50000, date: "10 дек", price: "₽285.50" },
    { type: "dividend", asset: "LKOH", amount: 4800, date: "8 дек", price: "₽4,800" },
    { type: "sell", asset: "GAZP", amount: 12000, date: "5 дек", price: "₽174.20" },
    { type: "buy", asset: "YNDX", amount: 35000, date: "3 дек", price: "₽3,250" },
];

const investmentGoals = [
    {
        name: "Пенсионный капитал",
        target: 5000000,
        current: 1180000,
        progress: 23.6,
        deadline: "2045",
    },
    {
        name: "Покупка недвижимости",
        target: 3000000,
        current: 850000,
        progress: 28.3,
        deadline: "2027",
    },
    {
        name: "Образование детей",
        target: 2000000,
        current: 650000,
        progress: 32.5,
        deadline: "2030",
    },
];

const marketNews = [
    {
        title: "ЦБ сохранил ключевую ставку на уровне 16%",
        source: "РБК",
        time: "2 часа назад",
        impact: "neutral",
    },
    {
        title: "Сбербанк объявил о повышении дивидендов на 15%",
        source: "Ведомости",
        time: "5 часов назад",
        impact: "positive",
    },
    {
        title: "Индекс МосБиржи достиг месячного максимума",
        source: "Интерфакс",
        time: "1 день назад",
        impact: "positive",
    },
];

const benchmarkComparison = [
    { name: "Ваш портфель", value: 18.06, color: "#10b981" },
    { name: "IMOEX", value: 12.3, color: "#3b82f6" },
    { name: "S&P 500", value: 24.5, color: "#8b5cf6" },
];

export default function PortfolioDashboardNew() {
    const [selectedPeriod, setSelectedPeriod] = useState("6M");

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1600px] mx-auto px-6 py-20 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                    <div>
                        <h1 className="text-slate-900 dark:text-white mb-2">
                            Обзор портфеля
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Добро пожаловать, Иван! Вот сводка по вашим инвестициям
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button typeButton="noBg" className="flex gap-2 px-4 py-2">
                            <Calendar className="w-4 h-4" />
                            {selectedPeriod}
                        </Button>
                        <Button
                            typeButton="emerald"
                            className="bg-emerald-600 hover:bg-emerald-700 gap-2 rounded-xl px-3"
                        >
                            <Plus className="w-4 h-4" />
                            Добавить актив
                        </Button>
                    </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* Total Value */}
                    <div className="border rounded-xl p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-emerald-600 rounded-2xl">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <Badge
                                className="bg-emerald-600 text-white border-0 rounded-md px-2 py-0.5"
                                icon={<TrendingUp className="w-3 h-3 mr-1" />}
                            >
                                +18.06%
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Общая стоимость
                            </p>
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                ₽1,180,000
                            </h3>
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                <ArrowUpRight className="w-4 h-4" />
                                +₽180,000 от вложений
                            </p>
                        </div>
                    </div>

                    {/* Today's Change */}
                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-2xl">
                                <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <Badge className="bg-blue-100 dark:bg-blue-500/10 rounded-md px-2 py-0.5 text-blue-700 dark:text-blue-400 border-0">
                                +2.4%
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Изменение за день
                            </p>
                            <h3 className="text-2xl font-semibold  text-slate-900 dark:text-white">
                                +₽28,320
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                С 9:00 МСК
                            </p>
                        </div>
                    </div>

                    {/* Dividends */}
                    <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-2xl">
                                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <Badge className="bg-purple-100 rounded-md px-2 py-0.5 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-0">
                                3 выплаты
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Дивиденды декабрь
                            </p>
                            <h3 className="text-2xl font-semibold  text-slate-900 dark:text-white">
                                ₽18,900
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Следующая: 15 дек
                            </p>
                        </div>
                    </div>

                    {/* AI Score */}
                    <div className="border p-6 bg-gradient-to-br rounded-xl from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-gradient-to-r from-amber-500 rounded-md px-2 py-0.5 to-orange-500 text-white border-0">
                                Отлично
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                AI оценка портфеля
                            </p>
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                8.5/10
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Выше среднего
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-900 dark:text-white">
                                    Динамика портфеля
                                </h3>
                                <div className="flex gap-2">
                                    {["1M", "3M", "6M", "1Y", "Все"].map((period) => (
                                        <Button
                                            key={period}
                                            typeButton={
                                                selectedPeriod === period
                                                    ? "emerald"
                                                    : "ghost"
                                            }
                                            onClick={() => setSelectedPeriod(period)}
                                            className={
                                                selectedPeriod === period
                                                    ? "bg-emerald-600 px-3 py-2 hover:bg-emerald-700 rounded-lg"
                                                    : "rounded-lg px-3 py-2 "
                                            }
                                        >
                                            {period}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={portfolioData}>
                                    <defs>
                                        <linearGradient
                                            id="colorValue"
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
                                        <linearGradient
                                            id="colorBenchmark"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#3b82f6"
                                                stopOpacity={0.2}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#3b82f6"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                    />
                                    <XAxis dataKey="month" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1e293b",
                                            border: "1px solid #334155",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        name="Портфель"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="benchmark"
                                        stroke="#3b82f6"
                                        strokeWidth={1}
                                        strokeDasharray="5 5"
                                        fillOpacity={1}
                                        fill="url(#colorBenchmark)"
                                        name="Бенчмарк"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Asset Allocation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                            <h3 className="text-slate-900 dark:text-white mb-6">
                                Распределение активов
                            </h3>

                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={assetAllocation}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {assetAllocation.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                            <div className="space-y-3 mt-4">
                                {assetAllocation.map((asset) => (
                                    <div
                                        key={asset.name}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: asset.color }}
                                            />
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                {asset.name}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-slate-900 dark:text-white">
                                                {asset.percent}%
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                ₽{asset.value.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Top Holdings & AI Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Holdings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <h3 className="text-slate-900 dark:text-white mb-6">
                                Топ активов
                            </h3>
                            <div className="space-y-4">
                                {topHoldings.map((holding) => (
                                    <div
                                        key={holding.symbol}
                                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                                                <span className="text-emerald-600 dark:text-emerald-400">
                                                    {holding.symbol[0]}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-slate-900 dark:text-white">
                                                        {holding.symbol}
                                                    </span>
                                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                                        {holding.name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                                                    <span>
                                                        {holding.weight}% портфеля
                                                    </span>
                                                    <span>•</span>
                                                    <span>
                                                        ₽{holding.value.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Badge
                                                    className={
                                                        holding.change > 0
                                                            ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0 px-2 py-0.5 rounded-md"
                                                            : "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-0 px-2 py-0.5 rounded-md"
                                                    }
                                                >
                                                    {holding.change > 0 ? "+" : ""}
                                                    {holding.change}%
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <h3 className="text-slate-900 dark:text-white">
                                    AI рекомендации
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {aiInsights.map((insight, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl border-2 ${
                                            insight.priority === "high"
                                                ? "bg-red-50 dark:bg-emerald-900/50 border-red-200 dark:border-emerald-800"
                                                : insight.priority === "medium"
                                                  ? "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
                                                  : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`p-2 rounded-lg ${
                                                    insight.priority === "high"
                                                        ? "bg-red-100 dark:bg-emerald-900/80"
                                                        : insight.priority === "medium"
                                                          ? "bg-amber-100 dark:bg-amber-900/30"
                                                          : "bg-blue-100 dark:bg-blue-900/30"
                                                }`}
                                            >
                                                {insight.type === "alert" ? (
                                                    <Bell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                ) : insight.type === "opportunity" ? (
                                                    <Target className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                                ) : (
                                                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-slate-900 dark:text-white mb-1">
                                                    {insight.title}
                                                </h4>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {insight.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Upcoming Dividends */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="border p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-slate-900 dark:text-white mb-1">
                                    Предстоящие выплаты
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Ближайшие дивиденды в декабре
                                </p>
                            </div>
                            <Button typeButton="ghost" className="rounded-xl px-4 py-2">
                                Все выплаты →
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {upcomingDividends.map((dividend) => (
                                <div
                                    key={dividend.company}
                                    className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-900 dark:text-white">
                                            {dividend.company}
                                        </span>
                                        <Badge>{dividend.date}</Badge>
                                    </div>
                                    <p className="text-2xl text-emerald-600 dark:text-emerald-400">
                                        ₽{dividend.amount.toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Benchmark Comparison & Recent Transactions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Benchmark Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-6">
                                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-slate-900 dark:text-white">
                                    Сравнение с индексами
                                </h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                Доходность за 6 месяцев в сравнении с рыночными
                                бенчмарками
                            </p>

                            <div className="space-y-4">
                                {benchmarkComparison.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{
                                                        backgroundColor: item.color,
                                                    }}
                                                />
                                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-slate-900 dark:text-white">
                                                    {item.value > 0 ? "+" : ""}
                                                    {item.value}%
                                                </span>
                                                {item.value > 0 ? (
                                                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                ) : (
                                                    <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                                                )}
                                            </div>
                                        </div>
                                        <Progress
                                            value={item.value * 3}
                                            className="h-2"
                                            style={{
                                                backgroundColor: "rgb(226 232 240 / 0.5)",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-slate-900 dark:text-white mb-1">
                                            Опережаете IMOEX на 5.76%
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            Ваша стратегия показывает отличные результаты
                                            на российском рынке
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Recent Transactions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Repeat className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    <h3 className="text-slate-900 dark:text-white">
                                        Последние операции
                                    </h3>
                                </div>
                                <Button
                                    typeButton="ghost"
                                    className="rounded-xl px-4 py-1"
                                >
                                    Все →
                                </Button>
                            </div>

                            <div className="space-y-3">
                                {recentTransactions.map((tx, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                                    tx.type === "buy"
                                                        ? "bg-emerald-100 dark:bg-emerald-900/30"
                                                        : tx.type === "sell"
                                                          ? "bg-red-100 dark:bg-red-900/30"
                                                          : "bg-purple-100 dark:bg-purple-900/30"
                                                }`}
                                            >
                                                {tx.type === "buy" ? (
                                                    <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                ) : tx.type === "sell" ? (
                                                    <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                                                ) : (
                                                    <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-slate-900 dark:text-white">
                                                        {tx.type === "buy"
                                                            ? "Покупка"
                                                            : tx.type === "sell"
                                                              ? "Продажа"
                                                              : "Дивиденды"}
                                                    </span>
                                                    <span className="text-sm text-slate-600 dark:text-slate-400">
                                                        {tx.asset}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                                    {tx.date} • {tx.price}
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            className={`text-sm ${
                                                tx.type === "buy" || tx.type === "sell"
                                                    ? "text-slate-900 dark:text-white"
                                                    : "text-emerald-600 dark:text-emerald-400"
                                            }`}
                                        >
                                            {tx.type === "sell" ? "-" : "+"}₽
                                            {tx.amount.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Investment Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-slate-900 dark:text-white">
                                    Инвестиционные цели
                                </h3>
                            </div>
                            <Button
                                typeButton="noBg"
                                className="gap-2 rounded-xl px-3 flex py-2 items-center"
                            >
                                <Plus className="w-4 h-4" />
                                Добавить цель
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {investmentGoals.map((goal, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-900/30 border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-slate-900 dark:text-white mb-1">
                                                {goal.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Цель до {goal.deadline}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-baseline justify-between">
                                            <span className="text-2xl text-slate-900 dark:text-white">
                                                ₽{(goal.current / 1000).toFixed(0)}K
                                            </span>
                                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                                / ₽{(goal.target / 1000).toFixed(0)}K
                                            </span>
                                        </div>
                                        <Progress value={goal.progress} className="h-2" />
                                        <div className="flex items-center justify-between">
                                            <Badge className="text-xs">
                                                {goal.progress.toFixed(1)}% выполнено
                                            </Badge>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                ₽
                                                {(
                                                    (goal.target - goal.current) /
                                                    1000
                                                ).toFixed(0)}
                                                K осталось
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Market News */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className="border p-6 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Newspaper className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                <h3 className="text-slate-900 dark:text-white">
                                    Новости рынка
                                </h3>
                            </div>
                            <Button typeButton="ghost" className="rounded-xl px-3 py-1">
                                Все новости →
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {marketNews.map((news, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        {news.impact === "positive" ? (
                                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                                                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                        ) : news.impact === "negative" ? (
                                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                                <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                                            </div>
                                        ) : (
                                            <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                                                <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h4 className="text-sm text-slate-900 dark:text-white mb-2 line-clamp-2">
                                                {news.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                <span>{news.source}</span>
                                                <span>•</span>
                                                <span>{news.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
