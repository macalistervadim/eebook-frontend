import { motion } from "motion/react";
import { Card } from "../ui/Card.tsx";
import { Star, Quote } from "lucide-react";
import { User, UserCircle, UserCog, UserCheck, UserPlus } from "lucide-react";

const testimonials = [
    {
        name: "Алексей М.",
        role: "Частный инвестор",
        avatar: User,
        rating: 5,
        text: "eebook полностью изменил мой подход к инвестициям. Теперь все портфели в одном месте, а AI-прогнозы помогают принимать взвешенные решения.",
    },
    {
        name: "Мария К.",
        role: "Финансовый консультант",
        avatar: UserCircle,
        rating: 5,
        text: "Рекомендую всем своим клиентам. Удобный интерфейс, детальная аналитика и отличная поддержка. Незаменимый инструмент для профессионалов.",
    },
    {
        name: "Дмитрий С.",
        role: "Опытный трейдер",
        avatar: UserCog,
        rating: 5,
        text: "Пользуюсь уже полгода. Календарь купонов экономит массу времени, а возможность отслеживать несколько брокеров одновременно — это просто находка!",
    },
    {
        name: "Елена В.",
        role: "Начинающий инвестор",
        avatar: UserCheck,
        rating: 5,
        text: "Начинала с нуля, и eebook помог разобраться в инвестициях. Простой интерфейс, понятные графики и полезные подсказки. Очень довольна!",
    },
    {
        name: "Игорь П.",
        role: "IT-специалист",
        avatar: User,
        rating: 5,
        text: "Оценил техническую реализацию. Быстрая синхронизация, безопасность на высоте, API для автоматизации. Все продумано до мелочей.",
    },
    {
        name: "Ольга Н.",
        role: "Бизнес-владелец",
        avatar: UserPlus,
        rating: 5,
        text: "Управляю корпоративными и личными инвестициями через eebook. Удобная аналитика позволяет быстро оценивать эффективность портфеля.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Что говорят пользователи
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Присоединяйтесь к тысячам инвесторов, которые уже выбрали eebook
                        для управления своими портфелями.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group relative p-6 h-full bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl overflow-hidden">
                                <div className="absolute top-4 right-4 text-emerald-100 opacity-50">
                                    <Quote className="w-12 h-12" />
                                </div>

                                <div className="relative">
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-emerald-500 text-emerald-500"
                                                />
                                            )
                                        )}
                                    </div>

                                    {/* Text */}
                                    <p className="text-slate-700 mb-6 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                            <testimonial.avatar
                                                className="w-6 h-6 text-white"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-slate-900">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-slate-500">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                5000+
                            </div>
                            <div className="text-slate-600">Активных пользователей</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                ₽15B+
                            </div>
                            <div className="text-slate-600">Под управлением</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                4.9★
                            </div>
                            <div className="text-slate-600">Средний рейтинг</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                98%
                            </div>
                            <div className="text-slate-600">Рекомендуют друзьям</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
