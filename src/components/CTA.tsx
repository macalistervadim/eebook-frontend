import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import Button from "./Button.tsx";

export default function CTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-white">
                        Начните управлять инвестициями
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            по-новому уже сегодня
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                        Присоединяйтесь к тысячам инвесторов, которые уже используют
                        eebook для умного управления портфелем.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-xl mx-auto"
                    >
                        <div className="relative flex-1 w-full">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                placeholder="Ваш email"
                                className="w-full outline-none pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 rounded-2xl focus:border-emerald-400 focus:bg-white/15"
                            />
                        </div>
                        <a href="/register">
                            <Button typeButton="emerald">
                                Получить доступ
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm text-slate-400"
                    >
                        <p className="mb-4">
                            Первые 30 дней бесплатно • Без привязки карты • Отмена в любой
                            момент
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10"
                    >
                        <div>
                            <div className="text-3xl text-white mb-2">5000+</div>
                            <div className="text-slate-400">Активных пользователей</div>
                        </div>
                        <div>
                            <div className="text-3xl text-white mb-2">₽15B+</div>
                            <div className="text-slate-400">Под управлением</div>
                        </div>
                        <div>
                            <div className="text-3xl text-white mb-2">4.9★</div>
                            <div className="text-slate-400">Рейтинг в сторах</div>
                        </div>
                        <div>
                            <div className="text-3xl text-white mb-2">24/7</div>
                            <div className="text-slate-400">Поддержка</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
