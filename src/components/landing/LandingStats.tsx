import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";

const stats = [
    { value: 5000, suffix: "+", label: "Активных пользователей", prefix: "" },
    { value: 15, suffix: "B+", label: "Под управлением", prefix: "₽" },
    { value: 99.9, suffix: "%", label: "Uptime", prefix: "" },
    { value: 100, suffix: "ms", label: "Скорость обновления", prefix: "<" },
];

function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
}: {
    value: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {prefix}
            {suffix === "%" || suffix === "ms"
                ? count.toFixed(1)
                : Math.floor(count).toLocaleString("ru-RU")}
            {suffix}
        </span>
    );
}

export default function LandingStats(): JSX.Element {
    return (
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-white">
                        eebook в цифрах
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Нам доверяют тысячи инвесторов по всей России
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/10">
                                <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    <AnimatedCounter
                                        value={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-slate-300">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                        <div className="flex -space-x-2">
                            {["👨‍💼", "👩‍💼", "👨‍💻", "👩‍🎓", "👨‍🔧"].map((emoji, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center border-2 border-slate-900 text-sm"
                                >
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-slate-300 text-sm">
                            Присоединяйтесь к растущему сообществу инвесторов
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
