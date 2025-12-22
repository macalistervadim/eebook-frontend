import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileBillingTabAdvantages = (): JSX.Element => {
    const advantages = [
        "AI-прогнозы и рекомендации",
        "Продвинутая аналитика",
        "Приоритетная поддержка",
        "Эксклюзивные материалы",
        "Персональные цели",
        "Неограниченный экспорт",
    ];
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">Преимущества Premium</h3>
            <div className="grid grid-cols-2 gap-4">
                {advantages.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-slate-700 dark:text-slate-300">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
};
