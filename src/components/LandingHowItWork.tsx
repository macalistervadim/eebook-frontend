import { motion } from "motion/react";
import { Check } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Подключите брокеров",
        description:
            "Добавьте все свои брокерские счета в один клик. Безопасное подключение через API.",
        image: "🔗",
        color: "from-emerald-500 to-teal-500",
    },
    {
        number: "02",
        title: "Агрегируйте данные",
        description:
            "eebook автоматически соберет данные со всех счетов и построит единый портфель.",
        image: "📊",
        color: "from-teal-500 to-cyan-500",
    },
    {
        number: "03",
        title: "Анализируйте с AI",
        description:
            "Получайте умные прогнозы, рекомендации по ребалансировке и оптимизации налогов.",
        image: "🤖",
        color: "from-cyan-500 to-blue-500",
    },
    {
        number: "04",
        title: "Принимайте решения",
        description: "Используйте детальную аналитику и инсайты для успешных инвестиций.",
        image: "✨",
        color: "from-blue-500 to-emerald-500",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Как это работает
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Четыре простых шага от подключения до профессионального управления
                        портфелем
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-800" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="relative z-10 mb-6">
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mx-auto`}
                                    >
                                        <span className="text-2xl text-white font-bold">
                                            {step.number}
                                        </span>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 rounded-full p-1 shadow-lg">
                                        <div className="bg-emerald-500 rounded-full p-1">
                                            <Check
                                                className="w-3 h-3 text-white"
                                                strokeWidth={3}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="border p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
                                    <div className="text-5xl mb-4 text-center">
                                        {step.image}
                                    </div>

                                    <h3 className="text-xl text-slate-900 dark:text-white mb-3 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Готовы начать?
                    </p>
                    <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <span>Весь процесс занимает менее 5 минут</span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
