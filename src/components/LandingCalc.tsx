"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { JSX } from "react";
import { TrendingUp, Percent, Sparkles } from "lucide-react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import Button from "./Button.tsx";
import Badge from "./Badge.tsx";

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

    return (
        <section
            className="py-32 bg-gradient-to-b from-white
        to-slate-50 relative overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-96 h-96
                 bg-emerald-100 rounded-full blur-3xl opacity-20"
                />
                <div
                    className="absolute bottom-1/4 right-0 w-96 h-96
                 bg-teal-100 rounded-full blur-3xl opacity-20"
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
                    <Badge>Калькулятор выгоды</Badge>
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900">
                        Посчитайте вашу выгоду
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Узнайте, сколько вы сможете сэкономить и заработать дополнительно,
                        используя eebook для управления портфелем.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="p-8 md:p-12 bg-white border border-slate-200
                        rounded-3xl shadow-2xl flex flex-col gap-6"
                        >
                            <h3 className="text-2xl mb-8 text-slate-900">
                                Ваши параметры
                            </h3>

                            <div className="mb-10">
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-slate-700">
                                        Размер портфеля
                                    </label>
                                    <div
                                        className="flex items-center gap-2 px-4 py-2
                                    bg-gradient-to-br from-emerald-50 to-teal-50
                                    rounded-xl border border-emerald-100"
                                    >
                                        <span className="text-xl text-emerald-700">
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
                                    <SliderPrimitive.Track
                                        className="bg-slate-200
                                    relative grow rounded-full h-1.5"
                                    >
                                        <SliderPrimitive.Range
                                            className="absolute h-full
                                        bg-gradient-to-r from-emerald-500 to-teal-500"
                                        />
                                    </SliderPrimitive.Track>
                                    <SliderPrimitive.Thumb
                                        className="block w-5 h-5
                                    bg-white border-2 border-emerald-500 rounded-full
                                     shadow-sm"
                                    />
                                </SliderPrimitive.Root>

                                <div
                                    className="flex justify-between text-xs
                                text-slate-500 mt-2"
                                >
                                    <span>100 тыс ₽</span>
                                    <span>10 млн ₽</span>
                                </div>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-slate-700">
                                        Сделок в месяц
                                    </label>
                                    <div
                                        className="px-4 py-2 bg-gradient-to-br from-slate-50
                                     to-slate-100 rounded-xl border border-slate-200"
                                    >
                                        <span className="text-xl text-slate-900">
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
                                    className="relative flex w-full touch-none
                                    select-none items-center h-5"
                                >
                                    <SliderPrimitive.Track
                                        className="bg-slate-200
                                    relative grow rounded-full h-1.5"
                                    >
                                        <SliderPrimitive.Range
                                            className="absolute h-full
                                        bg-gradient-to-r from-emerald-500 to-teal-500"
                                        />
                                    </SliderPrimitive.Track>
                                    <SliderPrimitive.Thumb
                                        className="block w-5 h-5
                                    bg-white border-2 border-emerald-500
                                    rounded-full shadow-sm"
                                    />
                                </SliderPrimitive.Root>
                                <div
                                    className="flex justify-between text-xs
                                text-slate-500 mt-2"
                                >
                                    <span>1 сделка</span>
                                    <span>100 сделок</span>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className="space-y-4 pt-6 border-t border-slate-200">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Налоговая оптимизация
                                    </span>
                                    <span className="text-slate-900">
                                        +
                                        {taxOptimization.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Экономия на комиссиях
                                    </span>
                                    <span className="text-slate-900">
                                        +
                                        {feeSavings.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Доп. доходность от AI
                                    </span>
                                    <span className="text-slate-900">
                                        +
                                        {aiPredictionBoost.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Автоматическая ребалансировка
                                    </span>
                                    <span className="text-slate-900">
                                        +
                                        {rebalancingGain.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div
                            className="relative p-8 md:p-12 bg-gradient-to-br
                        from-emerald-600 via-emerald-500 to-teal-500 rounded-3xl
                        shadow-2xl shadow-emerald-500/50 overflow-hidden"
                        >
                            <div
                                className="absolute inset-0
                            bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]"
                            />
                            <div className="relative">
                                <div className="flex items-center gap-2 text-emerald-100 mb-4">
                                    <TrendingUp className="w-5 h-5" />
                                    <span className="text-sm uppercase tracking-wide">
                                        Годовая выгода
                                    </span>
                                </div>
                                <motion.div
                                    key={totalYearlySavings}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-6xl md:text-7xl text-white mb-2"
                                >
                                    +
                                    {totalYearlySavings.toLocaleString("ru-RU", {
                                        maximumFractionDigits: 0,
                                    })}{" "}
                                    ₽
                                </motion.div>
                                <p className="text-emerald-100">
                                    За год использования eebook
                                </p>
                            </div>
                        </div>

                        <div
                            className="p-8 bg-white  border-slate-200
                         rounded-3xl shadow-xl"
                        >
                            <div className="flex items-center gap-2 text-slate-600  mb-4">
                                <Percent className="w-5 h-5" />
                                <span className="text-sm uppercase tracking-wide">
                                    Возврат инвестиций (ROI)
                                </span>
                            </div>
                            <motion.div
                                key={roi}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-5xl md:text-6xl bg-gradient-to-r
                                from-emerald-600 to-teal-600 bg-clip-text
                                 text-transparent mb-2"
                            >
                                {roi}%
                            </motion.div>
                            <p className="text-slate-600  mb-6">
                                На каждый вложенный рубль
                            </p>

                            <div className="pt-6 border-t border-slate-200 space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600 ">
                                        Стоимость подписки
                                    </span>
                                    <span className="text-slate-900 ">
                                        {yearlySubscriptionCost.toLocaleString("ru-RU")}{" "}
                                        ₽/год
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-900 ">
                                        Чистая прибыль
                                    </span>
                                    <span className="text-2xl text-emerald-600 ">
                                        +
                                        {netProfit.toLocaleString("ru-RU", {
                                            maximumFractionDigits: 0,
                                        })}{" "}
                                        ₽
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="p-8 bg-gradient-to-br from-slate-900
                        to-slate-800  border-slate-700 rounded-3xl"
                        >
                            <h4 className="text-xl text-white mb-4">
                                Начните экономить уже сегодня
                            </h4>
                            <p className="text-slate-300 mb-6">
                                Первые 30 дней — бесплатно. Отмените в любой момент.
                            </p>
                            <Button
                                typeButton="emerald"
                                px="px-3"
                                py="py-2"
                                rounded="rounded-xl"
                            >
                                Начать бесплатно
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-sm text-slate-500
                    dark:text-slate-400 mt-12 max-w-3xl mx-auto"
                >
                    * Расчеты основаны на средних показателях наших пользователей.
                    Фактические результаты могут отличаться в зависимости от рыночных
                    условий и индивидуальной стратегии.
                </motion.p>
            </div>
        </section>
    );
}
