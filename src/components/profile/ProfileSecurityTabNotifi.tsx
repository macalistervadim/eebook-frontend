import { Switch } from "@/components/ui/Switch.tsx";
import { Separator } from "@/components/ui/Separator.tsx";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileSecurityTabNotifi = (): JSX.Element => {
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-8">Настройки уведомлений</h3>
            <div className="space-y-6 max-w-3xl">
                <div>
                    <h4 className="text-slate-900 dark:text-white mb-4">
                        Email уведомления
                    </h4>
                    <div className="space-y-3">
                        {[
                            {
                                label: "Изменения в портфеле",
                                description:
                                    "Уведомления о значительных изменениях стоимости",
                                enabled: true,
                            },
                            {
                                label: "Дивиденды и купоны",
                                description: "Напоминания о предстоящих выплатах",
                                enabled: true,
                            },
                            {
                                label: "AI рекомендации",
                                description: "Персональные инвестиционные советы",
                                enabled: true,
                            },
                            {
                                label: "Новости рынка",
                                description: "Важные события на финансовых рынках",
                                enabled: false,
                            },
                            {
                                label: "Еженедельный отчёт",
                                description: "Сводка по вашим инвестициям",
                                enabled: true,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                            >
                                <div>
                                    <div className="text-slate-900 dark:text-white mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                        {item.description}
                                    </div>
                                </div>
                                <Switch defaultChecked={item.enabled} />
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                <div>
                    <h4 className="text-slate-900 dark:text-white mb-4">
                        Push уведомления
                    </h4>
                    <div className="space-y-3">
                        {[
                            {
                                label: "Критические оповещения",
                                description: "Важные изменения в портфеле",
                                enabled: true,
                            },
                            {
                                label: "Достижение целей",
                                description: "Когда вы достигаете инвестиционных целей",
                                enabled: true,
                            },
                            {
                                label: "Новые сделки",
                                description: "Подтверждение выполненных операций",
                                enabled: true,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                            >
                                <div>
                                    <div className="text-slate-900 dark:text-white mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                        {item.description}
                                    </div>
                                </div>
                                <Switch defaultChecked={item.enabled} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};
