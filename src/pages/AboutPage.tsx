"use client";

import { motion } from "motion/react";
import {
    TrendingUp,
    Shield,
    Zap,
    Users,
    Building2,
    LineChart,
    BarChart3,
    PieChart,
    Target,
    Award,
    CheckCircle2,
    ArrowRight,
    Calendar,
    DollarSign,
} from "lucide-react";
import Button from "@/components/Button.tsx";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";

export default function AboutPageImproved() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
            <LandingHeader />
            <section className="relative overflow-hidden pt-50 pb-24">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                                О платформе
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-6">
                            Профессиональные инструменты
                            <br />
                            для частных инвесторов
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            eebook — это инвестиционная надстройка над брокерами, которая
                            объединяет все ваши портфели, отслеживает купоны и дивиденды,
                            и предоставляет AI-аналитику в реальном времени
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: Users,
                                value: "50,000+",
                                label: "Активных инвесторов",
                            },
                            {
                                icon: DollarSign,
                                value: "₽50+ млрд",
                                label: "Активов на платформе",
                            },
                            {
                                icon: Building2,
                                value: "10+",
                                label: "Интегрированных брокеров",
                            },
                            { icon: Calendar, value: "2023", label: "Год основания" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl mb-4">
                                    <stat.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div className="text-3xl text-slate-900 dark:text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How it works - Visual */}
            <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
                            Как это работает
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Простая интеграция с вашими брокерами, умная аналитика всех
                            активов
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                icon: Building2,
                                title: "Подключение брокеров",
                                description:
                                    "Безопасно подключите все свои брокерские счета через API. Поддерживаем Тинькофф, Сбер, БКС, Альфа и другие",
                            },
                            {
                                step: "02",
                                icon: BarChart3,
                                title: "Единый дашборд",
                                description:
                                    "Все ваши портфели, активы и статистика в одном месте. Отслеживайте доходность, дивиденды и купоны",
                            },
                            {
                                step: "03",
                                icon: Zap,
                                title: "AI-рекомендации",
                                description:
                                    "Получайте персональные инвестиционные рекомендации на основе вашего риск-профиля и целей",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                            >
                                <div className="border group p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1 h-full">
                                    <div className="text-6xl font-bold text-slate-100 dark:text-slate-700 mb-4">
                                        {item.step}
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center mb-6">
                                        <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl text-slate-900 dark:text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-32 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
                            Что вы получаете
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Полный набор инструментов для управления инвестициями
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: LineChart,
                                title: "Отслеживание портфелей",
                                description:
                                    "Видите общую картину всех ваших активов в реальном времени",
                                features: [
                                    "Мультиброкерская аналитика",
                                    "Динамика роста капитала",
                                    "История сделок",
                                ],
                            },
                            {
                                icon: DollarSign,
                                title: "Дивиденды и купоны",
                                description:
                                    "Календарь и прогнозы всех предстоящих выплат",
                                features: [
                                    "Уведомления о выплатах",
                                    "Прогноз годового дохода",
                                    "Налоговые расчеты",
                                ],
                            },
                            {
                                icon: PieChart,
                                title: "Структура портфеля",
                                description:
                                    "Анализ распределения активов и диверсификации",
                                features: [
                                    "Визуализация по секторам",
                                    "Валютная структура",
                                    "Рекомендации по ребалансировке",
                                ],
                            },
                            {
                                icon: Zap,
                                title: "AI-прогнозы",
                                description:
                                    "Персональные рекомендации на основе машинного обучения",
                                features: [
                                    "Прогноз доходности",
                                    "Оценка рисков",
                                    "Идеи для сделок",
                                ],
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="border group p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/20 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                                {feature.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {feature.features.map(
                                                    (item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
                                Почему инвесторы выбирают eebook
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Мы создали платформу, которую сами используем каждый день
                                для управления своими инвестициями. Наша команда — это
                                опытные инвесторы и технологи из ведущих финтех-компаний.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Безопасность",
                                        text: "Банковский уровень защиты данных. Read-only доступ к брокерам",
                                    },
                                    {
                                        icon: Target,
                                        title: "Точность",
                                        text: "Автоматическая синхронизация данных каждые 15 минут",
                                    },
                                    {
                                        icon: Award,
                                        title: "Поддержка",
                                        text: "Команда экспертов готова помочь в любое время",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-slate-900 dark:text-white mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="border p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
                                <div className="space-y-6">
                                    <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-slate-600 dark:text-slate-400">
                                                Средний рост
                                            </span>
                                            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div className="text-4xl text-slate-900 dark:text-white mb-2">
                                            +23.4%
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            Средняя годовая доходность пользователей
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                                            <div className="text-2xl text-slate-900 dark:text-white mb-1">
                                                4.9/5
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Рейтинг
                                            </p>
                                        </div>
                                        <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                                            <div className="text-2xl text-slate-900 dark:text-white mb-1">
                                                98%
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Uptime
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                                            "eebook помог мне увидеть полную картину моих
                                            инвестиций и оптимизировать портфель. Экономлю
                                            часы каждую неделю."
                                        </p>
                                        <div className="mt-4 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                            <div>
                                                <div className="text-sm text-slate-900 dark:text-white">
                                                    Иван П.
                                                </div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                                    Частный инвестор
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <div className="mb-20 p-12 border max-w-7xl mx-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-900 text-center">
                    <Award className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
                    <h2 className="text-slate-900 dark:text-white mb-4">
                        Присоединяйтесь к нам
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Мы всегда ищем талантливых людей, которые хотят изменить мир
                        финансовых технологий. Посмотрите наши открытые вакансии!
                    </p>
                    <Button
                        typeButton="emerald"
                        className="mt-8 px-3 py-3 rounded-xl"
                        onClick={() => navigate("/career")}
                    >
                        Посмотреть вакансии <ArrowRight className="w-4 h-4 ml-3" />
                    </Button>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
}
