"use client";

import { motion } from "motion/react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { TrendingUp, DollarSign, Activity, ArrowUpRight } from "lucide-react";

const portfolioData = [
    { month: "Янв", value: 285000 },
    { month: "Фев", value: 312000 },
    { month: "Мар", value: 298000 },
    { month: "Апр", value: 345000 },
    { month: "Май", value: 389000 },
    { month: "Июн", value: 425000 },
    { month: "Июл", value: 468000 },
];

const assetsData = [
    { name: "Акции", value: 45, color: "#10b981" },
    { name: "Облигации", value: 30, color: "#14b8a6" },
    { name: "ETF", value: 25, color: "#64748b" },
];

export default function Dashboard() {
    return (
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Красота в каждой детали
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Интерфейс, разработанный для инвесторов. Все данные под рукой,
                        ничего лишнего.
                    </p>
                </motion.div>

                {/* Main Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Browser chrome */}
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-t-3xl p-3 flex items-center gap-2 shadow-xl">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                            <div className="w-4 h-4 text-emerald-500">🔒</div>
                            eebook.com
                        </div>
                    </div>

                    {/* Dashboard content */}
                    <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 md:p-12 rounded-b-3xl shadow-2xl border-x border-b border-slate-200">
                        {/* Stats cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="border group p-6 bg-white border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-slate-600">
                                                Общий капитал
                                            </span>
                                            <div className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                                                <DollarSign className="w-5 h-5 text-emerald-600" />
                                            </div>
                                        </div>
                                        <div className="text-3xl text-slate-900 mb-1">
                                            468 000 ₽
                                        </div>
                                        <div className="flex items-center gap-1 text-emerald-600 text-sm">
                                            <ArrowUpRight className="w-4 h-4" />
                                            <span>+18.2% за месяц</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="border group p-6 bg-white border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-slate-600">
                                                Доходность
                                            </span>
                                            <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl">
                                                <TrendingUp className="w-5 h-5 text-teal-600" />
                                            </div>
                                        </div>
                                        <div className="text-3xl text-slate-900 mb-1">
                                            +64.2%
                                        </div>
                                        <div className="text-slate-500 text-sm">
                                            годовых
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className="border group p-6 bg-white border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-slate-600">Активы</span>
                                            <div className="p-2 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl">
                                                <Activity className="w-5 h-5 text-slate-600" />
                                            </div>
                                        </div>
                                        <div className="text-3xl text-slate-900 mb-1">
                                            127
                                        </div>
                                        <div className="text-slate-500 text-sm">
                                            позиций
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Chart - Takes 2 columns */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-2"
                            >
                                <div className="border p-6 bg-white border-slate-200 rounded-2xl shadow-lg">
                                    <div className="mb-6">
                                        <h3 className="text-xl text-slate-900 mb-2">
                                            Рост портфеля
                                        </h3>
                                        <p className="text-slate-600">
                                            Динамика за последние 7 месяцев
                                        </p>
                                    </div>
                                    <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
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
                                                    stroke="#e2e8f0"
                                                />
                                                <XAxis
                                                    dataKey="month"
                                                    stroke="#94a3b8"
                                                    style={{ fontSize: "14px" }}
                                                />
                                                <YAxis
                                                    stroke="#94a3b8"
                                                    style={{ fontSize: "14px" }}
                                                    tickFormatter={(value) =>
                                                        `${value / 1000}k`
                                                    }
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: "var(--bg-card)",
                                                        border: "1px solid var(--border-card)",
                                                        borderRadius: 12,
                                                        padding: 12,
                                                    }}
                                                    formatter={(value: any) => [
                                                        `${Number(value).toLocaleString("ru-RU")} ₽`,
                                                        "",
                                                    ]}
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#10b981"
                                                    strokeWidth={3}
                                                    fill="url(#colorValue)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pie Chart - Asset Distribution */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="border p-6 bg-white border-slate-200 rounded-2xl shadow-lg h-full">
                                    <div className="mb-4">
                                        <h3 className="text-xl text-slate-900 mb-2">
                                            Распределение
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            Структура портфеля
                                        </p>
                                    </div>
                                    <div className="h-48 flex items-center justify-center">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={assetsData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={50}
                                                    outerRadius={70}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {assetsData.map((entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={entry.color}
                                                        />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        {assetsData.map((asset, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between text-sm"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-3 h-3 rounded-full"
                                                        style={{
                                                            backgroundColor: asset.color,
                                                        }}
                                                    />
                                                    <span className="text-slate-600">
                                                        {asset.name}
                                                    </span>
                                                </div>
                                                <span className="text-slate-900">
                                                    {asset.value}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Floating elements for visual interest */}
                    <motion.div
                        className="hidden lg:block absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="text-sm text-slate-600 mb-2">AI-прогноз</div>
                        <div className="text-3xl text-emerald-600 mb-1">+12.4%</div>
                        <div className="text-xs text-slate-500">следующий месяц</div>
                        <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                            <ArrowUpRight className="w-3 h-3" />
                            <span>высокая уверенность</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hidden lg:block absolute -left-8 bottom-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="text-sm text-slate-600 mb-2">Ближайший купон</div>
                        <div className="text-2xl text-slate-900 mb-1">12 ноя</div>
                        <div className="text-xl text-emerald-600">2 845 ₽</div>
                        <div className="mt-3 text-xs text-slate-500">ОФЗ 26233</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
