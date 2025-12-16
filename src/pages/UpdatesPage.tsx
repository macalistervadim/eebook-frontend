"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Sparkles,
    Clock,
    Search,
    CheckCircle2,
    Zap,
    Bug,
    Wrench,
    Heart,
    Calendar,
    ArrowRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import Badge from "@/components/Badge.tsx";
import Button from "@/components/Button.tsx";
import Footer from "@/components/Footer.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";

const updates = [
    {
        version: "2.5.0",
        date: "2024-12-10",
        title: "AI-прогнозы нового поколения",
        type: "feature",
        description:
            "Представляем новую систему AI-прогнозов на основе нейросетей GPT-4. Теперь прогнозы учитывают больше факторов и более точны.",
        changes: [
            {
                type: "new",
                text: "Интеграция GPT-4 для анализа новостей и настроений рынка",
            },
            {
                type: "new",
                text: "Персонализированные рекомендации на основе вашего портфеля",
            },
            {
                type: "improved",
                text: "Улучшена точность прогнозов на 35%",
            },
            {
                type: "improved",
                text: "Добавлена визуализация факторов влияющих на прогноз",
            },
        ],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    },
    {
        version: "2.4.5",
        date: "2024-12-05",
        title: "Улучшения аналитики и новые графики",
        type: "improvement",
        description:
            "Обновили раздел аналитики: добавили новые типы графиков, улучшили производительность и исправили ошибки.",
        changes: [
            {
                type: "new",
                text: "Радарные графики для сравнения портфелей",
            },
            {
                type: "new",
                text: "Экспорт графиков в PNG и SVG",
            },
            {
                type: "improved",
                text: "Ускорена загрузка графиков на 60%",
            },
            {
                type: "fixed",
                text: "Исправлена ошибка с отображением данных за прошлые периоды",
            },
        ],
    },
    {
        version: "2.4.0",
        date: "2024-11-28",
        title: "Календарь дивидендов и купонов",
        type: "feature",
        description:
            "Новая страница с календарем всех предстоящих выплат по дивидендам и купонам с фильтрацией и напоминаниями.",
        changes: [
            {
                type: "new",
                text: "Календарь выплат с возможностью экспорта в Google Calendar",
            },
            {
                type: "new",
                text: "Push-уведомления за день до выплаты",
            },
            {
                type: "new",
                text: "Прогноз будущих выплат на основе истории",
            },
        ],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    },
    {
        version: "2.3.8",
        date: "2024-11-20",
        title: "Исправления и оптимизация",
        type: "fix",
        description:
            "Технический релиз с исправлениями ошибок и оптимизацией производительности.",
        changes: [
            {
                type: "fixed",
                text: "Исправлена ошибка синхронизации с Т-Инвестициями",
            },
            {
                type: "fixed",
                text: "Устранена проблема с отображением графиков в Safari",
            },
            {
                type: "improved",
                text: "Оптимизирована загрузка портфолио с большим количеством активов",
            },
            {
                type: "improved",
                text: "Улучшена стабильность мобильной версии",
            },
        ],
    },
    {
        version: "2.3.0",
        date: "2024-11-10",
        title: "Импорт отчетов из брокеров",
        type: "feature",
        description:
            "Добавили возможность импорта отчетов из XML, XLSX и PDF файлов всех популярных российских брокеров.",
        changes: [
            {
                type: "new",
                text: "Поддержка импорта из 6 крупнейших брокеров",
            },
            {
                type: "new",
                text: "Автоматическое распознавание формата файла",
            },
            {
                type: "new",
                text: "История всех импортов с возможностью отката",
            },
        ],
    },
    {
        version: "2.2.5",
        date: "2024-11-01",
        title: "Темная тема и улучшения UI",
        type: "improvement",
        description:
            "Полностью переработали темную тему и улучшили пользовательский интерфейс всего приложения.",
        changes: [
            {
                type: "new",
                text: "Полноценная темная тема для всех страниц",
            },
            {
                type: "improved",
                text: "Обновленные цвета и типография",
            },
            {
                type: "improved",
                text: "Улучшена контрастность и читаемость",
            },
            {
                type: "improved",
                text: "Плавные анимации и переходы",
            },
        ],
        image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
    },
];

const roadmap = [
    {
        quarter: "Q1 2025",
        items: [
            "Мобильное приложение для iOS и Android",
            "Интеграция с зарубежными брокерами",
            "Социальный трейдинг - копирование стратегий",
            "Расширенные AI-прогнозы для криптовалют",
        ],
    },
    {
        quarter: "Q2 2025",
        items: [
            "Автоматическая ребалансировка портфеля",
            "Интеграция с налоговыми сервисами",
            "Виджеты для рабочего стола",
            "API для сторонних разработчиков",
        ],
    },
    {
        quarter: "Q3 2025",
        items: [
            "Поддержка деривативов (фьючерсы, опционы)",
            "Backtesting стратегий",
            "Интеграция с Telegram и Discord",
            "Голосовой ассистент",
        ],
    },
];

