import type { JSX } from "react";
import { motion } from "motion/react";
import {
    CircleCheck,
    FileCheck,
    Shield,
    TriangleAlert,
    LucideLock,
    Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge.tsx";

export default function LandingSecurity(): JSX.Element {
    return (
        <section className="py-24 sm:py-28 md:py-32 bg-slate-50 relative overflow-hidden dark:bg-slate-900">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 dark:hidden rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-100 dark:border-emerald-800 mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm text-emerald-700 dark:text-emerald-300">
                            Безопасность и доверие
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">
                        Наши гарантии
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Четкие обязательства перед каждым пользователем
                    </p>
                </motion.div>

                {/* Адаптивная сетка: 1 → 2 → 3 колонки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-5 sm:p-6 gap-8 sm:gap-12 hover:shadow-xl transition-all duration-300 dark:bg-slate-800/30 dark:border-slate-700 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/50">
                        <div className="bg-slate-200 dark:bg-emerald-900 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-2xl dark:bg-gradient-to-br dark:from-emerald-900 dark:to-teal-900">
                            <Shield className="text-slate-900 w-7 sm:w-8 h-7 sm:h-8 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-6 sm:space-y-9">
                            <p className="text-lg sm:text-xl dark:text-white">
                                Не продаем данные
                            </p>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                Ваши инвестиционные данные никогда не будут проданы
                                третьим лицам или использованы для рекламы
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-5 sm:p-6 gap-8 sm:gap-12 hover:shadow-xl transition-all duration-300 dark:bg-slate-800/30 dark:border-slate-700 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/50">
                        <div className="bg-slate-200 dark:bg-emerald-900 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-2xl dark:bg-gradient-to-br dark:from-emerald-900 dark:to-teal-900">
                            <CircleCheck className="text-slate-900 w-7 sm:w-8 h-7 sm:h-8 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-6 sm:space-y-9">
                            <p className="text-lg sm:text-xl dark:text-white">
                                99.9% Uptime SLA
                            </p>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                Гарантируем доступность сервиса 99.9% времени с
                                автоматической компенсацией при нарушении.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-5 sm:p-6 gap-8 sm:gap-12 hover:shadow-xl transition-all duration-300 dark:bg-slate-800/30 dark:border-slate-700 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/50">
                        <div className="bg-slate-200 dark:bg-emerald-900 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-2xl dark:bg-gradient-to-br dark:from-emerald-900 dark:to-teal-900">
                            <TriangleAlert className="text-slate-900 w-7 sm:w-8 h-7 sm:h-8 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-6 sm:space-y-9">
                            <p className="text-lg sm:text-xl dark:text-white">
                                Регулярные аудиты
                            </p>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                Ежеквартальная проверка безопасности независимыми
                                экспертами и пентестерами
                            </p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 sm:mt-20"
                >
                    <div className="relative overflow-hidden p-8 sm:p-10 md:p-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 border-0 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-emerald-500/40 sm:shadow-emerald-500/50">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
                        <div className="relative text-center">
                            <div className="flex justify-center flex-wrap gap-4 mb-6">
                                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                <LucideLock className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-100" />
                                <FileCheck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">
                                Более 12,000 инвесторов доверяют eebook
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                                Присоединяйтесь к сообществу инвесторов, которые управляют
                                своими портфелями безопасно и эффективно
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-emerald-100 text-sm sm:text-base">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Банковский уровень защиты</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Данные в России</span>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Read-only доступ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-10 sm:mt-12 max-w-3xl mx-auto px-2"
                >
                    eebook — не брокер и не управляющая компания. Мы предоставляем только
                    аналитические и информационные услуги. Для совершения сделок
                    используйте ваших брокеров.
                </motion.p>
            </div>
        </section>
    );
}
