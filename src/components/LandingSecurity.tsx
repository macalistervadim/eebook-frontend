import type { JSX } from "react";
import { motion } from "motion/react";
import { CircleCheck, FileCheck, Shield, TriangleAlert, LucideLock } from "lucide-react";

export default function LandingSecurity(): JSX.Element {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100  rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 ">
                        Наши гарантии
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Четкие обязательства перед каждым пользователем
                    </p>
                </motion.div>
                <div className="grid grid-cols-3 gap-7">
                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-6 gap-12 hover:shadow-xl transition-all duration-300">
                        <div className="max-w-full bg-slate-200 px-4 py-4 rounded-2xl">
                            <Shield className="text-slate-900 w-8 h-8" />
                        </div>
                        <div className="space-y-9">
                            <p className="text-xl">Не продаем данные</p>
                            <p className="text-slate-600">
                                Ваши инвестиционные данные никогда не будут проданы
                                третьим лицам или использованы для рекламы
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-6 gap-12 hover:shadow-xl transition-all duration-300">
                        <div className="max-w-full bg-slate-200 px-4 py-4 rounded-2xl">
                            <CircleCheck className="text-slate-900 w-8 h-8" />
                        </div>
                        <div className="space-y-9">
                            <p className="text-xl">99.9% Uptime SLA</p>
                            <p className="text-slate-600">
                                Гарантируем доступность сервиса 99.9% времени с
                                автоматической компенсацией при нарушении.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border border-slate-400/30 rounded-2xl p-6 gap-12 hover:shadow-xl transition-all duration-300">
                        <div className="max-w-full bg-slate-200 px-4 py-4 rounded-2xl">
                            <TriangleAlert className="text-slate-900 w-8 h-8" />
                        </div>
                        <div className="space-y-9">
                            <p className="text-xl">Регулярные аудиты</p>
                            <p className="text-slate-600">
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
                    className="mt-20"
                >
                    <div className="relative overflow-hidden p-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 border-0 rounded-3xl shadow-2xl shadow-emerald-500/50">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
                        <div className="relative text-center">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <Shield className="w-12 h-12 text-white" />
                                <LucideLock className="w-12 h-12 text-emerald-100" />
                                <FileCheck className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl text-white mb-4">
                                Более 12,000 инвесторов доверяют eebook
                            </h3>
                            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                                Присоединяйтесь к сообществу инвесторов, которые управляют
                                своими портфелями безопасно и эффективно
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-100">
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="w-5 h-5" />
                                    <span>Банковский уровень защиты</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="w-5 h-5" />
                                    <span>Данные в России</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CircleCheck className="w-5 h-5" />
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
                    className="text-center text-sm text-slate-500 dark:text-slate-400 mt-12 max-w-3xl mx-auto"
                >
                    eebook — не брокер и не управляющая компания. Мы предоставляем только
                    аналитические и информационные услуги. Для совершения сделок
                    используйте ваших брокеров.
                </motion.p>
            </div>
        </section>
    );
}
