"use client";

import { motion } from "motion/react";
import { Target, Award, Heart, Globe, Shield, Zap, ArrowRight } from "lucide-react";
import Badge from "@/components/Badge.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import Button from "@/components/Button.tsx";
import { useNavigate } from "react-router-dom";

const team = [
    {
        name: "Алексей Петров",
        role: "CEO & Founder",
        description: "Бывший VP в крупном инвестбанке, 15 лет опыта в финтех",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
        name: "Мария Иванова",
        role: "CTO",
        description: "Ex-Google, специалист по ML и финансовым алгоритмам",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
        name: "Дмитрий Соколов",
        role: "Head of Product",
        description: "Создатель успешных финтех-продуктов с аудиторией 1M+",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
        name: "Елена Волкова",
        role: "Head of Design",
        description: "Дизайн-лид в топ стартапах, фокус на UX/UI",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
];

const values = [
    {
        icon: Target,
        title: "Фокус на пользователе",
        description: "Мы создаем продукт, который реально упрощает жизнь инвесторов",
        color: "emerald",
    },
    {
        icon: Shield,
        title: "Безопасность",
        description: "Защита данных и конфиденциальность на первом месте",
        color: "blue",
    },
    {
        icon: Zap,
        title: "Инновации",
        description: "Используем передовые технологии AI и ML для аналитики",
        color: "purple",
    },
    {
        icon: Heart,
        title: "Прозрачность",
        description: "Честность и открытость во всем, что мы делаем",
        color: "pink",
    },
];

const stats = [
    { value: "50K+", label: "Активных пользователей" },
    { value: "₽50B+", label: "Под управлением" },
    { value: "98%", label: "Удовлетворенность" },
    { value: "24/7", label: "Поддержка" },
];

export default function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 ">
            <LandingHeader />
            <div className="max-w-[1400px] mx-auto px-6 py-40 mb-20 space-y-24">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0 mb-6">
                        О нас
                    </Badge>
                    <h1 className="text-slate-900 dark:text-white mb-6">
                        Делаем инвестирование простым и доступным
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-xl">
                        eebook — это современная платформа для инвесторов, которая
                        объединяет все ваши портфели в одном месте и помогает принимать
                        умные решения с помощью AI
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-slate-900 dark:text-white mb-4">
                            Наша миссия
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Мы верим, что каждый человек заслуживает доступа к
                            профессиональным инструментам управления инвестициями. Наша
                            цель — демократизировать финансовые технологии и сделать их
                            доступными всем.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                            С eebook вы получаете инструменты уровня hedge fund
                            менеджеров: продвинутую аналитику, AI-рекомендации,
                            автоматические отчеты и многое другое.
                        </p>
                    </div>
                    <div className="rounded-xl p-8 bg-gradient-to-br from-emerald-600 to-teal-600 border-0 text-white">
                        <Globe className="w-12 h-12 mb-4" />
                        <h3 className="text-white mb-4">Глобальное видение</h3>
                        <p className="text-white/90">
                            Мы начали в России, но наша цель — стать глобальной платформой
                            для инвесторов по всему миру, поддерживая все основные рынки и
                            брокеров.
                        </p>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-slate-900 dark:text-white mb-4">
                            Наши ценности
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Принципы, которыми мы руководствуемся в работе
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="border rounded-2xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                                        value.color === "emerald"
                                            ? "bg-emerald-100 dark:bg-emerald-500/10"
                                            : value.color === "blue"
                                              ? "bg-blue-100 dark:bg-blue-500/10"
                                              : value.color === "purple"
                                                ? "bg-purple-100 dark:bg-purple-500/10"
                                                : "bg-pink-100 dark:bg-pink-500/10"
                                    }`}
                                >
                                    <value.icon
                                        className={`w-6 h-6 ${
                                            value.color === "emerald"
                                                ? "text-emerald-600 dark:text-emerald-400"
                                                : value.color === "blue"
                                                  ? "text-blue-600 dark:text-blue-400"
                                                  : value.color === "purple"
                                                    ? "text-purple-600 dark:text-purple-400"
                                                    : "text-pink-600 dark:text-pink-400"
                                        }`}
                                    />
                                </div>
                                <h4 className="text-slate-900 dark:text-white mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-slate-900 dark:text-white mb-4">Команда</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Профессионалы из топовых компаний мира
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-2xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center hover:shadow-xl transition-all"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-emerald-100 dark:ring-emerald-900/30"
                                />
                                <h4 className="text-slate-900 dark:text-white mb-1">
                                    {member.name}
                                </h4>
                                <p className="text-emerald-600 dark:text-emerald-400 mb-3">
                                    {member.role}
                                </p>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="p-12 border rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-900 text-center">
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
            </div>
            <Footer />
        </div>
    );
}
