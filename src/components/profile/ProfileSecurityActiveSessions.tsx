import { Button } from "@/components/ui/Button.tsx";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileSecurityActiveSessions = (): JSX.Element => {
    const activeSessions = [
        {
            device: "MacBook Pro · Chrome",
            location: "Москва",
            time: "Сейчас",
            current: true,
        },
        {
            device: "iPhone · Safari",
            location: "Москва",
            time: "2 дня назад",
            current: false,
        },
    ];
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">Активные сессии</h3>
            <div className="space-y-3">
                {activeSessions.map((session, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                        <div>
                            <div className="text-slate-900 dark:text-white mb-1">
                                {session.device}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {session.location} · {session.time}
                            </div>
                        </div>
                        {session.current ? (
                            <span className="text-sm text-emerald-600 dark:text-emerald-400">
                                Текущая
                            </span>
                        ) : (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600 dark:text-red-400"
                            >
                                Завершить
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
};
