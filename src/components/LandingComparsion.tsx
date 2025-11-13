import { motion } from "motion/react";
import { Check, X, Sparkles } from "lucide-react";

const features = [
    {
        category: "Основные возможности",
        items: [
            { name: "Агрегация портфелей", eebook: true, others: false },
            { name: "Поддержка всех брокеров", eebook: true, others: "partial" },
            { name: "Реал-тайм обновления", eebook: true, others: true },
        ],
    },
    {
        category: "Аналитика",
        items: [
            { name: "AI-прогнозы доходности", eebook: true, others: false },
            { name: "Расширенные метрики", eebook: true, others: "partial" },
            { name: "Календарь купонов", eebook: true, others: false },
            { name: "Историческая аналитика", eebook: true, others: true },
        ],
    },
    {
        category: "Инструменты",
        items: [
            { name: "Автоматическая ребалансировка", eebook: true, others: false },
            { name: "Налоговая оптимизация", eebook: true, others: false },
            { name: "Экспорт данных", eebook: true, others: true },
        ],
    },
];

const FeatureIcon = ({ status }: { status: boolean | "partial" }) => {
    if (status === true) {
        return (
            <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
        );
    }
    if (status === "partial") {
        return (
            <div className="p-1.5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
        );
    }
    return (
        <div className="p-1.5 bg-slate-200 rounded-full">
            <X className="w-4 h-4 text-slate-400" strokeWidth={3} />
        </div>
    );
};

export default function Comparison() {
    return (
        <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700">
                            Сравнение возможностей
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Почему именно eebook?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Мы взяли лучшее от существующих решений и добавили возможности, о
                        которых вы мечтали.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="overflow-hidden border-0 rounded-3xl shadow-2xl">
                        <div className="grid grid-cols-3 bg-white">
                            <div className="p-6 md:p-8"></div>
                            <div className="relative p-6 md:p-8 text-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
                                <div className="relative">
                                    <div className="inline-flex items-center gap-2 text-white mb-2">
                                        <Sparkles className="w-5 h-5" />
                                        <span className="text-lg md:text-xl">eebook</span>
                                    </div>
                                    <div className="text-emerald-100 text-xs md:text-sm">
                                        Новое поколение
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 text-center bg-slate-50 border-l border-slate-200">
                                <div className="text-slate-600">Другие сервисы</div>
                                <div className="text-slate-400 text-xs md:text-sm mt-1">
                                    Среднее по рынку
                                </div>
                            </div>
                        </div>

                        {features.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <div className="grid grid-cols-3 bg-slate-900 border-t border-slate-800">
                                    <div className="col-span-3 p-4 md:p-5">
                                        <h3 className="text-white text-sm md:text-base tracking-wide">
                                            {category.category}
                                        </h3>
                                    </div>
                                </div>

                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={`row-${categoryIndex}-${itemIndex}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: itemIndex * 0.05,
                                        }}
                                        className="grid grid-cols-3 border-t border-slate-200 hover:bg-slate-50/50 transition-colors"
                                    >
                                        <div className="p-4 md:p-5 text-slate-700 text-sm md:text-base bg-white">
                                            {item.name}
                                        </div>
                                        <div className="p-4 md:p-5 flex items-center justify-center bg-gradient-to-br from-emerald-50/30 to-teal-50/30">
                                            <FeatureIcon status={item.eebook} />
                                        </div>
                                        <div className="p-4 md:p-5 flex items-center justify-center bg-slate-50 border-l border-slate-200">
                                            <FeatureIcon status={item.others} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ))}

                        <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200">
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full">
                                        <Check
                                            className="w-4 h-4 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <span className="text-slate-600">
                                        Полная поддержка
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full">
                                        <Check
                                            className="w-4 h-4 text-white"
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <span className="text-slate-600">
                                        Частичная поддержка
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-slate-200 rounded-full">
                                        <X
                                            className="w-4 h-4 text-slate-400"
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <span className="text-slate-600">
                                        Не поддерживается
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
                >
                    <div className="text-center p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="text-5xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            15+
                        </div>
                        <div className="text-slate-600">Поддерживаемых брокеров</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="text-5xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            99.9%
                        </div>
                        <div className="text-slate-600">Uptime гарантия</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white border border-slate-200">
                        <div className="text-5xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            {"<100ms"}
                        </div>
                        <div className="text-slate-600">Скорость обновления</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
