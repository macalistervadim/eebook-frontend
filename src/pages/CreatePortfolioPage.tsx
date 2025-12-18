"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    PieChart,
    Target,
    Shield,
    TrendingUp,
    Calendar,
    DollarSign,
    CheckCircle2,
    Zap,
    Award,
    Wallet,
} from "lucide-react";
import { Button } from "@/components/Button.tsx";
import { Progress } from "@/components/Progress.tsx";
import PortfolioHeader from "@/components/PortfolioHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { apiFetch } from "@/auth/apiFetch.ts";
import { Input } from "@/components/Input.tsx";
import { Label } from "@/components/Label.tsx";
import { Textarea } from "@/components/Textarea.tsx";

type RiskProfile = {
    slug: string;
    display_name: string;
    description: string;
    profit_min: number;
    profit_max: number;
    allocation: Record<string, number>;
};

type PortfolioTarget = {
    slug: string;
    display_name: string;
};

type MetaResponse = {
    risk_profiles: RiskProfile[];
    portfolio_targets: PortfolioTarget[];
};

async function fetchCreatePortfolioMeta(): Promise<MetaResponse> {
    const res = await fetch(
        "http://localhost:8080/api/v1/portfolio/meta/create-portfolio",
        { credentials: "include" }
    );

    if (!res.ok) {
        throw new Error("Failed to load portfolio meta");
    }

    return res.json();
}

async function createPortfolio(payload: {
    name: string;
    currency: string;
    description: string;
    initial_investment?: number;
    target: string;
    risk_profile: string;
}) {
    const res = await apiFetch("http://localhost:8080/api/v1/portfolio/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
    }

    return res.json();
}

