import { motion } from "motion/react";
import { Card } from "../ui/Card.tsx";
import { Button } from "../ui/Button.tsx";
import { Check, Sparkles, Zap, Crown, Building } from "lucide-react";

const plans = [
    {
        name: "Старт",
        icon: Zap,
        price: "0",
        period: "навсегда",
        description: "Идеально для начинающих инвесторов",
        features: [
            "1 брокерский счет",
            "До 50 позиций",
            "Базовая аналитика",
            "Календарь купонов",
            "Мобильное приложение",
            "Email поддержка",
        ],
        popular: false,
    },
    {
        name: "Про",
        icon: Sparkles,
        price: "499",
        period: "в месяц",
        description: "Для активных инвесторов",
        features: [
            "Неограниченно счетов",
            "Неограниченно позиций",
            "Расширенная аналитика",
            "AI-прогнозы доходности",
            "Автоматическая ребалансировка",
            "Налоговая оптимизация",
            "Приоритетная поддержка 24/7",
            "API доступ",
        ],
        popular: true,
    },
    {
        name: "Премиум",
        icon: Crown,
        price: "1499",
        period: "в месяц",
        description: "Для профессионалов и компаний",
        features: [
            "Все из тарифа Про",
            "Персональный менеджер",
            "Индивидуальные стратегии",
            "Белый лейбл",
            "Расширенное API",
            "Кастомные интеграции",
            "Обучение и консультации",
            "SLA 99.9%",
        ],
        popular: false,
    },
];

export default function LandingPricing() {
    return (
        <section
            className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
            id="price"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
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
                        Выберите свой тариф
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Начните бесплатно и обновитесь, когда будете готовы. Все тарифы
                        включают 30 дней бесплатного доступа.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                    <div className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full shadow-lg">
                                        Популярный
                                    </div>
                                </div>
                            )}

                            <Card
                                className={`relative p-8 h-full rounded-3xl transition-all duration-300 ${
                                    plan.popular
                                        ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-2xl shadow-emerald-100/50 scale-105"
                                        : "bg-white border-slate-200 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1"
                                }`}
                            >
                                <div className="mb-6">
                                    <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 mb-4">
                                        <plan.icon
                                            className={`w-6 h-6 ${
                                                plan.popular
                                                    ? "text-emerald-600"
                                                    : "text-slate-600"
                                            }`}
                                        />
                                    </div>
                                    <h3 className="text-2xl text-slate-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-5xl text-slate-900">
                                            {plan.price}
                                        </span>
                                        {plan.price !== "0" && (
                                            <span className="text-slate-600">₽</span>
                                        )}
                                    </div>
                                    <div className="text-slate-500 text-sm">
                                        {plan.period}
                                    </div>
                                </div>

                                <Button
                                    className={`w-full mb-8 rounded-xl ${
                                        plan.popular
                                            ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25"
                                            : "bg-slate-900 hover:bg-slate-800 text-white"
                                    }`}
                                >
                                    {plan.price === "0"
                                        ? "Начать бесплатно"
                                        : "Попробовать 30 дней"}
                                </Button>

                                <div className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-0.5">
                                                <Check
                                                    className={`w-5 h-5 ${
                                                        plan.popular
                                                            ? "text-emerald-600"
                                                            : "text-slate-400"
                                                    }`}
                                                />
                                            </div>
                                            <span className="text-slate-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Enterprise option */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                                <Building
                                    className="w-8 h-8 text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl text-white mb-2">
                                    Корпоративные решения
                                </h3>
                                <p className="text-slate-300 mb-4">
                                    Индивидуальные условия для компаний и крупных
                                    инвесторов. Свяжитесь с нами для обсуждения.
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                                >
                                    Связаться с отделом продаж
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
