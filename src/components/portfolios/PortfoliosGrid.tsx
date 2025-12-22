import { Button } from "@/components/ui/Button.tsx";
import { Edit, Eye, MoreVertical } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { JSX } from "react";
import type { Portfolio } from "@/types/portfolios/portfolio.ts";

type PortfoliosGridProps = {
    portfolio: Portfolio;
};

export const PortfoliosGrid = ({ portfolio }: PortfoliosGridProps): JSX.Element => {
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
                    <Button type="button" variant="ghost" className="rounded-xl">
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
