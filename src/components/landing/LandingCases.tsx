import type { JSX } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { TrendingUp, Clock, Target, Award, User } from "lucide-react";
import { motion } from "motion/react";

const cases = [
    {
        name: "Алексей",
        role: "Частный инвестор",
        portfolio: "2.1 млн ₽",
        period: "6 месяцев",
        improvement: "+23%",
        avatar: User,
        quote: "eebook помог мне увидеть реальную картину моих инвестиций. Налоговая оптимизация окупила подписку за первый же месяц.",
        metrics: [
            { label: "Было", value: "8.2%", color: "text-slate-600" },
            { label: "Стало", value: "31.4%", color: "text-emerald-600" },
        ],
        data: [
            { month: "Янв", before: 8.2, after: 8.2 },
            { month: "Фев", before: 9.1, after: 12.5 },
            { month: "Мар", before: 8.8, after: 16.8 },
            { month: "Апр", before: 10.3, after: 21.2 },
            { month: "Май", before: 9.5, after: 26.7 },
            { month: "Июн", before: 8.2, after: 31.4 },
        ],
    },
    {
        name: "Мария",
        role: "Финансовый аналитик",
        portfolio: "5.8 млн ₽",
        period: "4 месяца",
        improvement: "+18%",
        avatar: User,
        quote: "AI-прогнозы оказались точнее моих собственных. Автоматическая ребалансировка экономит 10+ часов в месяц.",
        metrics: [
            { label: "Было", value: "12.5%", color: "text-slate-600" },
            { label: "Стало", value: "30.8%", color: "text-emerald-600" },
        ],
        data: [
            { month: "Янв", before: 12.5, after: 12.5 },
            { month: "Фев", before: 13.2, after: 18.3 },
            { month: "Мар", before: 14.1, after: 24.6 },
            { month: "Апр", before: 12.8, after: 30.8 },
        ],
    },
    {
        name: "Дмитрий",
        role: "Предприниматель",
        portfolio: "12.3 млн ₽",
        period: "8 месяцев",
        improvement: "+31%",
        avatar: User,
        quote: "Управлял 4 брокерскими счетами в Excel. Теперь все в одном месте с полной аналитикой. Это другой уровень.",
        metrics: [
            { label: "Было", value: "15.3%", color: "text-slate-600" },
            { label: "Стало", value: "46.7%", color: "text-emerald-600" },
        ],
        data: [
            { month: "Янв", before: 15.3, after: 15.3 },
            { month: "Фев", before: 16.8, after: 19.2 },
            { month: "Мар", before: 15.9, after: 24.5 },
            { month: "Апр", before: 17.2, after: 29.8 },
            { month: "Май", before: 16.5, after: 34.2 },
            { month: "Июн", before: 15.8, after: 39.5 },
            { month: "Июл", before: 16.1, after: 43.1 },
            { month: "Авг", before: 15.3, after: 46.7 },
        ],
    },
];

