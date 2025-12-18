"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/Badge.tsx";
import {
    MapPin,
    Clock,
    DollarSign,
    Search,
    ArrowRight,
    Users,
    Globe,
    TrendingUp,
    Code,
    Palette,
    BarChart3,
    Zap,
    Heart,
    GraduationCap,
    Coffee,
    Plane,
    Shield,
    Target,
} from "lucide-react";
import { Button } from "@/components/Button.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input.tsx";

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        location: "Москва / Удаленно",
        type: "Full-time",
        salary: "₽250,000 - ₽400,000",
        description:
            "Разработка пользовательских интерфейсов платформы на React и TypeScript",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        icon: Code,
    },
    {
        id: 2,
        title: "ML Engineer",
        department: "AI/ML",
        location: "Москва / Удаленно",
        type: "Full-time",
        salary: "₽300,000 - ₽500,000",
        description:
            "Разработка AI-моделей для анализа рынков и инвестиционных рекомендаций",
        skills: ["Python", "TensorFlow", "PyTorch"],
        icon: Zap,
    },
    {
        id: 3,
        title: "Product Designer",
        department: "Design",
        location: "Москва",
        type: "Full-time",
        salary: "₽200,000 - ₽350,000",
        description: "Создание интуитивных интерфейсов для финансовых продуктов",
        skills: ["Figma", "User Research", "Design Systems"],
        icon: Palette,
    },
    {
        id: 4,
        title: "Backend Developer",
        department: "Engineering",
        location: "Москва / Удаленно",
        type: "Full-time",
        salary: "₽250,000 - ₽450,000",
        description: "Разработка высоконагруженных API и интеграция с брокерами",
        skills: ["Go/Node.js", "PostgreSQL", "Redis"],
        icon: Code,
    },
    {
        id: 5,
        title: "Data Analyst",
        department: "Analytics",
        location: "Москва",
        type: "Full-time",
        salary: "₽180,000 - ₽300,000",
        description: "Анализ финансовых данных и поведения пользователей",
        skills: ["SQL", "Python", "Tableau"],
        icon: BarChart3,
    },
    {
        id: 6,
        title: "Product Manager",
        department: "Product",
        location: "Москва",
        type: "Full-time",
        salary: "₽200,000 - ₽400,000",
        description: "Управление развитием продукта и приоритизация фич",
        skills: ["Product Strategy", "Analytics", "Roadmapping"],
        icon: Target,
    },
];

const benefits = [
    {
        icon: DollarSign,
        title: "Конкурентная зарплата",
        description: "Рыночные ставки + опционы компании",
    },
    {
        icon: Plane,
        title: "Гибридная работа",
        description: "Офис, удаленка или гибрид — выбираешь сам",
    },
    {
        icon: Heart,
        title: "ДМС премиум",
        description: "Полис для тебя и твоей семьи",
    },
    {
        icon: GraduationCap,
        title: "Обучение",
        description: "Курсы, конференции, книги за счет компании",
    },
    {
        icon: Coffee,
        title: "Офис в Москва-Сити",
        description: "Современное пространство, снеки, кофе",
    },
    {
        icon: Shield,
        title: "Стабильность",
        description: "Прибыльная компания с долгосрочным видением",
    },
];

const departments = ["Все", "Engineering", "AI/ML", "Design", "Analytics", "Product"];

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("Все");
    const navigate = useNavigate();

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment =
            selectedDepartment === "Все" || job.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
            <LandingHeader />
            <section className="relative overflow-hidden pt-50 pb-20">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-20" />
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
                                Вакансии
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-6">
                            Создавай будущее
                            <br />
                            финансовых технологий
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Присоединяйся к команде талантливых профессионалов, которые
                            меняют инвестирование для сотен тысяч людей
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {[
                                { icon: Users, label: "50+ специалистов", value: "50+" },
                                {
                                    icon: Globe,
                                    label: "Удаленная работа",
                                    value: "Remote OK",
                                },
                                {
                                    icon: TrendingUp,
                                    label: "Быстрый рост",
                                    value: "+200% YoY",
                                },
                            ].map((stat, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                                        <stat.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            {stat.label}
                                        </div>
                                        <div className="text-lg text-slate-900 dark:text-white font-medium">
                                            {stat.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
                            Преимущества работы в eebook
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Создаем условия, в которых каждый может раскрыть свой
                            потенциал
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="border group p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center mb-6">
                                        <benefit.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg text-slate-900 dark:text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">
                            Открытые вакансии
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Найди позицию, которая подходит тебе
                        </p>
                    </motion.div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 space-y-6"
                    >
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    type="text"
                                    placeholder="Поиск вакансий..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 h-14 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-lg"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 justify-center flex-wrap">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDepartment(dept)}
                                    className={`px-6 py-3 rounded-xl transition-all font-medium ${
                                        selectedDepartment === dept
                                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 "
                                            : "bg-white dark:bg-slate-800  text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500"
                                    }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Jobs List */}
                    <div className="space-y-4 max-w-5xl mx-auto">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    layout
                                >
                                    <Card className="group p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-lg hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/20 hover:border-emerald-500 transition-all duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl">
                                                    <job.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between gap-4 mb-3">
                                                        <div>
                                                            <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                                                                {job.title}
                                                            </h3>
                                                            <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0">
                                                                {job.department}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                                        {job.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {job.skills.map(
                                                            (skill, skillIndex) => (
                                                                <Badge
                                                                    key={skillIndex}
                                                                    variant="outline"
                                                                    className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                                                                >
                                                                    {skill}
                                                                </Badge>
                                                            )
                                                        )}
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
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
                                                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                                                {job.salary}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white lg:flex-shrink-0 rounded-xl"
                                                onClick={() => navigate("/jobs/1")}
                                            >
                                                Откликнуться
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredJobs.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-10 h-10 text-slate-400" />
                                </div>
                                <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                                    Вакансий не найдено
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Попробуйте изменить параметры поиска
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
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
                                Мы всегда открыты к талантливым специалистам. Отправьте
                                нам свое резюме, и мы свяжемся с вами, когда появится
                                подходящая позиция.
                            </p>
                            <Button
                                type="button"
                                className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                                Отправить резюме
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
