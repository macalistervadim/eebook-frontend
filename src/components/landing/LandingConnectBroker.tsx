import { motion } from "motion/react";
import { Check, ArrowRight, Shield, Zap, Lock, Plug } from "lucide-react";
import { Button } from "@/components/ui/Button.tsx";
import { Card } from "@/components/ui/Card.tsx";

const brokers = [
    { name: "Тинькофф Инвестиции", gradient: "from-yellow-400 to-yellow-600" },
    { name: "Сбербанк Инвестор", gradient: "from-green-500 to-emerald-600" },
    { name: "ВТБ Мои Инвестиции", gradient: "from-blue-500 to-blue-700" },
    { name: "Альфа-Инвестиции", gradient: "from-red-500 to-red-700" },
    { name: "БКС Брокер", gradient: "from-slate-600 to-slate-800" },
    { name: "Открытие Брокер", gradient: "from-purple-500 to-purple-700" },
    { name: "Финам", gradient: "from-orange-500 to-orange-700" },
    { name: "Газпромбанк", gradient: "from-cyan-500 to-blue-600" },
];

const features = [
    {
        icon: Shield,
        title: "Безопасное подключение",
        description: "Банковский уровень шифрования данных",
    },
    {
        icon: Zap,
        title: "Мгновенная синхронизация",
        description: "Обновление портфеля в реальном времени",
    },
    {
        icon: Lock,
        title: "Полная конфиденциальность",
        description: "Мы не храним пароли от брокеров",
    },
];

export default function Integrations() {
    return (
        <section
            id="integrations"
            className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-20" />
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
                        Работает с вашим брокером
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Подключите все свои счета и управляйте портфелями из единого
                        интерфейса. Безопасно и быстро.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="p-8 md:p-12 bg-white border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-30" />

                        <div className="relative">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-sm text-emerald-700">
                                            Активно 15+ интеграций
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">
                                        Все ваши инвестиции
                                        <br />в одном месте
                                    </h3>

                                    <p className="text-lg text-slate-600 mb-8">
                                        Подключайте неограниченное количество брокерских
                                        счетов. eebook автоматически агрегирует данные и
                                        предоставляет единую картину вашего портфеля.
                                    </p>

                                    <Button
                                        size="sm"
                                        className="group px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all"
                                    >
                                        Начать бесплатно
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {brokers.map((broker, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                        >
                                            <div className="border group relative p-4 bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-2xl overflow-hidden">
                                                <div
                                                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${broker.gradient}`}
                                                />

                                                <div className="relative pt-2">
                                                    <div className="absolute top-0 right-0">
                                                        <div className="p-1 bg-emerald-100 rounded-full">
                                                            <Check className="w-3 h-3 text-emerald-600" />
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${broker.gradient} mb-3 text-white shadow-lg`}
                                                    >
                                                        <span className="text-lg">
                                                            {broker.name.charAt(0)}
                                                        </span>
                                                    </div>

                                                    <div className="text-sm text-slate-700 leading-tight">
                                                        {broker.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        className="col-span-2"
                                    >
                                        <div className="border p-4 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 border-dashed rounded-2xl">
                                            <div className="text-center">
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-200 mb-2">
                                                    <span className="text-lg">+</span>
                                                </div>
                                                <div className="text-sm text-slate-600">
                                                    И другие брокеры
                                                </div>
                                                <div className="text-xs text-slate-500 mt-1">
                                                    Добавляем новые каждый месяц
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="h-35 border group p-6 bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Card className="inline-block p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                <Plug className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-xl text-white mb-2">
                                    Не нашли своего брокера?
                                </h3>
                                <p className="text-slate-300">
                                    Мы постоянно добавляем новые интеграции. Напишите нам,
                                    и мы добавим вашего брокера в приоритете.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="flex-shrink-0 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-xl"
                            >
                                Запросить интеграцию
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
