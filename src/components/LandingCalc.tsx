"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { JSX } from "react";
import { TrendingUp, Percent } from "lucide-react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import Button from "./Button.tsx";
import Badge from "./Badge.tsx";
import { useNavigate } from "react-router-dom";

export default function LandingCalc(): JSX.Element {
    const [portfolioValue, setPortfolioValue] = useState(1000000);
    const [monthlyTrades, setMonthlyTrades] = useState(10);

    const taxOptimization = portfolioValue * 0.032;
    const feeSavings = monthlyTrades * 150 * 12;
    const aiPredictionBoost = portfolioValue * 0.045;
    const rebalancingGain = portfolioValue * 0.028;

    const totalYearlySavings =
        taxOptimization + feeSavings + aiPredictionBoost + rebalancingGain;
    const monthlySubscription = 499;
    const yearlySubscriptionCost = monthlySubscription * 12;
    const netProfit = totalYearlySavings - yearlySubscriptionCost;
    const roi = ((netProfit / yearlySubscriptionCost) * 100).toFixed(0);
    const navigate = useNavigate();

    return (
        <section className="py-24 sm:py-28 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden dark:from-slate-900 dark:to-slate-800">
            <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <Badge className="dark:text-emerald-300 border dark:border-emerald-800 dark:bg-emerald-900/30 mb-6 sm:mb-10">
                        Калькулятор выгоды
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 text-slate-900 dark:text-white">
                        Посчитайте вашу выгоду
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400">
                        Узнайте, сколько вы сможете сэкономить и заработать дополнительно,
                        используя eebook для управления портфелем.
                    </p>
                </motion.div>

                {/* ✅ Основной блок: на мобильных — колонка, на lg+ — 2 колонки */}
                <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:flex-row lg:gap-12">
                    {/* Левая колонка: параметры */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-800 border border-slate-200 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl flex flex-col gap-6 dark:border-slate-700">
                            <h3 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-slate-900 dark:text-slate-200">
                                Ваши параметры
                            </h3>

                            <div className="mb-8">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <label className="text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                                        Размер портфеля
                                    </label>
                                    <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 dark:from-emerald-900/30 dark:to-teal-900/30 dark:border-emerald-800">
                                        <span className="text-lg sm:text-xl text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                                            {portfolioValue.toLocaleString("ru-RU")} ₽
                                        </span>
                                    </div>
                                </div>

                                <SliderPrimitive.Root
                                    value={[portfolioValue]}
                                    onValueChange={(val) => setPortfolioValue(val[0])}
                                    min={100000}
                                    max={10000000}
                                    step={100000}
                                    className="relative flex w-full touch-none select-none items-center h-5"
                                >
                                    <SliderPrimitive.Track className="bg-slate-200 relative grow rounded-full h-1.5 dark:bg-slate-500">
                                        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl" />
                                    </SliderPrimitive.Track>
                                    <SliderPrimitive.Thumb className="block w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-emerald-500 rounded-full shadow-sm" />
                                </SliderPrimitive.Root>

                                <div className="flex justify-between text-xs text-slate-500 mt-2 dark:text-slate-400">
                                    <span>100 тыс ₽</span>
                                    <span>10 млн ₽</span>
                                </div>
                            </div>

                            {/* Сделок в месяц */}
                            <div className="mb-8">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <label className="text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                                        Сделок в месяц
                                    </label>
                                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 dark:from-slate-700 dark:to-slate-600 dark:border-slate-600">
                                        <span className="text-lg sm:text-xl text-slate-900 dark:text-white whitespace-nowrap">
                                            {monthlyTrades}
                                        </span>
                                    </div>
                                </div>
                                <SliderPrimitive.Root
                                    value={[monthlyTrades]}
                                    onValueChange={(val) => setMonthlyTrades(val[0])}
                                    min={1}
                                    max={100}
                                    step={1}
                                    className="relative flex w-full touch-none select-none items-center h-5"
                                >
                                    <SliderPrimitive.Track className="bg-slate-200 relative grow rounded-full h-1.5 dark:bg-slate-500">
                                        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl" />
                                    </SliderPrimitive.Track>
                                    <SliderPrimitive.Thumb className="block w-4 h-4 sm:w-5 sm:h-5 bg-white border-2 border-emerald-500 rounded-full shadow-sm" />
                                </SliderPrimitive.Root>
                                <div className="flex justify-between text-xs text-slate-500 mt-2 dark:text-slate-400">
                                    <span>1 сделка</span>
                                    <span>100 сделок</span>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                                {[
                                    {
                                        label: "Налоговая оптимизация",
                                        value: taxOptimization,
                                    },
                                    { label: "Экономия на комиссиях", value: feeSavings },
                                    {
                                        label: "Доп. доходность от AI",
                                        value: aiPredictionBoost,
                                    },
                                    {
                                        label: "Автоматическая ребалансировка",
                                        value: rebalancingGain,
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between text-sm"
                                    >
                                        <span className="text-slate-600 dark:text-slate-400">
                                            {item.label}
                                        </span>
                                        <span className="text-slate-900 dark:text-slate-200 whitespace-nowrap">
                                            +
                                            {item.value.toLocaleString("ru-RU", {
                                                maximumFractionDigits: 0,
                                            })}{" "}
                                            ₽
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Правая колонка: результаты */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        {/* Годовая выгода */}
                        <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-emerald-500/40 sm:shadow-emerald-500/50 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
                            <div className="relative">
                                <div className="flex items-center gap-2 text-emerald-100 mb-3 sm:mb-4">
                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm uppercase tracking-wide">
                                        Годовая выгода
                                    </span>
                                </div>
                                <motion.div
                                    key={totalYearlySavings}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2"
                                >
                                    +
                                    {totalYearlySavings.toLocaleString("ru-RU", {
                                        maximumFractionDigits: 0,
                                    })}{" "}
                                    ₽
                                </motion.div>
                                <p className="text-emerald-100 text-sm sm:text-base">
                                    За год использования eebook
                                </p>
                            </div>
                        </div>

                        {/* ROI */}
                        <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-xl dark:bg-slate-800 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-5 sm:mb-7">
                                <Percent className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-xs sm:text-sm uppercase tracking-wide">
                                    Возврат инвестиций (ROI)
                                </span>
                            </div>
                            <motion.div
                                key={roi}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 dark:from-emerald-400 dark:to-teal-500"
                            >
                                {roi}%
                            </motion.div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-5 sm:mb-6">
                                На каждый вложенный рубль
                            </p>

                            <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Стоимость подписки
                                    </span>
                                    <span className="text-slate-900 dark:text-slate-200 whitespace-nowrap">
                                        {yearlySubscriptionCost.toLocaleString("ru-RU")}{" "}
                                        ₽/год
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-900 dark:text-slate-200">
                                        Чистая прибыль
                                    </span>
                                    <span className="text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                                        +
                                        {netProfit.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl border border-slate-700 dark:from-slate-800 dark:to-slate-700 dark:border-slate-600">
                            <h4 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">
                                Начните экономить уже сегодня
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base mb-5 sm:mb-6">
                                Первые 30 дней — бесплатно. Отмените в любой момент.
                            </p>
                            <Button
                                typeButton="emerald"
                                className="w-full px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-base"
                                onClick={() => navigate("/register")}
                            >
                                Начать бесплатно
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-10 sm:mt-12 max-w-3xl mx-auto"
                >
                    * Расчеты основаны на средних показателях наших пользователей.
                    Фактические результаты могут отличаться в зависимости от рыночных
                    условий и индивидуальной стратегии.
                </motion.p>
            </div>
        </section>
    );
}
