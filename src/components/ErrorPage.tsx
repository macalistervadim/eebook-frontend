"use client";

import { motion } from "framer-motion";
import { Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
    code: "404" | "500" | "401" | "403" | "402" | "503";
}

const errorContent = {
    "404": {
        title: "Страница не найдена",
        description:
            "Мы не смогли найти страницу, которую вы ищете. Возможно, она была перемещена или удалена.",
        gradient: "from-emerald-400 to-teal-400",
    },
    "500": {
        title: "Внутренняя ошибка",
        description: "На сервере произошла ошибка. Мы уже занимаемся решением проблемы.",
        gradient: "from-red-400 to-rose-500",
    },
    "401": {
        title: "Требуется вход",
        description: "Для доступа к этому разделу необходимо авторизоваться.",
        gradient: "from-amber-400 to-orange-500",
    },
    "403": {
        title: "Доступ запрещён",
        description: "Кажется, у вас нет прав для просмотра этой страницы.",
        gradient: "from-red-500 to-pink-500",
    },
    "402": {
        title: "Платный доступ",
        description: "Этот раздел доступен только на платных тарифах.",
        gradient: "from-purple-500 to-fuchsia-500",
    },
    "503": {
        title: "Сервис недоступен",
        description:
            "Мы временно на техническом обслуживании. Пожалуйста, попробуйте позже.",
        gradient: "from-blue-500 to-cyan-500",
    },
};

export function ErrorPage({ code }: ErrorPageProps) {
    const content = errorContent[code];
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
            {/* soft ambient gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-white/40 to-transparent blur-3xl opacity-50" />
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-radial from-emerald-400/20 to-transparent blur-3xl opacity-30" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center max-w-xl mx-auto"
            >
                {/* Clean hero code */}
                <div className="mb-12">
                    <div className="relative inline-flex">
                        {/* soft glow */}
                        <div
                            className={`absolute inset-0 blur-[60px] opacity-60 bg-gradient-to-r ${content.gradient} transform-gpu`}
                        />
                        <motion.div
                            className={`relative text-[150px] font-extrabold bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent leading-none`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {code}
                        </motion.div>
                    </div>
                </div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl font-semibold text-slate-900 dark:text-white mb-4"
                >
                    {content.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg text-slate-600 dark:text-slate-400 mb-10"
                >
                    {content.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm sm:max-w-none"
                >
                    <Button
                        size="lg"
                        className="rounded-xl bg-gradient-to-r  from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
                        onClick={() => navigate("/")}
                    >
                        <Home className="w-5 h-5 mr-2" />
                        На главную
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.location.reload()}
                        className="rounded-xl border-slate-300 dark:border-slate-700"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Обновить страницу
                    </Button>
                </motion.div>

                <p className="mt-12 text-slate-500 dark:text-slate-400 text-sm">
                    Код ошибки: <span className="font-mono">{code}</span>
                </p>
            </motion.div>
        </div>
    );
}

export const Error404 = () => <ErrorPage code="404" />;
export const Error500 = () => <ErrorPage code="500" />;
export const Error401 = () => <ErrorPage code="401" />;
export const Error403 = () => <ErrorPage code="403" />;
export const Error402 = () => <ErrorPage code="402" />;
export const Error503 = () => <ErrorPage code="503" />;