export default function LandingCases(): JSX.Element {
    return (
        <section className="py-32 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-20" />
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
                        Истории успеха
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Реальные результаты наших пользователей. Все данные проверены и
                        подтверждены.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {cases.map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div
                                className="overflow-hidden border-0 rounded-3xl shadow-2xl
                             bg-white dark:bg-slate-900"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div
                                        className="p-8 md:p-12 bg-gradient-to-br
                                     from-white to-slate-50 dark:from-slate-900
                                     dark:to-slate-800"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                                                <caseStudy.avatar
                                                    className="w-8 h-8 text-white"
                                                    strokeWidth={2.5}
                                                />
                                            </div>
                                            <div>
                                                <h3
                                                    className="text-2xl text-slate-900
                                                 dark:text-white mb-1"
                                                >
                                                    {caseStudy.name}
                                                </h3>
                                                <p
                                                    className="text-slate-600
                                                dark:text-slate-400"
                                                >
                                                    {caseStudy.role}
                                                </p>
                                            </div>
                                        </div>

                                        <blockquote
                                            className="text-lg text-slate-700
                                         dark:text-slate-300 mb-8 italic border-l-4
                                          border-emerald-500 pl-4"
                                        >
                                            "{caseStudy.quote}"
                                        </blockquote>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div
                                                className="p-4 bg-white
                                            dark:bg-slate-800 rounded-2xl border
                                             border-slate-200 dark:border-slate-700"
                                            >
                                                <div
                                                    className="flex items-center gap-2
                                                text-slate-600 dark:text-slate-400 mb-2"
                                                >
                                                    <Target className="w-4 h-4" />
                                                    <span
                                                        className="text-xs uppercase
                                                    tracking-wide"
                                                    >
                                                        Портфель
                                                    </span>
                                                </div>
                                                <div
                                                    className="text-xl text-slate-900
                                                dark:text-white"
                                                >
                                                    {caseStudy.portfolio}
                                                </div>
                                            </div>

                                            <div
                                                className="p-4 bg-white
                                            dark:bg-slate-800 rounded-2xl border
                                            border-slate-200 dark:border-slate-700"
                                            >
                                                <div
                                                    className="flex items-center gap-2
                                                 text-slate-600 dark:text-slate-400
                                                  mb-2"
                                                >
                                                    <Clock className="w-4 h-4" />
                                                    <span
                                                        className="text-xs uppercase
                                                    tracking-wide"
                                                    >
                                                        Период
                                                    </span>
                                                </div>
                                                <div
                                                    className="text-xl text-slate-900
                                                 dark:text-white"
                                                >
                                                    {caseStudy.period}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div
                                                className="flex items-center
                                            justify-between p-4 bg-slate-100
                                            dark:bg-slate-800/50 rounded-2xl"
                                            >
                                                <span
                                                    className="text-slate-600
                                                dark:text-slate-400"
                                                >
                                                    Доходность до eebook
                                                </span>
                                                <span
                                                    className="text-2xl text-slate-600
                                                dark:text-slate-400"
                                                >
                                                    {caseStudy.metrics[0].value}
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center
                                            justify-between p-4 bg-gradient-to-br
                                             from-emerald-50 to-teal-50
                                              dark:from-emerald-900/30
                                              dark:to-teal-900/30 rounded-2xl border-2
                                              border-emerald-200 dark:border-emerald-700"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Award
                                                        className="w-5 h-5
                                                    text-emerald-600
                                                    dark:text-emerald-400"
                                                    />
                                                    <span
                                                        className="text-emerald-700
                                                    dark:text-emerald-300"
                                                    >
                                                        Доходность с eebook
                                                    </span>
                                                </div>
                                                <span
                                                    className="text-3xl text-emerald-600
                                                 dark:text-emerald-400"
                                                >
                                                    {caseStudy.metrics[1].value}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            className="mt-8 inline-flex items-center
                                         gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600
                                         to-teal-600 text-white rounded-full
                                         shadow-lg shadow-emerald-500/25"
                                        >
                                            <TrendingUp className="w-5 h-5" />
                                            <span className="text-lg">
                                                Улучшение {caseStudy.improvement}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className="p-8 md:p-12 bg-white
                                    dark:bg-slate-900 flex items-center"
                                    >
                                        <div className="w-full">
                                            <div className="mb-6">
                                                <h4
                                                    className="text-lg text-slate-900
                                                dark:text-white mb-2"
                                                >
                                                    Сравнение доходности
                                                </h4>
                                                <p
                                                    className="text-sm text-slate-600
                                                dark:text-slate-400"
                                                >
                                                    Годовая доходность, %
                                                </p>
                                            </div>
                                            <div className="h-80">
                                                <ResponsiveContainer
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <LineChart data={caseStudy.data}>
                                                        <CartesianGrid
                                                            strokeDasharray="3 3"
                                                            stroke="#e2e8f0"
                                                        />
                                                        <XAxis
                                                            dataKey="month"
                                                            stroke="#94a3b8"
                                                            style={{ fontSize: "14px" }}
                                                        />
                                                        <YAxis
                                                            stroke="#94a3b8"
                                                            style={{ fontSize: "14px" }}
                                                            tickFormatter={(value) =>
                                                                `${value}%`
                                                            }
                                                        />
                                                        <Tooltip
                                                            contentStyle={{
                                                                backgroundColor: "white",
                                                                border: "1px solid #e2e8f0",
                                                                borderRadius: "12px",
                                                                padding: "12px",
                                                            }}
                                                            formatter={(value: any) => [
                                                                `${value}%`,
                                                                "",
                                                            ]}
                                                        />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="before"
                                                            stroke="#94a3b8"
                                                            strokeWidth={2}
                                                            strokeDasharray="5 5"
                                                            name="Без eebook"
                                                            dot={{
                                                                fill: "#94a3b8",
                                                                r: 4,
                                                            }}
                                                        />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="after"
                                                            stroke="#10b981"
                                                            strokeWidth={3}
                                                            name="С eebook"
                                                            dot={{
                                                                fill: "#10b981",
                                                                r: 5,
                                                            }}
                                                        />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>

                                            <div
                                                className="flex items-center justify-center
                                            gap-8 mt-6"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-8 h-0.5 bg-slate-400"
                                                        style={{
                                                            borderTop:
                                                                "2px dashed #94a3b8",
                                                        }}
                                                    />
                                                    <span
                                                        className="text-sm text-slate-600
                                                    dark:text-slate-400"
                                                    >
                                                        Без eebook
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-0.5 bg-emerald-500" />
                                                    <span
                                                        className="text-sm text-emerald-600
                                                     dark:text-emerald-400"
                                                    >
                                                        С eebook
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
                >
                    <div
                        className="p-8 text-center bg-white dark:bg-slate-900
                    border-slate-200 dark:border-slate-700 rounded-2xl"
                    >
                        <div
                            className="text-5xl mb-2 bg-gradient-to-r
                        from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            +24%
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                            Средний рост доходности
                        </div>
                    </div>
                    <div
                        className="p-8 text-center bg-white dark:bg-slate-900
                     border-slate-200 dark:border-slate-700 rounded-2xl"
                    >
                        <div
                            className="text-5xl mb-2 bg-gradient-to-r from-emerald-600
                         to-teal-600 bg-clip-text text-transparent"
                        >
                            3-6
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                            Месяцев до первых результатов
                        </div>
                    </div>
                    <div
                        className="p-8 text-center bg-white dark:bg-slate-900
                     border-slate-200 dark:border-slate-700 rounded-2xl"
                    >
                        <div
                            className="text-5xl mb-2 bg-gradient-to-r from-emerald-600
                         to-teal-600 bg-clip-text text-transparent"
                        >
                            92%
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                            Пользователей продлевают подписку
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
