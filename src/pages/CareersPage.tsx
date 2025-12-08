"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Search,
    Heart,
    Users,
    Zap,
    Globe,
    TrendingUp,
    Code,
    Palette,
    BarChart3,
} from "lucide-react";
import Badge from "@/components/Badge.tsx";
import Button from "@/components/Button.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { useNavigate } from "react-router-dom";

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Москва / Удаленно",
        type: "Полная занятость",
        salary: "₽250,000 - ₽400,000",
        description: "Разработка интерфейсов нашей платформы на React и TypeScript",
        requirements: ["React", "TypeScript", "Tailwind CSS", "5+ лет опыта"],
        icon: Code,
        color: "emerald",
    },
    {
        id: 2,
        title: "ML Engineer",
        department: "AI/ML",
        location: "Москва / Удаленно",
        type: "Полная занятость",
        salary: "₽300,000 - ₽500,000",
        description: "Разработка AI-моделей для прогнозирования рынков и рекомендаций",
        requirements: ["Python", "TensorFlow", "PyTorch", "Опыт в финтех"],
        icon: Zap,
        color: "purple",
    },
    {
        id: 3,
        title: "Product Designer",
        department: "Design",
        location: "Москва",
        type: "Полная занятость",
        salary: "₽200,000 - ₽350,000",
        description: "Создание лучшего UX/UI для инвесторов",
        requirements: ["Figma", "User Research", "Design Systems", "Портфолио"],
        icon: Palette,
        color: "pink",
    },
    {
        id: 4,
        title: "Backend Developer",
        department: "Engineering",
        location: "Москва / Удаленно",
        type: "Полная занятость",
        salary: "₽250,000 - ₽450,000",
        description: "Разработка высоконагруженных API и микросервисов",
        requirements: ["Node.js / Go", "PostgreSQL", "Redis", "Microservices"],
        icon: Code,
        color: "blue",
    },
    {
        id: 5,
        title: "Data Analyst",
        department: "Analytics",
        location: "Москва",
        type: "Полная занятость",
        salary: "₽180,000 - ₽300,000",
        description: "Анализ данных пользователей и рынков для улучшения продукта",
        requirements: ["SQL", "Python", "Tableau", "Финансовая аналитика"],
        icon: BarChart3,
        color: "amber",
    },
    {
        id: 6,
        title: "Marketing Manager",
        department: "Marketing",
        location: "Москва",
        type: "Полная занятость",
        salary: "₽150,000 - ₽280,000",
        description: "Развитие бренда и привлечение новых пользователей",
        requirements: ["Performance Marketing", "SEO/SEM", "Content", "B2C опыт"],
        icon: TrendingUp,
        color: "emerald",
    },
];

const benefits = [
    {
        icon: DollarSign,
        title: "Конкурентная зарплата",
        description: "Выше рынка + опционы компании",
    },
    {
        icon: Globe,
        title: "Удаленная работа",
        description: "Работайте откуда угодно",
    },
    {
        icon: Users,
        title: "Отличная команда",
        description: "Профессионалы из топовых компаний",
    },
    {
        icon: Zap,
        title: "Быстрый рост",
        description: "Карьерные возможности в стартапе",
    },
    {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Гибкий график и отпуск",
    },
    {
        icon: TrendingUp,
        title: "Обучение",
        description: "Бюджет на развитие и конференции",
    },
];

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("all");

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment =
            selectedDepartment === "all" || job.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const departments = ["all", ...Array.from(new Set(jobs.map((j) => j.department)))];
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <LandingHeader />
            <div className="max-w-[1400px] mx-auto px-6 py-50 space-y-16 mb-20">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0 mb-6">
                        Карьера в eebook
                    </Badge>
                    <h1 className="text-slate-900 dark:text-white mb-6">
                        Создавайте будущее финансовых технологий вместе с нами
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-xl mb-8">
                        Мы ищем талантливых людей, которые хотят изменить мир инвестиций
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Badge className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                            {jobs.length} открытых вакансий
                        </Badge>
                        <Badge className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                            Удаленная работа
                        </Badge>
                    </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className="text-slate-900 dark:text-white text-center mb-12">
                        Почему <span className="text-emerald-500">eebook</span>?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="border rounded-2xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h4 className="text-slate-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-slate-900 dark:text-white">Открытые вакансии</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Поиск вакансий..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border w-full pl-11 pr-4 h-12 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                        </div>
                        <div className="flex gap-2 ">
                            {departments.map((dept) => (
                                <Button
                                    key={dept}
                                    typeButton={
                                        selectedDepartment === dept ? "emerald" : "noBg"
                                    }
                                    className={
                                        selectedDepartment === dept
                                            ? "rounded-xl hover:bg-emerald-700 text-white whitespace-nowrap px-4 py-2"
                                            : "rounded-xl border-slate-300 dark:border-slate-700 whitespace-nowrap px-4 py-2"
                                    }
                                    onClick={() => setSelectedDepartment(dept)}
                                >
                                    {dept === "all" ? "Все" : dept}
                                </Button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Jobs List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-4"
                >
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="border rounded-2xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                                <div className="flex items-start gap-6">
                                    <div
                                        className={`border p-4 rounded-2xl flex-shrink-0 ${
                                            job.color === "emerald"
                                                ? "bg-emerald-100 dark:bg-emerald-500/10"
                                                : job.color === "purple"
                                                  ? "bg-purple-100 dark:bg-purple-500/10"
                                                  : job.color === "pink"
                                                    ? "bg-pink-100 dark:bg-pink-500/10"
                                                    : job.color === "blue"
                                                      ? "bg-blue-100 dark:bg-blue-500/10"
                                                      : "bg-amber-100 dark:bg-amber-500/10"
                                        }`}
                                    >
                                        <job.icon
                                            className={`w-8 h-8 ${
                                                job.color === "emerald"
                                                    ? "text-emerald-600 dark:text-emerald-400"
                                                    : job.color === "purple"
                                                      ? "text-purple-600 dark:text-purple-400"
                                                      : job.color === "pink"
                                                        ? "text-pink-600 dark:text-pink-400"
                                                        : job.color === "blue"
                                                          ? "text-blue-600 dark:text-blue-400"
                                                          : "text-amber-600 dark:text-amber-400"
                                            }`}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h3 className="text-slate-900 dark:text-white mb-2">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400">
                                                    <div className="flex items-center gap-2">
                                                        <Briefcase className="w-4 h-4" />
                                                        <span>{job.department}</span>
                                                    </div>
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
                                            </div>
                                            <Button
                                                typeButton="emerald"
                                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white flex-shrink-0"
                                                onClick={() => navigate("/jobs/1")}
                                            >
                                                Откликнуться
                                            </Button>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.requirements.map((req, i) => (
                                                <Badge
                                                    key={i}
                                                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0"
                                                >
                                                    {req}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="border rounded-2xl p-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-900 text-center">
                        <Users className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-slate-900 dark:text-white mb-4">
                            Не нашли подходящую вакансию?
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                            Мы всегда открыты к талантливым специалистам. Отправьте нам
                            свое резюме, и мы свяжемся с вами, когда появится подходящая
                            позиция.
                        </p>
                        <Button
                            typeButton="emerald"
                            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                            Отправить резюме
                        </Button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
