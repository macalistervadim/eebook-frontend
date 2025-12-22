import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar.tsx";
import { Calendar, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";
import type { User } from "@/types/profile/user.ts";
import type { UserSubscription } from "@/types/profile/subscription.ts";
import { formatDate } from "@/utils/FormatDate.ts";

type ProfileCardProps = {
    avatar: string;
    user: User;
    subscription: UserSubscription | null;
};

export const ProfileCard = ({
    avatar,
    user,
    subscription,
}: ProfileCardProps): JSX.Element => {
    return (
        <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <div className="text-center ">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-slate-200 dark:ring-slate-700">
                    <AvatarImage src={avatar} />
                    <AvatarFallback className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        ИИ
                    </AvatarFallback>
                </Avatar>
                <h3 className="text-slate-900 dark:text-white mb-1"></h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    {subscription?.plan.toUpperCase()}
                </p>
            </div>

            <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span>
                        С {user.created_at ? formatDate(user.created_at) : "—"}
                    </span>{" "}
                </div>
            </div>
        </Card>
    );
};
