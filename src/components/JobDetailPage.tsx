"use client";

import { motion } from "motion/react";
import {
    MapPin,
    Clock,
    DollarSign,
    Users,
    CheckCircle2,
    Heart,
    Share2,
    ArrowLeft,
    Send,
} from "lucide-react";
import Button from "@/components/Button.tsx";
import Badge from "@/components/Badge.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { useNavigate } from "react-router-dom";

export default function JobDetailPage() {
    const job = {
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Москва / Удаленно",
        type: "Полная занятость",
        salary: "₽250,000 - ₽400,000",
        posted: "3 дня назад",
        applicants: 47,
        views: 342,
        description:
            "Мы ищем талантливого Senior Frontend Developer для работы над нашей инвестиционной платформой. Вы будете работать с современным стеком технологий и создавать интерфейсы, которые помогают тысячам инвесторов принимать умные решения.",
        responsibilities: [
            "Разработка новых функций и улучшение существующих компонентов платформы",
            "Оптимизация производительности и UX веб-приложения",
            "Тесное сотрудничество с дизайнерами и backend-разработчиками",
            "Код-ревью и менторство junior разработчиков",
            "Участие в архитектурных решениях и техническом планировании",
            "Написание чистого, поддерживаемого и хорошо протестированного кода",
        ],
        requirements: [
            "5+ лет опыта коммерческой разработки на React",
            "Глубокое понимание JavaScript, TypeScript, HTML5, CSS3",
            "Опыт работы с современными инструментами (Vite, Next.js, Tailwind CSS)",
            "Знание принципов построения масштабируемых приложений",
            "Опыт работы с Git и CI/CD",
            "Навыки оптимизации производительности веб-приложений",
            "Английский язык на уровне чтения технической документации",
        ],
        niceToHave: [
            "Опыт работы в финтех или с финансовыми данными",
            "Знание библиотек для визуализации данных (D3.js, Recharts)",
            "Опыт с WebSocket и real-time данными",
            "Понимание принципов UI/UX дизайна",
            "Участие в open-source проектах",
        ],
        benefits: [
            "Конкурентная зарплата выше рынка + опционы компании",
            "Гибкий график и возможность удаленной работы",
            "ДМС для вас и близких",
            "Бюджет на обучение и конференции (₽100,000/год)",
            "Современное оборудование (MacBook Pro + монитор)",
            "Офис в центре Москвы с комфортным рабочим пространством",
            "Корпоративные мероприятия и team building",
            "26 дней оплачиваемого отпуска",
        ],
        team: [
            {
                name: "Дмитрий Соколов",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            },
            {
                name: "Елена Волкова",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            },
            {
                name: "Андрей Новиков",
                role: "Senior Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            },
        ],
    };
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <LandingHeader />
            <div className="max-w-6xl mx-auto px-6 py-50 mb-20 space-y-8">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Button
                        typeButton="ghost"
                        className="rounded-xl px-3 py-3 flex items-center justify-center"
                        onClick={() => navigate("/career")}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Все вакансии
                    </Button>
                </motion.div>

                {/* Hero */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-900 text-white p-8 md:p-10 shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                        <div className="absolute -top-24 -right-16 w-64 h-64 bg-emerald-400/40 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl" />
                    </div>

                    <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                        <div className="flex-1 space-y-4">
                            <Badge className="bg-emerald-100/15 text-emerald-50 border border-emerald-300/30 mb-2">
                                {job.department}
                            </Badge>
                            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                                {job.title}
                            </h1>
                            <p className="text-emerald-50/80 max-w-xl">
                                Присоединяйтесь к продуктовой команде, которая строит
                                интеллектуальную инвестиционную платформу следующего
                                поколения.
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-emerald-50/90 pt-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4" />
                                    <span>{job.salary}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 text-xs pt-4 text-emerald-50/60">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>{job.applicants} откликов</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Опубликовано {job.posted}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                                    <span>Набор открыт</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full md:w-56">
                            <Button
                                typeButton="emerald"
                                className="w-full rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 px-3 py-3 flex items-center justify-center"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Откликнуться
                            </Button>
                            <Button
                                typeButton="noBg"
                                className="w-full rounded-xl border-white/20 text-white hover:bg-white/10 px-3 py-3 flex items-center justify-center"
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Сохранить вакансию
                            </Button>
                            <Button
                                typeButton="noBg"
                                className="w-full rounded-xl border-white/10 text-white/80 hover:bg-white/5 px-3 py-3 flex items-center justify-center"
                            >
                                <Share2 className="w-4 h-4 mr-2" />
                                Поделиться
                            </Button>
                        </div>
                    </div>
                </motion.section>

                {/* Main layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 items-start">
                    {/* Left column */}
                    <div className="space-y-8">
                        {/* Описание */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200/70 dark:border-slate-800/70 p-7"
                        >
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                                О роли
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {job.description}
                            </p>
                        </motion.section>

                        {/* Обязанности & Требования */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-12 border-t border-slate-200/70 dark:border-slate-800/70 pt-8"
                        >
                            {/* Обязанности */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Обязанности
                                </h3>

                                <ul className="space-y-3">
                                    {job.responsibilities.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-3 text-slate-700 dark:text-slate-300"
                                        >
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500/80 flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Требования */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Требования
                                </h3>

                                <ul className="space-y-3">
                                    {job.requirements.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-3 text-slate-700 dark:text-slate-300"
                                        >
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500/80 flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                        {/* Nice to have + Benefits */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/40 dark:via-slate-950 dark:to-teal-950/30 border border-emerald-100 dark:border-emerald-900/60 p-7"
                        >
                            <div>
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3">
                                    Будет плюсом
                                </h3>

                                <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                                    {job.niceToHave.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-2.5 items-start"
                                        >
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Отступ между блоками */}
                            <div className="h-8" />

                            {/* Что мы предлагаем */}
                            <div>
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3">
                                    Что мы предлагаем
                                </h3>

                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm
                        text-slate-800 dark:text-slate-200"
                                >
                                    {job.benefits.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex gap-2.5 items-start bg-white/70 dark:bg-slate-900/70
                               rounded-xl px-3 py-2.5 border border-emerald-100/70
                               dark:border-emerald-900/50"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* Team */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/70 dark:border-slate-800/70 p-7"
                        >
                            <div className="flex items-center justify-between mb-4 gap-4">
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                        С кем вы будете работать
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Небольшая продуктовая команда, принимающая
                                        ключевые решения по продукту.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {job.team.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="group text-center rounded-2xl p-4 bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 hover:border-emerald-400/70 transition-colors"
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover ring-2 ring-emerald-200/60 dark:ring-emerald-900/60 group-hover:ring-emerald-400 transition"
                                        />
                                        <div className="text-slate-900 dark:text-white text-sm font-medium">
                                            {member.name}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">
                                            {member.role}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right column: sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6 lg:sticky lg:top-30"
                    >
                        {/* Apply card */}
                        <div className="rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800/70 p-6 shadow-lg shadow-emerald-500/5">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                                Готовы присоединиться?
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
                                Отправьте резюме и короткое сопроводительное письмо — мы
                                ответим в течение 2 рабочих дней.
                            </p>
                            <Button
                                typeButton="emerald"
                                className="w-full rounded-xl mb-3 px-3 py-3"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Откликнуться на вакансию
                            </Button>
                            <Button
                                typeButton="noBg"
                                className="w-full rounded-xl border border-slate-200/70 dark:border-slate-700/70 px-3 py-3 flex items-center justify-center "
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Сохранить в избранное
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800/70 p-6">
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                Статистика вакансии
                            </h4>
                            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                <div className="flex items-center justify-between">
                                    <span>Просмотры</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-100">
                                        {job.views}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Отклики</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-100">
                                        {job.applicants}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Тип</span>
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Уровень</span>
                                    <span>Senior</span>
                                </div>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800/70 p-6">
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                Поделиться
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                Если знаете кого-то, кому это может подойти — отправьте
                                ссылку.
                            </p>
                            <Button
                                typeButton="noBg"
                                className="w-full rounded-xl flex items-center justify-center px-3 py-3"
                            >
                                <Share2 className="w-4 h-4 mr-2" />
                                Поделиться вакансией
                            </Button>
                        </div>
                    </motion.aside>
                </div>
            </div>
            <Footer />
        </div>
    );
}
