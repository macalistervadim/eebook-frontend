import { Separator } from "@/components/ui/Separator.tsx";
import { Bell, CreditCard, LogOut, Settings, Shield, User } from "lucide-react";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

type ProfileNavigationProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export const ProfileNavigation = ({
    activeTab,
    setActiveTab,
}: ProfileNavigationProps): JSX.Element => {
    const menuItems = [
        { id: "overview", label: "Обзор", icon: User },
        { id: "account", label: "Аккаунт", icon: Settings },
        { id: "security", label: "Безопасность", icon: Shield },
        { id: "notifications", label: "Уведомления", icon: Bell },
        { id: "billing", label: "Подписка", icon: CreditCard },
    ];
    const navigate = useNavigate();

    return (
        <Card className="p-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <nav className="space-y-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                            activeTab === item.id
                                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                    </button>
                ))}

                <Separator className="my-3" />

                <button
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                    onClick={() => navigate("/logout")}
                >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Выйти</span>
                </button>
            </nav>
        </Card>
    );
};