export default function CreatePortfolioPage() {
    const [step, setStep] = useState(1);
    const [meta, setMeta] = useState<MetaResponse | null>(null);
    const [loadingMeta, setLoadingMeta] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (submitting) return;

        setSubmitting(true);
        setSubmitError(null);

        try {
            await createPortfolio({
                name: formData.name,
                currency: "RUB",
                description: formData.description,
                initial_investment: formData.initialInvestment
                    ? Number(formData.initialInvestment)
                    : undefined,
                target: formData.goal,
                risk_profile: formData.riskProfile,
            });

            // UX
            // например:
            // router.push("/portfolio");
            // или toast.success("Портфель создан")
        } catch (e) {
            setSubmitError("Не удалось создать портфель. Попробуйте позже.");
        } finally {
            setSubmitting(false);
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        goal: "",
        targetAmount: "",
        deadline: "",
        riskProfile: "",
        template: "",
        initialInvestment: "",
    });
    useEffect(() => {
        fetchCreatePortfolioMeta()
            .then(setMeta)
            .finally(() => setLoadingMeta(false));
    }, []);

    if (loadingMeta) {
        return <div className="p-10 text-center">Загрузка...</div>;
    }

    if (!meta) {
        return <div className="p-10 text-center">Ошибка загрузки данных</div>;
    }

    // ---------- UI adapters (НЕ МЕНЯЮТ ДИЗАЙН) ----------

    // иконки строго по slug (как было в хардкоде)
    const RISK_ICONS: Record<string, any> = {
        conservative: Shield,
        moderate: Target,
        aggressive: TrendingUp,
    };

    const GOAL_ICONS: Record<string, any> = {
        pension: Calendar,
        house: Wallet,
        education: Award,
        passive_income: DollarSign,
        capital_growth: TrendingUp,
        other: Target,
    };

    // riskProfiles В ФОРМЕ, КОТОРУЮ ЖДЁТ JSX
    const riskProfiles = meta.risk_profiles.map((p) => ({
        id: p.slug,
        name: p.display_name,
        description: p.description,
        expectedReturn: `${p.profit_min}-${p.profit_max}%`,
        allocation: Object.entries(p.allocation)
            .map(([k, v]) => `${v}% ${k}`)
            .join(", "),
        icon: RISK_ICONS[p.slug] ?? Shield,
    }));

    // investmentGoals В ФОРМЕ, КОТОРУЮ ЖДЁТ JSX
    const investmentGoals = meta.portfolio_targets.map((t) => ({
        id: t.slug,
        name: t.display_name,
        icon: GOAL_ICONS[t.slug] ?? Target,
    }));

    const progress = (step / 4) * 100;

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <PortfolioHeader />
            <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <Button
                            type="button"
                            variant="ghost"
                            className="rounded-xl px-3 py-2 flex items-center"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Назад
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
                            <PieChart className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-slate-900 dark:text-white">
                                Создание нового портфеля
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Шаг {step} из 4 •{" "}
                                {
                                    ["Основная информация", "Цель", "Риск-профиль"][
                                        step - 1
                                    ]
                                }
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <Progress value={progress} className="h-2 mb-4" />
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((s) => (
                                <div
                                    key={s}
                                    className={`text-center text-sm ${
                                        step >= s
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-slate-400 dark:text-slate-500"
                                    }`}
                                >
                                    <div className="flex items-center justify-center mb-1">
                                        {step > s ? (
                                            <CheckCircle2 className="w-5 h-5" />
                                        ) : (
                                            <div
                                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs ${
                                                    step === s
                                                        ? "border-emerald-600 dark:border-emerald-400 bg-emerald-600 dark:bg-emerald-400 text-white"
                                                        : "border-slate-300 dark:border-slate-600"
                                                }`}
                                            >
                                                {s}
                                            </div>
                                        )}
                                    </div>
                                    <p className="hidden md:block">
                                        {
                                            ["Информация", "Цель", "Риск", "Завершение"][
                                                s - 1
                                            ]
                                        }
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Steps */}
                <AnimatePresence mode="wait">
                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <h2 className="text-slate-900 dark:text-white mb-6">
                                    Основная информация
                                </h2>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Название портфеля *</Label>
                                        <Input
                                            id="name"
                                            placeholder="Например: Основной портфель"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="border w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Выберите запоминающееся название для вашего
                                            портфеля
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Описание *</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Опишите стратегию и цели портфеля..."
                                            value={formData.description}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value,
                                                })
                                            }
                                            className="rounded-xl p-3 w-full border bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700 min-h-[120px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="initialInvestment">
                                            Первоначальные инвестиции (необязательно)
                                        </Label>
                                        <Input
                                            id="initialInvestment"
                                            type="number"
                                            placeholder="₽ 0"
                                            value={formData.initialInvestment}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    initialInvestment: e.target.value,
                                                })
                                            }
                                            className="rounded-xl p-3 w-full border bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Goal */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <h2 className="text-slate-900 dark:text-white mb-6">
                                    Выберите инвестиционную цель
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {investmentGoals.map((goal) => {
                                        const Icon = goal.icon;
                                        const isSelected = formData.goal === goal.id;
                                        return (
                                            <button
                                                key={goal.id}
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        goal: goal.id,
                                                    })
                                                }
                                                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                                                    isSelected
                                                        ? "border-emerald-600 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                                                        : "border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 bg-slate-50 dark:bg-slate-900/30"
                                                }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`p-3 rounded-xl ${
                                                            isSelected
                                                                ? "bg-emerald-600 text-white"
                                                                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                                                        }`}
                                                    >
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-slate-900 dark:text-white mb-1">
                                                            {goal.name}
                                                        </h3>
                                                        {isSelected && (
                                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Risk Profile */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <h2 className="text-slate-900 dark:text-white mb-2">
                                    Выберите риск-профиль
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Выберите уровень риска, комфортный для вас
                                </p>
                                <div className="space-y-4">
                                    {riskProfiles.map((profile) => {
                                        const Icon = profile.icon;
                                        const isSelected =
                                            formData.riskProfile === profile.id;
                                        return (
                                            <button
                                                key={profile.id}
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        riskProfile: profile.id,
                                                    })
                                                }
                                                className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                                                    isSelected
                                                        ? "border-emerald-600 dark:border-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20"
                                                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900/30"
                                                }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`p-3 rounded-xl ${
                                                            isSelected
                                                                ? "bg-emerald-600 text-white"
                                                                : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                                        }`}
                                                    >
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h3 className="text-slate-900 dark:text-white">
                                                                {profile.name}
                                                            </h3>
                                                            {isSelected && (
                                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                            {profile.description}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                                            <div>
                                                                <p className="text-slate-500 dark:text-slate-400 mb-1">
                                                                    Ожидаемая доходность
                                                                </p>
                                                                <p className="text-emerald-600 dark:text-emerald-400">
                                                                    {
                                                                        profile.expectedReturn
                                                                    }{" "}
                                                                    в год
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-slate-500 dark:text-slate-400 mb-1">
                                                                    Рекомендуемое
                                                                    распределение
                                                                </p>
                                                                <p className="text-slate-900 dark:text-white">
                                                                    {profile.allocation}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="border rounded-xl p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-emerald-600 rounded-xl">
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white mb-2">
                                            Готовы создать портфель?
                                        </h3>
                                        <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                            <p>
                                                • Название:{" "}
                                                <strong>{formData.name}</strong>
                                            </p>
                                            <p>
                                                • Цель:{" "}
                                                <strong>
                                                    {
                                                        investmentGoals.find(
                                                            (g) => g.id === formData.goal
                                                        )?.name
                                                    }
                                                </strong>
                                            </p>
                                            <p>
                                                • Риск-профиль:{" "}
                                                <strong>
                                                    {
                                                        riskProfiles.find(
                                                            (r) =>
                                                                r.id ===
                                                                formData.riskProfile
                                                        )?.name
                                                    }
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between"
                >
                    <Button
                        type="button"
                        variant="outline"
                        className="rounded-xl px-3 py-2 flex items-center border-slate-300 dark:border-slate-700"
                        onClick={handleBack}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Назад
                    </Button>

                    {step < 4 ? (
                        <Button
                            type="button"
                            variant="default"
                            className="rounded-xl px-3 py-2 flex items-center bg-emerald-600 hover:bg-emerald-700 text-white"
                            onClick={handleNext}
                        >
                            Далее
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            variant="default"
                            onClick={handleSubmit}
                            className="rounded-xl px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 disabled:opacity-60"
                        >
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            {submitting ? "Создание..." : "Создать портфель"}
                        </Button>
                    )}
                </motion.div>
                <div>
                    {submitError && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-3 text-center">
                            {submitError}
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
