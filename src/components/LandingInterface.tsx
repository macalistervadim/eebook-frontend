import { motion } from "framer-motion";
import LandingPortfolioCharts from "./LandingPortfolioCharts.tsx";
import type { JSX } from "react";
import {
    LucideActivity,
    LucideArrowUp,
    LucideDollarSign,
    LucideTrendingUp,
} from "lucide-react";

export default function LandingInterface(): JSX.Element {
    return (
        <section
            id="interface"
            className="max-w-full text-center mx-auto p-6 mt-10 py-45 bg-slate-50 relative
            bg-gradient-to-b from-slate-50 to-white
            dark:from-slate-800 dark:to-slate-900"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
            </div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white"
            >
                Красота в каждой детали
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: true }}
                className="text-slate-600 text-xl mb-25 dark:text-slate-400"
            >
                Интерфейс, разработанный для инвесторов. Все данные под рукой, ничего
                лишнего.
            </motion.p>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-t-3xl p-3 flex items-center gap-2 shadow-xl"
                >
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                        <div className="w-4 h-4 text-emerald-500">🔒</div>
                        <p>eebook.com</p>
                    </div>
                </motion.div>

                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 md:p-12 rounded-b-3xl shadow-2xl border-x border-b border-slate-200"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <motion.div
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="flex flex-col border group p-8 h-full min-h-2xl border-slate-200
                                       transition-all duration-300 hover:shadow-emerald-100/50
                                       hover:translate-y-1 rounded-3xl text-left
                                       hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20
                                       cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Общий капитал</p>
                                <div className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                                    <LucideDollarSign className="w-5 h-5 text-emerald-600" />
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">460 000 ₽</p>
                            <div className="flex items-center gap-1 text-emerald-600 text-sm">
                                <LucideArrowUp className="w-4 h-4" />
                                <span>+18.2% за месяц</span>
                            </div>
                        </motion.div>

                        <motion.div
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="flex flex-col border group p-8 h-full border-slate-200
                                       transition-all duration-300 hover:shadow-emerald-100/50
                                       hover:translate-y-1 rounded-3xl text-left
                                       hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20
                                       cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Доходность</p>
                                <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl">
                                    <LucideTrendingUp className="w-5 h-5 text-teal-600" />
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">+64.2%</p>
                            <p className="text-slate-500 text-sm">годовых</p>
                        </motion.div>

                        <motion.div
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="flex flex-col border group p-8 h-full border-slate-200
                                       transition-all duration-300 hover:shadow-emerald-100/50
                                       hover:translate-y-1 rounded-3xl text-left
                                       hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20
                                       cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Активы</p>
                                <div className="p-2 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl">
                                    <LucideActivity className="w-5 h-5 text-slate-600" />
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">127</p>
                            <p className="text-slate-500 text-sm">позиций</p>
                        </motion.div>

                        <LandingPortfolioCharts />
                    </div>
                </motion.div>

                <motion.div className="text-left hidden lg:block absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">AI-прогноз</div>
                    <div className="text-3xl text-emerald-600 mb-1">+12.4%</div>
                    <div className="text-xs text-slate-500">следующий месяц</div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                        <LucideArrowUp className="w-3 h-3" />
                        <span>высокая уверенность</span>
                    </div>
                </motion.div>

                <motion.div className="text-left hidden lg:block absolute -left-8 bottom-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Ближайший купон</div>
                    <div className="text-2xl text-slate-900 mb-1">12 ноя</div>
                    <div className="text-xl text-emerald-600">2 845 ₽</div>
                    <div className="mt-3 text-xs text-slate-500">ОФЗ 26233</div>
                </motion.div>
            </div>
        </section>
    );
}
