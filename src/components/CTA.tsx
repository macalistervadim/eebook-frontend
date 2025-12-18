import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./Button.tsx";
import { useState } from "react";

export default function CTA() {
    const [errors, setErrors] = useState<{ email?: string }>({});
    const [email, setEmail] = useState("");
    const [debounceTimer, setDebounceTimer] = useState<any>(null);
    const [touched, setTouched] = useState(false);

    const validateEmail = (value: string) => {
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            setErrors({ email: "Некорректный email адрес" });
        } else {
            setErrors({ email: "" });
        }
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);

        if (debounceTimer) clearTimeout(debounceTimer);

        setDebounceTimer(
            setTimeout(() => {
                if (touched) validateEmail(value);
            }, 200)
        );
    };

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

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        className="flex flex-col sm:flex-row gap-4 justify-center items-start mb-8 max-w-xl mx-auto w-full"
                    >
                        <div className="flex flex-col w-full sm:w-auto flex-1">
                            <div className="relative flex-1 w-full">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Ваш email"
                                    className={`border w-full outline-none pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl
                                        ${
                                            errors.email
                                                ? "border-red-400 focus:border-red-400"
                                                : "border-white/20 focus:border-emerald-400 focus:bg-white/15"
                                        }
                                    `}
                                    onChange={(e) => handleEmailChange(e.target.value)}
                                    onBlur={() => {
                                        setTouched(true);
                                        validateEmail(email);
                                    }}
                                />
                            </div>
                            <div className="min-h-[20px] mt-1">
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-400 text-sm"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="w-full sm:w-auto group px-8 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl shadow-lg shadow-emerald-500/25"
                        >
                            Получить доступ
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm text-slate-500"
                    >
                        <p className="mb-4">
                            *Отправляя заявку, вы соглашаетесь с{" "}
                            <a
                                href="#"
                                className="text-emerald-500 hover:text-emerald-300 transition-all"
                            >
                                условиями использования
                            </a>{" "}
                            и{" "}
                            <a
                                href="#"
                                className="text-emerald-500 hover:text-emerald-300 transition-all"
                            >
                                политикой конфиденциальности
                            </a>
                        </p>
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