const stats = [
    { label: "Обновлений", value: "48", icon: Zap },
    { label: "Новых функций", value: "127", icon: Sparkles },
    { label: "Исправлено багов", value: "342", icon: Bug },
    { label: "Часов разработки", value: "2,450", icon: Clock },
];

export default function UpdatesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("all");

    const filteredUpdates = updates.filter((update) => {
        const matchesSearch =
            searchQuery === "" ||
            update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            update.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "all" || update.type === selectedType;
        return matchesSearch && matchesType;
    });

    const getTypeBadge = (type: string) => {
        switch (type) {
            case "feature":
                return (
                    <Badge className="bg-emerald-100 rounded-md px-3 py-0.5 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0">
                        <Sparkles className="w-3 h-3 mr-1 inline-flex" />
                        Новая функция
                    </Badge>
                );
            case "improvement":
                return (
                    <Badge className="bg-blue-100 rounded-md px-3 py-0.5 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-0">
                        <Wrench className="w-3 h-3 mr-1 inline-flex" />
                        Улучшение
                    </Badge>
                );
            case "fix":
                return (
                    <Badge className="bg-amber-100 rounded-md px-3 py-0.5 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-0">
                        <Bug className="w-3 h-3 mr-1 inline-flex" />
                        Исправления
                    </Badge>
                );
            default:
                return null;
        }
    };

    const getChangeIcon = (type: string) => {
        switch (type) {
            case "new":
                return (
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                );
            case "improved":
                return <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
            case "fixed":
                return (
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                );
            default:
                return (
                    <CheckCircle2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                );
        }
    };

    return (
        <section className="py-12 bg-white dark:bg-slate-900 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl mb-20 mt-20">
                <LandingHeader />
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl">
                            <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-slate-900 dark:text-white">Обновления</h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                История развития eebook и планы на будущее
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className=" p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                                            <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                    </div>
                                    <p className="mt-5 text-2xl text-slate-900 dark:text-white mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Поиск обновлений..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-xl outline-none border pl-12 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                        </div>
                        <div className="flex gap-2">
                            {[
                                { id: "all", label: "Все" },
                                { id: "feature", label: "Функции" },
                                { id: "improvement", label: "Улучшения" },
                                { id: "fix", label: "Исправления" },
                            ].map((type) => (
                                <Button
                                    key={type.id}
                                    typeButton={
                                        selectedType === type.id ? "emerald" : "noBg"
                                    }
                                    onClick={() => setSelectedType(type.id)}
                                    className={
                                        selectedType === type.id
                                            ? "bg-emerald-600 hover:bg-emerald-700 px-3 rounded-xl"
                                            : "px-3 rounded-xl"
                                    }
                                >
                                    {type.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <Tabs defaultValue="updates" className="space-y-8">
                    <TabsList>
                        <TabsTrigger value="updates">История обновлений</TabsTrigger>
                        <TabsTrigger value="roadmap">Дорожная карта</TabsTrigger>
                    </TabsList>

                    {/* Updates List */}
                    <TabsContent value="updates" className="space-y-8">
                        <div className="space-y-6">
                            {filteredUpdates.map((update, index) => (
                                <motion.div
                                    key={update.version}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="border rounded-xl overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                        {update.image && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={update.image}
                                                    alt={update.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Badge className="text-xs">
                                                            v{update.version}
                                                        </Badge>
                                                        {getTypeBadge(update.type)}
                                                        <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                                            <Calendar className="w-4 h-4" />
                                                            {new Date(
                                                                update.date
                                                            ).toLocaleDateString(
                                                                "ru-RU",
                                                                {
                                                                    day: "numeric",
                                                                    month: "long",
                                                                    year: "numeric",
                                                                }
                                                            )}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-slate-900 dark:text-white mb-2">
                                                        {update.title}
                                                    </h3>
                                                    <p className="text-slate-600 dark:text-slate-400">
                                                        {update.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Changes List */}
                                            <div className="space-y-2">
                                                {update.changes.map(
                                                    (change, changeIndex) => (
                                                        <div
                                                            key={changeIndex}
                                                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                                                        >
                                                            {getChangeIcon(change.type)}
                                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                                {change.text}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Roadmap */}
                    <TabsContent value="roadmap" className="space-y-8">
                        <div>
                            <h2 className="text-slate-900 dark:text-white mb-4">
                                Планы развития
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Наши планы по развитию платформы на ближайшее время.
                                Дорожная карта может меняться в зависимости от обратной
                                связи пользователей.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {roadmap.map((quarter, index) => (
                                    <motion.div
                                        key={quarter.quarter}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                                            <div className="flex items-center gap-2 mb-6">
                                                <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                                                    <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                                <h3 className="text-slate-900 dark:text-white">
                                                    {quarter.quarter}
                                                </h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {quarter.items.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                                                    >
                                                        <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Feedback Card */}
                        <div className="border rounded-xl p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-600 rounded-2xl">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-slate-900 dark:text-white mb-2">
                                        Ваши идеи важны для нас
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        Хотите предложить новую функцию или улучшение? Мы
                                        всегда рады вашей обратной связи!
                                    </p>
                                    <Button
                                        typeButton="emerald"
                                        className="bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-xl"
                                    >
                                        Предложить идею
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Footer />
        </section>
    );
}
