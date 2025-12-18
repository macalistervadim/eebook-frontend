"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Lock, Eye, EyeOff, CheckCircle2, Shield, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card } from "../components/Card";
import { Label } from "@/components/Label.tsx";

export default function ChangePasswordPage() {
    const [step, setStep] = useState<"form" | "success">("form");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const passwordStrength = () => {
        if (!newPassword) return 0;
        let strength = 0;
        if (newPassword.length >= 8) strength += 25;
        if (/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword)) strength += 25;
        if (/\d/.test(newPassword)) strength += 25;
        if (/[!@#$%^&*]/.test(newPassword)) strength += 25;
        return strength;
    };

    const getPasswordStrengthColor = () => {
        const strength = passwordStrength();
        if (strength < 50) return "bg-red-500";
        if (strength < 75) return "bg-amber-500";
        return "bg-emerald-500";
    };

    const getPasswordStrengthText = () => {
        const strength = passwordStrength();
        if (strength < 50) return "Слабый";
        if (strength < 75) return "Средний";
        return "Надежный";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            // Check if current password is correct (mock)
            if (currentPassword !== "oldpassword") {
                setError("Неверный текущий пароль");
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            setStep("success");
        }, 1500);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        eebook
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">Смена пароля</p>
                </motion.div>

                {step === "form" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl mx-auto mb-6">
                                <Lock className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                            </div>

                            <h2 className="text-2xl text-slate-900 dark:text-white text-center mb-2">
                                Изменить пароль
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                Создайте новый надежный пароль
                            </p>

                            {error && (
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-700 dark:text-red-400">
                                        {error}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Current Password */}
                                <div>
                                    <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                        Текущий пароль
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            type={
                                                showCurrentPassword ? "text" : "password"
                                            }
                                            placeholder="Введите текущий пароль"
                                            value={currentPassword}
                                            onChange={(e) =>
                                                setCurrentPassword(e.target.value)
                                            }
                                            required
                                            className="pr-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowCurrentPassword(
                                                    !showCurrentPassword
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                        >
                                            {showCurrentPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* New Password */}
                                <div>
                                    <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                        Новый пароль
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="Минимум 8 символов"
                                            value={newPassword}
                                            onChange={(e) =>
                                                setNewPassword(e.target.value)
                                            }
                                            required
                                            className="pr-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowNewPassword(!showNewPassword)
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>

                                    {newPassword && (
                                        <div className="mt-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-slate-600 dark:text-slate-400">
                                                    Надежность пароля
                                                </span>
                                                <span className="text-xs text-slate-600 dark:text-slate-400">
                                                    {getPasswordStrengthText()}
                                                </span>
                                            </div>
                                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full transition-all ${getPasswordStrengthColor()}`}
                                                    style={{
                                                        width: `${passwordStrength()}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Password Requirements */}
                                    <div className="mt-4 space-y-2">
                                        {[
                                            {
                                                text: "Минимум 8 символов",
                                                valid: newPassword.length >= 8,
                                            },
                                            {
                                                text: "Заглавные и строчные буквы",
                                                valid:
                                                    /[a-z]/.test(newPassword) &&
                                                    /[A-Z]/.test(newPassword),
                                            },
                                            {
                                                text: "Минимум одна цифра",
                                                valid: /\d/.test(newPassword),
                                            },
                                            {
                                                text: "Специальный символ",
                                                valid: /[!@#$%^&*]/.test(newPassword),
                                            },
                                        ].map((req, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${req.valid ? "bg-emerald-100 dark:bg-emerald-500/10" : "bg-slate-100 dark:bg-slate-800"}`}
                                                >
                                                    {req.valid && (
                                                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-xs ${req.valid ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}
                                                >
                                                    {req.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                        Подтвердите пароль
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            type={
                                                showConfirmPassword ? "text" : "password"
                                            }
                                            placeholder="Повторите новый пароль"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(e.target.value)
                                            }
                                            required
                                            className="pr-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                    {confirmPassword &&
                                        newPassword !== confirmPassword && (
                                            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                                                Пароли не совпадают
                                            </p>
                                        )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                                    disabled={
                                        isLoading ||
                                        !currentPassword ||
                                        !newPassword ||
                                        !confirmPassword ||
                                        newPassword !== confirmPassword ||
                                        passwordStrength() < 50
                                    }
                                >
                                    {isLoading ? "Сохранение..." : "Изменить пароль"}
                                </Button>
                            </form>

                            {/* Security Notice */}
                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                <div className="flex gap-3">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">
                                            Безопасность
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            После смены пароля вы будете автоматически
                                            выведены из всех устройств
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {step === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full mx-auto mb-6"
                            >
                                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                            </motion.div>

                            <h2 className="text-2xl text-slate-900 dark:text-white mb-2">
                                Пароль изменен!
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Ваш пароль успешно обновлен. Используйте новый пароль при
                                следующем входе.
                            </p>

                            <div className="space-y-3">
                                <Button
                                    onClick={() => (window.location.href = "#profile")}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                                >
                                    Вернуться в профиль
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => (window.location.href = "#logout")}
                                    className="w-full h-12"
                                >
                                    Выйти из аккаунта
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
