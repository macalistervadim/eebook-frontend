"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    User,
    Mail,
    MapPin,
    Calendar,
    Shield,
    Bell,
    Settings,
    Download,
    Eye,
    EyeOff,
    Check,
    Activity,
    TrendingUp,
    DollarSign,
    BarChart3,
    CreditCard,
    LogOut,
} from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Switch } from "../components/Switch";
import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import { Separator } from "../components/Separator";
import PortfolioHeader from "@/components/PortfolioHeader.tsx";
import Footer from "@/components/Footer.tsx";

export default function ProfilePageImproved() {
    const [activeTab, setActiveTab] = useState("overview");
    const [showPassword, setShowPassword] = useState(false);

    const stats = [
        { label: "Портфелей", value: "3", icon: BarChart3 },
        { label: "Активов", value: "47", icon: Activity },
        { label: "Доходность", value: "+18.03%", icon: TrendingUp, positive: true },
        { label: "Капитал", value: "₽1.28M", icon: DollarSign },
    ];

    const menuItems = [
        { id: "overview", label: "Обзор", icon: User },
        { id: "account", label: "Аккаунт", icon: Settings },
        { id: "security", label: "Безопасность", icon: Shield },
        { id: "notifications", label: "Уведомления", icon: Bell },
        { id: "billing", label: "Подписка", icon: CreditCard },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1600px] mx-auto mb-20">
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 p-8">
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Profile Card */}
                        <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="text-center mb-6">
                                <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-slate-200 dark:ring-slate-700">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                        ИИ
                                    </AvatarFallback>
                                </Avatar>
                                <h3 className="text-slate-900 dark:text-white mb-1">
                                    Иван Иванов
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Premium
                                </p>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <Mail className="w-4 h-4" />
                                    <span>ivan@email.com</span>
                                </div>

                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>С января 2024</span>
                                </div>
                            </div>
                        </Card>

                        {/* Navigation */}
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
                                        <span className="text-sm font-medium">
                                            {item.label}
                                        </span>
                                    </button>
                                ))}

                                <Separator className="my-3" />

                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                                    <LogOut className="w-5 h-5" />
                                    <span className="text-sm font-medium">Выйти</span>
                                </button>
                            </nav>
                        </Card>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {activeTab === "overview" && (
                            <>
                                {/* Stats */}
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

                                {/* Activity */}
                                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        Последняя активность
                                    </h3>
                                    <div className="space-y-4">
                                        {[
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
                                        ].map((item, index) => (
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
                            </>
                        )}

                        {activeTab === "account" && (
                            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <h3 className="text-slate-900 dark:text-white mb-8">
                                    Личная информация
                                </h3>
                                <div className="space-y-6 max-w-2xl">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Имя</Label>
                                            <Input
                                                defaultValue="Иван"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Фамилия</Label>
                                            <Input
                                                defaultValue="Иванов"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Email</Label>
                                        <Input
                                            type="email"
                                            defaultValue="ivan@email.com"
                                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Телефон</Label>
                                        <Input
                                            defaultValue="+7 (999) 123-45-67"
                                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Страна</Label>
                                            <Input
                                                defaultValue="Россия"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Город</Label>
                                            <Input
                                                defaultValue="Москва"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>
                                    </div>

                                    <Separator className="my-8" />

                                    <h4 className="text-slate-900 dark:text-white mb-4">
                                        Инвестиционный профиль
                                    </h4>

                                    <div className="space-y-2">
                                        <Label>Риск-профиль</Label>
                                        <Input
                                            defaultValue="Умеренный"
                                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Инвестиционный горизонт</Label>
                                        <Input
                                            defaultValue="Долгосрочный (5+ лет)"
                                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                            Сохранить изменения
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-slate-300 dark:border-slate-700"
                                        >
                                            Отменить
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {activeTab === "security" && (
                            <div className="space-y-6">
                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        Изменить пароль
                                    </h3>
                                    <div className="space-y-4 max-w-xl">
                                        <div className="space-y-2">
                                            <Label>Текущий пароль</Label>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        showPassword ? "text" : "password"
                                                    }
                                                    className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700 pr-10"
                                                />
                                                <button
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Новый пароль</Label>
                                            <Input
                                                type="password"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Подтвердите пароль</Label>
                                            <Input
                                                type="password"
                                                className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                            />
                                        </div>

                                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                            Обновить пароль
                                        </Button>
                                    </div>
                                </Card>

                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        Двухфакторная аутентификация
                                    </h3>
                                    <div className="flex items-center justify-between p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                                                <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 dark:text-white mb-1">
                                                    2FA включена
                                                </div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                                    Authenticator App
                                                </div>
                                            </div>
                                        </div>
                                        <Switch defaultChecked />
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="border-slate-300 dark:border-slate-700"
                                    >
                                        Настроить 2FA
                                    </Button>
                                </Card>

                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        Активные сессии
                                    </h3>
                                    <div className="space-y-3">
                                        {[
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
                                        ].map((session, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                                            >
                                                <div>
                                                    <div className="text-slate-900 dark:text-white mb-1">
                                                        {session.device}
                                                    </div>
                                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                                        {session.location} ·{" "}
                                                        {session.time}
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
                            </div>
                        )}

                        {activeTab === "notifications" && (
                            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <h3 className="text-slate-900 dark:text-white mb-8">
                                    Настройки уведомлений
                                </h3>
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
                                                    description:
                                                        "Напоминания о предстоящих выплатах",
                                                    enabled: true,
                                                },
                                                {
                                                    label: "AI рекомендации",
                                                    description:
                                                        "Персональные инвестиционные советы",
                                                    enabled: true,
                                                },
                                                {
                                                    label: "Новости рынка",
                                                    description:
                                                        "Важные события на финансовых рынках",
                                                    enabled: false,
                                                },
                                                {
                                                    label: "Еженедельный отчёт",
                                                    description:
                                                        "Сводка по вашим инвестициям",
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
                                                    <Switch
                                                        defaultChecked={item.enabled}
                                                    />
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
                                                    description:
                                                        "Важные изменения в портфеле",
                                                    enabled: true,
                                                },
                                                {
                                                    label: "Достижение целей",
                                                    description:
                                                        "Когда вы достигаете инвестиционных целей",
                                                    enabled: true,
                                                },
                                                {
                                                    label: "Новые сделки",
                                                    description:
                                                        "Подтверждение выполненных операций",
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
                                                    <Switch
                                                        defaultChecked={item.enabled}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {activeTab === "billing" && (
                            <div className="space-y-6">
                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-slate-900 dark:text-white mb-2">
                                                Premium подписка
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400">
                                                Активна до 31 декабря 2025
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm rounded-lg">
                                            Активна
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                                                План
                                            </div>
                                            <div className="text-slate-900 dark:text-white">
                                                Premium Annual
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                                                Стоимость
                                            </div>
                                            <div className="text-slate-900 dark:text-white">
                                                ₽9,990/год
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                                                Следующий платёж
                                            </div>
                                            <div className="text-slate-900 dark:text-white">
                                                31.12.2025
                                            </div>
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

                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        Преимущества Premium
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "AI-прогнозы и рекомендации",
                                            "Продвинутая аналитика",
                                            "Приоритетная поддержка",
                                            "Эксклюзивные материалы",
                                            "Персональные цели",
                                            "Неограниченный экспорт",
                                        ].map((feature, index) => (
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

                                <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white mb-6">
                                        История платежей
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                date: "01.01.2024",
                                                description: "Premium Annual",
                                                amount: 9990,
                                            },
                                            {
                                                date: "01.01.2023",
                                                description: "Premium Annual",
                                                amount: 8990,
                                            },
                                        ].map((payment, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                                            >
                                                <div>
                                                    <div className="text-slate-900 dark:text-white">
                                                        {payment.description}
                                                    </div>
                                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                                        {payment.date}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-slate-900 dark:text-white">
                                                        ₽{payment.amount.toLocaleString()}
                                                    </span>
                                                    <Button variant="ghost" size="sm">
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
