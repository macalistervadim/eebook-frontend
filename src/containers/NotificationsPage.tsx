"use client";

import { motion } from "motion/react";
import {
    Bell,
    Check,
    X,
    TrendingUp,
    DollarSign,
    AlertCircle,
    Info,
    Calendar,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";
import PortfolioHeader from "@/components/landing/PortfolioHeader.tsx";

const notifications = [
    {
        id: 1,
        type: "alert",
        title: "Сбербанк достиг целевой цены",
        description: "Акция SBER выросла до ₽312.8, достигнув вашей целевой цены ₽310",
        time: "5 минут назад",
        read: false,
        icon: TrendingUp,
        color: "emerald",
    },
    {
        id: 2,
        type: "dividend",
        title: "Получены дивиденды от ЛУКОЙЛ",
        description: "На ваш счет зачислено ₽13,500 дивидендов",
        time: "2 часа назад",
        read: false,
        icon: DollarSign,
        color: "blue",
    },
    {
        id: 3,
        type: "ai",
        title: "Новая AI рекомендация",
        description: "Система предлагает ребалансировать портфель для снижения риска",
        time: "5 часов назад",
        read: true,
        icon: Sparkles,
        color: "purple",
    },
    {
        id: 4,
        type: "info",
        title: "Отчет за май готов",
        description: "Ваш месячный отчет доступен для скачивания",
        time: "1 день назад",
        read: true,
        icon: Info,
        color: "amber",
    },
    {
        id: 5,
        type: "alert",
        title: "Высокая волатильность портфеля",
        description: "Волатильность увеличилась до 28%, рекомендуем проверить позиции",
        time: "2 дня назад",
        read: true,
        icon: AlertCircle,
        color: "red",
    },
    {
        id: 6,
        type: "calendar",
        title: "Предстоящие дивиденды Газпром",
        description: "Через 5 дней ожидаются дивиденды ₽25,500",
        time: "3 дня назад",
        read: true,
        icon: Calendar,
        color: "blue",
    },
];

export default function NotificationsPage() {
    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1200px] py-20 mx-auto px-6 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-slate-900 dark:text-white">
                                    Уведомления
                                </h1>
                                {unreadCount > 0 && (
                                    <Badge className="bg-emerald-600 text-white border-0">
                                        {unreadCount} новых
                                    </Badge>
                                )}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">
                                Все важные события ваших инвестиций
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="rounded-xl border-slate-300 dark:border-slate-700"
                            >
                                <Check className="w-4 h-4 mr-2" />
                                Прочитать все
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-xl border-slate-300 dark:border-slate-700"
                            >
                                Настройки
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Tabs defaultValue="all" className="space-y-6">
                        <TabsList className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1">
                            <TabsTrigger value="all" className="rounded-lg">
                                <Bell className="w-4 h-4 mr-2" />
                                Все
                            </TabsTrigger>
                            <TabsTrigger value="unread" className="rounded-lg">
                                Непрочитанные
                            </TabsTrigger>
                            <TabsTrigger value="ai" className="rounded-lg">
                                <Sparkles className="w-4 h-4 mr-2" />
                                AI
                            </TabsTrigger>
                            <TabsTrigger value="alerts" className="rounded-lg">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                Оповещения
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="space-y-3">
                            {notifications.map((notification, index) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Card
                                        className={`p-6 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all cursor-pointer ${
                                            notification.read
                                                ? "bg-white dark:bg-slate-800"
                                                : "bg-emerald-50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900"
                                        }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`p-3 rounded-2xl flex-shrink-0 ${
                                                    notification.color === "emerald"
                                                        ? "bg-emerald-100 dark:bg-emerald-500/10"
                                                        : notification.color === "blue"
                                                          ? "bg-blue-100 dark:bg-blue-500/10"
                                                          : notification.color ===
                                                              "purple"
                                                            ? "bg-purple-100 dark:bg-purple-500/10"
                                                            : notification.color ===
                                                                "amber"
                                                              ? "bg-amber-100 dark:bg-amber-500/10"
                                                              : "bg-red-100 dark:bg-red-500/10"
                                                }`}
                                            >
                                                <notification.icon
                                                    className={`w-6 h-6 ${
                                                        notification.color === "emerald"
                                                            ? "text-emerald-600 dark:text-emerald-400"
                                                            : notification.color ===
                                                                "blue"
                                                              ? "text-blue-600 dark:text-blue-400"
                                                              : notification.color ===
                                                                  "purple"
                                                                ? "text-purple-600 dark:text-purple-400"
                                                                : notification.color ===
                                                                    "amber"
                                                                  ? "text-amber-600 dark:text-amber-400"
                                                                  : "text-red-600 dark:text-red-400"
                                                    }`}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <h4 className="text-slate-900 dark:text-white">
                                                        {notification.title}
                                                    </h4>
                                                    {!notification.read && (
                                                        <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0 mt-2" />
                                                    )}
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                                    {notification.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-500 dark:text-slate-400">
                                                        {notification.time}
                                                    </span>
                                                    <div className="flex gap-2">
                                                        {!notification.read && (
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="rounded-lg"
                                                            >
                                                                <Check className="w-4 h-4 mr-1" />
                                                                Прочитано
                                                            </Button>
                                                        )}
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="rounded-lg"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="unread" className="space-y-3">
                            {notifications
                                .filter((n) => !n.read)
                                .map((notification, index) => (
                                    <Card
                                        key={notification.id}
                                        className="p-6 bg-emerald-50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`p-3 rounded-2xl flex-shrink-0 ${
                                                    notification.color === "emerald"
                                                        ? "bg-emerald-100 dark:bg-emerald-500/10"
                                                        : "bg-blue-100 dark:bg-blue-500/10"
                                                }`}
                                            >
                                                <notification.icon
                                                    className={`w-6 h-6 ${
                                                        notification.color === "emerald"
                                                            ? "text-emerald-600 dark:text-emerald-400"
                                                            : "text-blue-600 dark:text-blue-400"
                                                    }`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-slate-900 dark:text-white mb-2">
                                                    {notification.title}
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400 mb-2">
                                                    {notification.description}
                                                </p>
                                                <span className="text-slate-500 dark:text-slate-400">
                                                    {notification.time}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
