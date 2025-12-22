import { Card } from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { formatDate } from "@/utils/FormatDate.ts";
import type { UserSubscription } from "@/types/profile/subscription.ts";
import type { JSX } from "react";

type ProfileBullingTabSubscriptionProps = {
    user_subscription: UserSubscription;
};

export const ProfileBillingTabSubscription = ({
    user_subscription,
}: ProfileBullingTabSubscriptionProps): JSX.Element => {
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-slate-900 dark:text-white mb-2">
                        {user_subscription.plan.toUpperCase()} подписка
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                        <span>
                            {user_subscription.expired_at ? (
                                <>Активна до {formatDate(user_subscription.expired_at)}</>
                            ) : (
                                "бессрочно"
                            )}
                        </span>
                    </p>
                </div>
                <span
                    className={`px-3 py-1 text-sm rounded-lg
                     ${
                         user_subscription.is_active
                             ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                             : "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400"
                     }`}
                >
                    {user_subscription.is_active ? "Активна" : "Неактивна"}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        План
                    </div>
                    <div className="text-slate-900 dark:text-white">
                        {user_subscription.plan.toUpperCase()}
                    </div>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        Стоимость
                    </div>
                    <div className="text-slate-900 dark:text-white">₽9,990/год</div>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        Следующий платёж
                    </div>
                    <div className="text-slate-900 dark:text-white">31.12.2025</div>
                </div>
            </div>

            <div className="flex gap-3">
                <Button
                    variant="outline"
                    className="border-slate-300 dark:border-slate-700"
                >
                    Изменить план
                </Button>
                <Button
                    variant="outline"
                    className="border-red-300 dark:border-red-700 text-red-600 dark:text-red-400"
                >
                    Отменить подписку
                </Button>
            </div>
        </Card>
    );
};
