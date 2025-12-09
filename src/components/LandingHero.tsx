"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Badge from "./Badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingHero(): JSX.Element {
    const navigate = useNavigate();

    return (
        <section
            className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        >
            <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 flex justify-center"
                >
                    <Badge
                        className="bg-white border border-slate-200
                    text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800/80"
                    >
                        Новое поколение инвестиционных инструментов
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                        bg-gradient-to-r from-slate-800 to-slate-500
                        bg-clip-text text-transparent
                    "
                >
                    eebook
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 text-2xl sm:text-3xl md:text-4xl text-slate-700 leading-tight
                     dark:text-slate-300"
                >
                    Управляйте инвестициями <br />
                    <span
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text dark:to-teal-400
                     text-transparent dark:from-emerald-400 dark:to-teal-400"
                    >
                        умнее, проще, эффективнее
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                    className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl
                     mx-auto leading-relaxed dark:text-slate-400"
                >
                    Единая платформа для управления всеми вашими портфелями. AI-прогнозы,
                    детальная аналитика и удобные инструменты — в одном месте.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, type: "spring" }}
                    className="flex justify-center gap-4 mt-10 flex-wrap"
                >
                    <Button
                        typeButton="emerald"
                        className="px-4 py-4 rounded-2xl"
                        onClick={() => navigate("/register")}
                    >
                        Начать бесплатно{" "}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button typeButton="noBg" className="px-4 py-4 rounded-2xl">
                        Посмотреть демо
                    </Button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16 text-sm text-slate-500 dark:text-slate-400"
                >
                    Интеграция с любым брокером • AI-анализ • Бесплатно для начала
                </motion.p>
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
            </div>
        </section>
    );
}
