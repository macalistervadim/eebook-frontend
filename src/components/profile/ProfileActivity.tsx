import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileActivity = (): JSX.Element => {
    const lastActivity = [
        {
            action: "Покупка акций AAPL",
            date: "Сегодня, 14:32",
            amount: "+50 шт.",
        },
        {
            action: "Получение дивидендов",
            date: "Вчера, 10:15",
            amount: "+₽2,450",
        },
        {
            action: "Продажа облигаций ОФЗ",
            date: "3 дня назад",
            amount: "-10 шт.",
        },
    ];

    return (
        <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">Последняя активность</h3>
            <div className="space-y-4">
                {lastActivity.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                        <div>
                            <div className="text-slate-900 dark:text-white mb-1">
                                {item.action}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {item.date}
                            </div>
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 font-medium">
                            {item.amount}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
