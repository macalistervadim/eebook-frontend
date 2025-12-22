import { Card } from "@/components/ui/Card.tsx";
import { Activity, BarChart3, DollarSign, TrendingUp } from "lucide-react";
import type { JSX } from "react";

export const ProfileStats = (): JSX.Element => {
    const stats = [
        { label: "Портфелей", value: "3", icon: BarChart3 },
        { label: "Активов", value: "47", icon: Activity },
        { label: "Доходность", value: "+18.03%", icon: TrendingUp, positive: true },
        { label: "Капитал", value: "₽1.28M", icon: DollarSign },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <Card
                    key={index}
                    className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                            <stat.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        {stat.label}
                    </div>
                    <div
                        className={`text-2xl ${stat.positive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}
                    >
                        {stat.value}
                    </div>
                </Card>
            ))}
        </div>
    );
};
