import { motion } from "motion/react";
import {
    ArrowRight,
    Sparkles,
    Play,
    TrendingUp,
    Shield,
    Zap,
    Users,
    DollarSign,
    BarChart3,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const [showDemoModal, setShowDemoModal] = useState(false);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowDemoModal(false);
            }
        };

        if (showDemoModal) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [showDemoModal]);
    const navigate = useNavigate();

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Enhanced animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"
                        style={{
                            boxShadow:
                                "0 0 100px 40px rgba(16, 185, 129, 0.3), 0 0 200px 80px rgba(16, 185, 129, 0.15)",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl"
                        style={{
                            boxShadow:
                                "0 0 100px 40px rgba(20, 184, 166, 0.3), 0 0 200px 80px rgba(59, 130, 246, 0.2)",
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, -50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="text-left space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700"
                            >
                                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                    Новое поколение инвестиционных инструментов
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-4xl md:text-5xl xl:text-6xl tracking-tight leading-none"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="text-6xl md:text-8xl tracking-tight mb-6"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    eebook
                                </motion.h1>
                                <span className="block text-4xl md:text-5xl xl:text-6xl text-slate-700 dark:text-slate-300">
                                    Управляйте инвестициями{" "}
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                                        умнее
                                    </span>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
                            >
                                Единая платформа для управления всеми вашими портфелями.
                                AI-прогнозы, детальная аналитика и удобные инструменты в
                                одном месте.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a href="#register">
                                    <Button
                                        size="lg"
                                        className="group relative px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl transition-all text-base"
                                        style={{
                                            boxShadow:
                                                "0 10px 40px -10px rgba(16, 185, 129, 0.4), 0 0 20px rgba(20, 184, 166, 0.3), 0 0 60px rgba(16, 185, 129, 0.2)",
                                        }}
                                        onClick={() => navigate("/register")}
                                    >
                                        Начать бесплатно
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </a>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group relative px-8 py-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 rounded-2xl transition-all text-base"
                                    onClick={() => setShowDemoModal(true)}
                                    style={{
                                        boxShadow:
                                            "0 10px 40px -10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(147, 197, 253, 0.2)",
                                    }}
                                >
                                    <Play className="mr-2 w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                                    Посмотреть демо
                                </Button>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="flex flex-wrap items-center gap-6 pt-4"
                            >
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>15,000+ инвесторов</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>₽8.4 млрд активов</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>Банковская защита</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Visual Preview with Floating Cards */}
                        <div className="relative hidden lg:block">
                            {/* Main Dashboard Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="relative"
                            >
                                {/* Browser Chrome */}
                                <div className="bg-white dark:bg-slate-800 rounded-t-2xl border border-slate-200 dark:border-slate-700 border-b-0 p-3 flex items-center gap-2 shadow-2xl">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 mx-4 bg-slate-100 dark:bg-slate-700 rounded-lg px-4 py-1.5 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                        <div className="w-3 h-3 text-slate-400">🔒</div>
                                        app.eebook.ru
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div
                                    className="bg-white dark:bg-slate-800 rounded-b-2xl border border-slate-200 dark:border-slate-700 border-t-0 p-6 shadow-2xl"
                                    style={{
                                        boxShadow:
                                            "0 20px 80px -20px rgba(0, 0, 0, 0.3), 0 0 60px rgba(16, 185, 129, 0.1)",
                                    }}
                                >
                                    {/* Portfolio Value */}
                                    <div className="mb-6">
                                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                            Стоимость портфеля
                                        </div>
                                        <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                                            ₽2,847,392
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-sm font-medium">
                                                +12.4% за месяц
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mini Chart */}
                                    <div className="h-32 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl p-4 mb-4">
                                        <svg
                                            className="w-full h-full"
                                            viewBox="0 0 200 80"
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="chartGradient"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="0%"
                                                    y2="100%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor="rgb(16, 185, 129)"
                                                        stopOpacity="0.3"
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor="rgb(16, 185, 129)"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M0,60 L20,55 L40,50 L60,45 L80,42 L100,35 L120,30 L140,28 L160,25 L180,20 L200,15"
                                                fill="none"
                                                stroke="rgb(16, 185, 129)"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M0,60 L20,55 L40,50 L60,45 L80,42 L100,35 L120,30 L140,28 L160,25 L180,20 L200,15 L200,80 L0,80 Z"
                                                fill="url(#chartGradient)"
                                            />
                                        </svg>
                                    </div>

                                    {/* Assets Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            {
                                                name: "SBER",
                                                value: "₽412K",
                                                change: "+5.2%",
                                                positive: true,
                                            },
                                            {
                                                name: "GAZP",
                                                value: "₽328K",
                                                change: "+3.1%",
                                                positive: true,
                                            },
                                            {
                                                name: "YNDX",
                                                value: "₽156K",
                                                change: "-1.4%",
                                                positive: false,
                                            },
                                            {
                                                name: "VTBR",
                                                value: "₽89K",
                                                change: "+2.8%",
                                                positive: true,
                                            },
                                        ].map((asset, i) => (
                                            <motion.div
                                                key={asset.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3"
                                            >
                                                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                                    {asset.name}
                                                </div>
                                                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                                    {asset.value}
                                                </div>
                                                <div
                                                    className={`text-xs font-medium ${asset.positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
                                                >
                                                    {asset.change}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 1 - AI Insight */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="absolute -left-12 top-12 w-64 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl"
                                style={{
                                    boxShadow:
                                        "0 20px 60px -10px rgba(0, 0, 0, 0.2), 0 0 40px rgba(16, 185, 129, 0.1)",
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                                            AI Совет
                                        </div>
                                        <div className="text-sm text-slate-900 dark:text-white font-medium mb-1">
                                            Ребалансировка
                                        </div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">
                                            Рекомендуем перераспределить облигации
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 - Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="absolute -right-8 bottom-20 w-56 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl"
                                style={{
                                    boxShadow:
                                        "0 20px 60px -10px rgba(0, 0, 0, 0.2), 0 0 40px rgba(20, 184, 166, 0.1)",
                                }}
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        Сегодн��
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-600 dark:text-slate-400">
                                            Доход
                                        </span>
                                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                            +₽28,432
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-600 dark:text-slate-400">
                                            Дивиденды
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                            ₽5,200
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 3 - Notification */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="absolute -bottom-8 left-8 w-60 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl"
                                style={{
                                    boxShadow:
                                        "0 20px 60px -10px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)",
                                }}
                                animate={{
                                    x: [0, 5, 0],
                                }}
                                transition={{
                                    x: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">
                                        2 мин назад
                                    </div>
                                </div>
                                <div className="text-sm text-slate-900 dark:text-white font-medium">
                                    Выплачены дивиденды SBER
                                </div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                    ₽2,840 зачислено на счет
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Demo Modal */}
            {showDemoModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={() => setShowDemoModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden border border-slate-200 dark:border-slate-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                    <Play className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                        Демонстрация платформы eebook
                                    </h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Обзор ключевых возможностей и функционала
                                    </p>
                                </div>
                            </div>
                            <button
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                onClick={() => setShowDemoModal(false)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Video Container */}
                        <div
                            className="relative bg-slate-950"
                            style={{ paddingBottom: "56.25%" }}
                        >
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/"
                                title="eebook Platform Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Нравится то, что видите? Начните использовать eebook
                                    бесплатно
                                </p>
                                <a href="#register">
                                    <Button
                                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                                        onClick={() => navigate("/register")}
                                    >
                                        Начать бесплатно
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
