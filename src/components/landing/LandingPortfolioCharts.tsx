import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const areaData = [
    { month: "Янв", value: 118.4 },
    { month: "Фев", value: 108.68 },
    { month: "Мар", value: 113.72 },
    { month: "Апр", value: 96.8 },
    { month: "Май", value: 80.96 },
    { month: "Июн", value: 68 },
    { month: "Июл", value: 52.52 },
];

const pieData = [
    { name: "Акции", value: 45, color: "#10b981" },
    { name: "Облигации", value: 30, color: "#14b8a6" },
    { name: "ETF", value: 25, color: "#64748b" },
];

function LandingPortfolioCharts() {
    return (
        <>
            <div className="shadow-lg col-span-2 flex flex-col border group p-8 h-full border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 rounded-3xl text-left hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                <p className="text-xl text-slate-900 mb-2">Рост портфеля</p>
                <p className="text-slate-600 mb-10">Динамика за последние 7 месяцев</p>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={areaData}
                            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                        >
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
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="month" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip
                                formatter={(value) => [`${value} ₽`, "Стоимость"]}
                                labelFormatter={(label) => `Месяц: ${label}`}
                                contentStyle={{
                                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                                    border: "1px solid rgba(148, 163, 184, 0.3)",
                                    borderRadius: "0.75rem",
                                }}
                                labelStyle={{
                                    color: "#e2e8f0",
                                    fontWeight: 500,
                                }}
                                itemStyle={{
                                    color: "#f8fafc",
                                }}
                            />

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#10b981"
                                fill="url(#colorValue)"
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="shadow-lg flex flex-col border group p-8 h-full border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 rounded-3xl text-left hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                <p className="text-xl text-slate-900 mb-2">Распределение</p>
                <p className="text-slate-600 mb-10">Структура портфеля</p>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                innerRadius={40}
                                paddingAngle={2}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor:
                                        document.documentElement.classList.contains(
                                            "dark"
                                        )
                                            ? "rgba(30, 41, 59, 0.9)"
                                            : "#ffffff",
                                    border: document.documentElement.classList.contains(
                                        "dark"
                                    )
                                        ? "1px solid rgba(148, 163, 184, 0.3)"
                                        : "1px solid #e2e8f0",
                                    borderRadius: "0.75rem",
                                    backdropFilter: "blur(6px)",
                                }}
                                labelStyle={{
                                    color: document.documentElement.classList.contains(
                                        "dark"
                                    )
                                        ? "#f1f5f9"
                                        : "#1e293b",
                                    fontWeight: 500,
                                }}
                                itemStyle={{
                                    color: document.documentElement.classList.contains(
                                        "dark"
                                    )
                                        ? "#e2e8f0"
                                        : "#334155",
                                    fontSize: "14px",
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                    {pieData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-slate-600">{item.name}</span>
                            </div>
                            <span className="text-slate-900">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LandingPortfolioCharts;
