"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    TrendingUp,
    DollarSign,
    Activity,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Plus,
    Download,
    Filter,
    ChevronRight,
    Wallet,
    Target,
    Clock,
    Zap,
    Shield,
    Sparkles,
    Bell,
} from "lucide-react";

import {
    LineChart,
    Line,
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
import Badge from "@/components/Badge.tsx";
import Button from "@/components/Button.tsx";
import Footer from "@/components/Footer.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";

// Mock data
const portfolioData = [
    { month: "Янв", value: 950000, profit: 920000 },
    { month: "Фев", value: 980000, profit: 945000 },
    { month: "Мар", value: 1020000, profit: 990000 },
    { month: "Апр", value: 1050000, profit: 1015000 },
    { month: "Май", value: 1100000, profit: 1055000 },
    { month: "Июн", value: 1180000, profit: 1120000 },
];

const assetAllocation = [
    { name: "Акции", value: 45, amount: 531000, color: "#10b981" },
    { name: "Облигации", value: 30, amount: 354000, color: "#3b82f6" },
    { name: "ETF", value: 15, amount: 177000, color: "#8b5cf6" },
    { name: "Кэш", value: 10, amount: 118000, color: "#f59e0b" },
];

const topHoldings = [
    {
        symbol: "SBER",
        name: "Сбербанк",
        shares: 500,
        avgPrice: 285.5,
        currentPrice: 312.8,
        change: 9.56,
        value: 156400,
        dayChange: 2.3,
        sparkline: [285, 288, 290, 295, 300, 308, 312.8],
    },
    {
        symbol: "GAZP",
        name: "Газпром",
        shares: 1000,
        avgPrice: 168.2,
        currentPrice: 175.4,
        change: 4.28,
        value: 175400,
        dayChange: -0.8,
        sparkline: [168, 170, 172, 175, 177, 176, 175.4],
    },
    {
        symbol: "YNDX",
        name: "Яндекс",
        shares: 50,
        avgPrice: 3250.0,
        currentPrice: 3580.5,
        change: 10.17,
        value: 179025,
        dayChange: 3.2,
        sparkline: [3250, 3300, 3400, 3450, 3500, 3550, 3580.5],
    },
    {
        symbol: "LKOH",
        name: "ЛУКОЙЛ",
        shares: 30,
        avgPrice: 6850.0,
        currentPrice: 7125.0,
        change: 4.01,
        value: 213750,
        dayChange: 1.5,
        sparkline: [6850, 6900, 6950, 7000, 7050, 7100, 7125],
    },
];

const recentTransactions = [
    {
        type: "buy",
        symbol: "SBER",
        name: "Сбербанк",
        shares: 100,
        price: 312.8,
        date: "2024-12-04",
        time: "14:35",
        total: 31280,
        broker: "Тинькофф",
    },
    {
        type: "sell",
        symbol: "GAZP",
        name: "Газпром",
        shares: 200,
        price: 175.4,
        date: "2024-12-03",
        time: "11:20",
        total: 35080,
        broker: "Сбер",
    },
    {
        type: "dividend",
        symbol: "LKOH",
        name: "ЛУКОЙЛ",
        shares: 30,
        price: 450.0,
        date: "2024-12-02",
        time: "10:00",
        total: 13500,
        broker: "Тинькофф",
    },
    {
        type: "buy",
        symbol: "YNDX",
        name: "Яндекс",
        shares: 10,
        price: 3580.5,
        date: "2024-12-01",
        time: "15:45",
        total: 35805,
        broker: "ВТБ",
    },
];

const upcomingDividends = [
    {
        symbol: "LKOH",
        name: "ЛУКОЙЛ",
        amount: 450,
        date: "2024-12-15",
        shares: 30,
        total: 13500,
    },
    {
        symbol: "SBER",
        name: "Сбербанк",
        amount: 18.7,
        date: "2024-12-20",
        shares: 500,
        total: 9350,
    },
    {
        symbol: "GAZP",
        name: "Газпром",
        amount: 25.5,
        date: "2025-01-10",
        shares: 1000,
        total: 25500,
    },
];

const marketNews = [
    {
        title: "Сбербанк показал рекордную прибыль",
        source: "РБК",
        time: "2 часа назад",
        impact: "positive",
    },
    {
        title: "ЦБ повысил ключевую ставку до 16%",
        source: "Ведомости",
        time: "5 часов назад",
        impact: "negative",
    },
    {
        title: "ЛУКОЙЛ объявил о дивидендах",
        source: "Коммерсантъ",
        time: "1 день назад",
        impact: "positive",
    },
];

const sectorPerformance = [
    { sector: "Финансы", allocation: 35, change: 5.2, color: "#10b981" },
    { sector: "Энергетика", allocation: 28, change: -1.3, color: "#3b82f6" },
    { sector: "IT", allocation: 22, change: 8.7, color: "#8b5cf6" },
    { sector: "Товары", allocation: 15, change: 2.1, color: "#f59e0b" },
];

const calendarEvents = [
    { date: "15 дек", event: "Дивиденды ЛУКОЙЛ", type: "dividend" },
    { date: "20 дек", event: "Дивиденды Сбербанк", type: "dividend" },
    { date: "25 дек", event: "Отчёт Газпром", type: "report" },
    { date: "10 янв", event: "Дивиденды Газпром", type: "dividend" },
];

export default function PortfolioDashboard() {
    const [selectedPeriod, setSelectedPeriod] = useState("6M");

    const totalValue = 1180000;
    const totalProfit = 180000;
    const profitPercent = 18.03;
    const dailyChange = 2.45;
    const dailyChangeValue = 28900;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <LandingHeader />
            <div className="max-w-[1600px] mx-auto px-6 py-40 space-y-8">
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-slate-900 dark:text-white mb-2">
                                Добро пожаловать, Иван! 👋
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Вот обзор ваших инвестиций на{" "}
                                {new Date().toLocaleDateString("ru-RU")}
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <button className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105 transition-all group">
                                <Plus className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
                                <div className="text-white/90">Новая сделка</div>
                            </button>
                            <button className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all group">
                                <Download className="w-5 h-5 mb-2 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                                <div className="text-slate-700 dark:text-slate-300">
                                    Экспорт
                                </div>
                            </button>
                            <button className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all group">
                                <Filter className="w-5 h-5 mb-2 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                                <div className="text-slate-700 dark:text-slate-300">
                                    Фильтры
                                </div>
                            </button>
                            <button className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all group">
                                <Sparkles className="w-5 h-5 mb-2 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                                <div className="text-slate-700 dark:text-slate-300">
                                    AI Советы
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* Total Value */}
                    <div className="border p-6 bg-gradient-to-br from-emerald-600 to-teal-600 border-0 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                    <Wallet className="w-6 h-6" />
                                </div>
                                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                                    Все портфели
                                </Badge>
                            </div>
                            <div className="space-y-1">
                                <p className="text-white/80">Общая стоимость</p>
                                <h2 className="text-white">
                                    ₽{totalValue.toLocaleString()}
                                </h2>
                                <div className="flex items-center gap-2 text-white/90">
                                    <ArrowUpRight className="w-4 h-4" />
                                    <span>+{dailyChange}% сегодня</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Profit */}
                    <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl">
                                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">Прибыль</p>
                            <h3 className="text-slate-900 dark:text-white">
                                ₽{totalProfit.toLocaleString()}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400">
                                +{profitPercent}%
                            </p>
                        </div>
                    </div>

                    {/* Daily Change */}
                    <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-2xl">
                                <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-slate-600 dark:text-slate-400">
                                За сегодня
                            </p>
                            <h3 className="text-slate-900 dark:text-white">
                                ₽{dailyChangeValue.toLocaleString()}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400">
                                +{dailyChange}%
                            </p>
                        </div>
                    </div>

                    {/* Target Progress */}
                    <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-2xl">
                                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <Badge className="text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
                                59%
                            </Badge>
                        </div>
                        <div className="space-y-3">
                            <p className="text-slate-600 dark:text-slate-400">До цели</p>
                            <p className="text-slate-900 dark:text-white">
                                ₽1,180,000 из ₽2,000,000
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Portfolio Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-1">
                                        Динамика портфеля
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Рост за последние 6 месяцев
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    {["1M", "3M", "6M", "1Y", "Все"].map((period) => (
                                        <Button
                                            key={period}
                                            typeButton={
                                                selectedPeriod === period
                                                    ? "emerald"
                                                    : "ghost"
                                            }
                                            className={
                                                selectedPeriod === period
                                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                                                    : ""
                                            }
                                            onClick={() => setSelectedPeriod(period)}
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
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#e5e7eb"
                                        className="dark:stroke-slate-700"
                                    />
                                    <XAxis dataKey="month" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "12px",
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Asset Allocation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="border p-6 h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <h3 className="text-slate-900 dark:text-white mb-6">
                                Распределение активов
                            </h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={assetAllocation}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {assetAllocation.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="space-y-3 mt-6">
                                {assetAllocation.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: item.color }}
                                            />
                                            <span className="text-slate-700 dark:text-slate-300">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-slate-900 dark:text-white">
                                                {item.value}%
                                            </div>
                                            <div className="text-slate-500 dark:text-slate-400">
                                                ₽{item.amount.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sector Performance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-slate-900 dark:text-white mb-1">
                                    Производительность по секторам
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Анализ доходности вашего портфеля
                                </p>
                            </div>
                            <Button
                                typeButton="ghost"
                                className="text-emerald-600 dark:text-emerald-400"
                            >
                                Подробнее
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {sectorPerformance.map((sector) => (
                                <div
                                    key={sector.sector}
                                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-slate-700 dark:text-slate-300">
                                            {sector.sector}
                                        </span>
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: sector.color }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-slate-900 dark:text-white">
                                                {sector.allocation}%
                                            </span>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                портфеля
                                            </span>
                                        </div>
                                        <div
                                            className={`flex items-center gap-1 ${
                                                sector.change >= 0
                                                    ? "text-emerald-600 dark:text-emerald-400"
                                                    : "text-red-600 dark:text-red-400"
                                            }`}
                                        >
                                            {sector.change >= 0 ? (
                                                <ArrowUpRight className="w-3 h-3" />
                                            ) : (
                                                <ArrowDownRight className="w-3 h-3" />
                                            )}
                                            <span>{Math.abs(sector.change)}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Top Holdings and Upcoming Dividends */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Holdings - Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-900 dark:text-white">
                                    Топ активы
                                </h3>
                                <Button
                                    typeButton="ghost"
                                    className="text-emerald-600 dark:text-emerald-400"
                                >
                                    Все активы
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {topHoldings.map((holding) => (
                                    <div
                                        key={holding.symbol}
                                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
                                                    {holding.symbol.slice(0, 2)}
                                                </div>
                                                <div>
                                                    <div className="text-slate-900 dark:text-white">
                                                        {holding.symbol}
                                                    </div>
                                                    <div className="text-slate-500 dark:text-slate-400">
                                                        {holding.shares} акций · ₽
                                                        {holding.currentPrice}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-slate-900 dark:text-white">
                                                    ₽{holding.value.toLocaleString()}
                                                </div>
                                                <div
                                                    className={
                                                        holding.change >= 0
                                                            ? "text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-1"
                                                            : "text-red-600 dark:text-red-400 flex items-center justify-end gap-1"
                                                    }
                                                >
                                                    {holding.change >= 0 ? (
                                                        <ArrowUpRight className="w-3 h-3" />
                                                    ) : (
                                                        <ArrowDownRight className="w-3 h-3" />
                                                    )}
                                                    {holding.change}%
                                                </div>
                                            </div>
                                        </div>
                                        {/* Mini sparkline */}
                                        <div className="h-8 -mb-2">
                                            <ResponsiveContainer
                                                width="100%"
                                                height="100%"
                                            >
                                                <LineChart
                                                    data={holding.sparkline.map(
                                                        (val, idx) => ({ value: val })
                                                    )}
                                                >
                                                    <Line
                                                        type="monotone"
                                                        dataKey="value"
                                                        stroke={
                                                            holding.dayChange >= 0
                                                                ? "#10b981"
                                                                : "#ef4444"
                                                        }
                                                        strokeWidth={2}
                                                        dot={false}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Upcoming Dividends */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl">
                                        <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white">
                                        Предстоящие дивиденды
                                    </h3>
                                </div>
                                <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0">
                                    ₽48,350
                                </Badge>
                            </div>
                            <div className="space-y-3">
                                {upcomingDividends.map((dividend, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <div className="text-slate-900 dark:text-white">
                                                    {dividend.symbol}
                                                </div>
                                                <div className="text-slate-500 dark:text-slate-400">
                                                    {dividend.shares} акций × ₽
                                                    {dividend.amount}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-emerald-600 dark:text-emerald-400">
                                                    +₽{dividend.total.toLocaleString()}
                                                </div>
                                                <div className="text-slate-500 dark:text-slate-400">
                                                    {new Date(
                                                        dividend.date
                                                    ).toLocaleDateString("ru-RU")}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            <span className="text-slate-600 dark:text-slate-400">
                                                Через{" "}
                                                {Math.ceil(
                                                    (new Date(dividend.date).getTime() -
                                                        Date.now()) /
                                                        (1000 * 60 * 60 * 24)
                                                )}{" "}
                                                дней
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Recent Transactions and Calendar */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Transactions - Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-900 dark:text-white">
                                    Последние операции
                                </h3>
                                <Button
                                    typeButton="ghost"
                                    className="text-emerald-600 dark:text-emerald-400"
                                >
                                    История
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {recentTransactions.map((transaction, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                                                        transaction.type === "buy"
                                                            ? "bg-emerald-100 dark:bg-emerald-500/10"
                                                            : transaction.type === "sell"
                                                              ? "bg-red-100 dark:bg-red-500/10"
                                                              : "bg-blue-100 dark:bg-blue-500/10"
                                                    }`}
                                                >
                                                    {transaction.type === "buy" ? (
                                                        <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                    ) : transaction.type === "sell" ? (
                                                        <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                                                    ) : (
                                                        <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-slate-900 dark:text-white">
                                                        {transaction.type === "buy"
                                                            ? "Покупка"
                                                            : transaction.type === "sell"
                                                              ? "Продажа"
                                                              : "Дивиденд"}{" "}
                                                        {transaction.symbol}
                                                    </div>
                                                    <div className="text-slate-500 dark:text-slate-400">
                                                        {transaction.shares} × ₽
                                                        {transaction.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div
                                                    className={
                                                        transaction.type === "buy"
                                                            ? "text-red-600 dark:text-red-400"
                                                            : "text-emerald-600 dark:text-emerald-400"
                                                    }
                                                >
                                                    {transaction.type === "buy"
                                                        ? "-"
                                                        : "+"}
                                                    ₽{transaction.total.toLocaleString()}
                                                </div>
                                                <div className="text-slate-500 dark:text-slate-400">
                                                    {new Date(
                                                        transaction.date
                                                    ).toLocaleDateString("ru-RU")}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                                            <span className="text-slate-600 dark:text-slate-400">
                                                {transaction.broker}
                                            </span>
                                            <span className="text-slate-500 dark:text-slate-400">
                                                {transaction.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Calendar Events */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-500/10 rounded-xl">
                                        <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white">
                                        Календарь
                                    </h3>
                                </div>
                                <Button
                                    typeButton="ghost"
                                    className="text-purple-600 dark:text-purple-400"
                                >
                                    Все события
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {calendarEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-500/10">
                                                <span className="text-purple-600 dark:text-purple-400">
                                                    {event.date.split(" ")[0]}
                                                </span>
                                                <span className="text-purple-600 dark:text-purple-400">
                                                    {event.date.split(" ")[1]}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-slate-900 dark:text-white mb-1">
                                                    {event.event}
                                                </div>
                                                <Badge
                                                    className={
                                                        event.type === "dividend"
                                                            ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0"
                                                            : "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-0"
                                                    }
                                                >
                                                    {event.type === "dividend"
                                                        ? "Дивиденды"
                                                        : "Отчёт"}
                                                </Badge>
                                            </div>
                                            <Bell className="w-5 h-5 text-slate-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Market News and Risk Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Market News */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-500/10 rounded-xl">
                                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white">
                                        Новости рынка
                                    </h3>
                                </div>
                                <Button
                                    typeButton="ghost"
                                    className="text-blue-600 dark:text-blue-400"
                                >
                                    Все новости
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {marketNews.map((news, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`w-2 h-2 rounded-full mt-2 ${
                                                    news.impact === "positive"
                                                        ? "bg-emerald-500"
                                                        : "bg-red-500"
                                                }`}
                                            />
                                            <div className="flex-1">
                                                <div className="text-slate-900 dark:text-white mb-1">
                                                    {news.title}
                                                </div>
                                                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
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

                    {/* Risk Analysis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                    >
                        <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-500/10 rounded-xl">
                                        <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white">
                                        Анализ рисков
                                    </h3>
                                </div>
                                <Badge className="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-0">
                                    Средний
                                </Badge>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-700 dark:text-slate-300">
                                            Волатильность
                                        </span>
                                        <span className="text-slate-900 dark:text-white">
                                            23.4%
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-700 dark:text-slate-300">
                                            Концентрация
                                        </span>
                                        <span className="text-slate-900 dark:text-white">
                                            35%
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-700 dark:text-slate-300">
                                            Диверсификация
                                        </span>
                                        <span className="text-slate-900 dark:text-white">
                                            72%
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border border-orange-200 dark:border-orange-900">
                                    <p className="text-slate-700 dark:text-slate-300">
                                        ⚠️ Ваш портфель имеет повышенную концентрацию в
                                        энергетическом секторе. Рекомендуем
                                        диверсификацию.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <div className="border p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-emerald-950/20 border-purple-200 dark:border-purple-900">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg shadow-purple-500/25">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-slate-900 dark:text-white">
                                        AI Рекомендация
                                    </h3>
                                    <Badge className="bg-purple-600 text-white border-0">
                                        Новое
                                    </Badge>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-4">
                                    Наша модель обнаружила, что ваш портфель может быть
                                    слишком сконцентрирован в энергетическом секторе
                                    (35%). Рекомендуем диверсифицировать, добавив
                                    технологические акции или ETF. Ожидаемое улучшение
                                    риск/доходность: +12%.
                                </p>
                                <div className="flex gap-3">
                                    <Button
                                        typeButton="emerald"
                                        className="bg-purple-600 hover:bg-purple-700 text-white"
                                    >
                                        Посмотреть стратегию
                                    </Button>
                                    <Button
                                        typeButton="noBg"
                                        className="border-purple-300 dark:border-purple-700"
                                    >
                                        Напомнить позже
                                    </Button>
                                    <Button
                                        typeButton="ghost"
                                        className="text-slate-600 dark:text-slate-400"
                                    >
                                        Скрыть
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
