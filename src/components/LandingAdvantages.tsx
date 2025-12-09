import { motion } from "motion/react";
import {
    TrendingUp,
    Sparkles,
    BarChart3,
    Calendar,
    Wallet,
    Shield,
    Zap,
    Globe,
} from "lucide-react";

const features = [
    {
        icon: Wallet,
        title: "Единый портфель",
        description:
            "Управляйте всеми инвестициями в одном месте, независимо от брокера.",
    },
    {
        icon: TrendingUp,
        title: "Динамика в реальном времени",
        description: "Отслеживайте изменения портфеля моментально с живыми графиками.",
    },
    {
        icon: Sparkles,
        title: "AI-прогнозы",
        description:
            "Используйте искусственный интеллект для прогнозирования доходности.",
    },
    {
        icon: Calendar,
        title: "Календарь купонов",
        description: "Никогда не пропустите выплаты с умным календарем и прогнозами.",
    },
    {
        icon: BarChart3,
        title: "Детальная аналитика",
        description: "Глубокие метрики и графики для принятия взвешенных решений.",
    },
    {
        icon: Shield,
        title: "Безопасность данных",
        description: "Банковский уровень защиты ваших финансовых данных.",
    },
    {
        icon: Zap,
        title: "Молниеносная скорость",
        description: "Мгновенная синхронизация и обновление данных.",
    },
    {
        icon: Globe,
        title: "Мультивалютность",
        description: "Поддержка всех мировых валют и рынков.",
    },
];

export default function Features() {
    return (
        <section className="py-32 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Все для успешных инвестиций
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        eebook объединяет передовые технологии и простоту использования,
                        чтобы дать вам полный контроль над инвестициями.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="group relative p-8 h-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-100/50 dark:hover:shadow-emerald-900/50 hover:-translate-y-1 rounded-3xl overflow-hidden border">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 group-hover:from-emerald-100 group-hover:to-teal-100 dark:group-hover:from-emerald-900 dark:group-hover:to-teal-900 transition-all duration-300 mb-6">
                                        <feature.icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-xl mb-3 text-slate-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
