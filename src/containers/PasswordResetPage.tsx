"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Mail,
    ArrowRight,
    CheckCircle2,
    Lock,
    Eye,
    EyeOff,
    ArrowLeft,
    Shield,
    Key,
    XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";

export default function PasswordResetPage() {
    const [step, setStep] = useState<"email" | "code" | "newPassword" | "success">(
        "email"
    );
    const [email, setEmail] = useState("");
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep("code");
        }, 1500);
    };

    const handleCodeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep("newPassword");
        }, 1500);
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep("success");
        }, 1500);
    };

    const handleCodeChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                const nextInput = document.getElementById(`code-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            prevInput?.focus();
        }
    };

    const passwordStrength = () => {
        if (!password) return 0;
        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
        if (/\d/.test(password)) strength += 25;
        if (/[!@#$%^&*]/.test(password)) strength += 25;
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

    return (
        <section className="bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-100 dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-900">
            <LandingHeader />

            <div className="max-w-md py-50 mx-auto px-6 relative z-10">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h2 className="text-emerald-600 dark:text-emerald-400 mb-2">
                        Восстановление пароля
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {step === "email" && "Введите ваш email"}
                        {step === "code" && "Проверьте почту"}
                        {step === "newPassword" && "Создайте новый пароль"}
                        {step === "success" && "Пароль изменен!"}
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    {["email", "code", "newPassword", "success"].map((s, index) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={`w-2 h-2 rounded-full transition-all ${
                                    step === s
                                        ? "bg-emerald-600 w-8"
                                        : [
                                                "email",
                                                "code",
                                                "newPassword",
                                                "success",
                                            ].indexOf(step) > index
                                          ? "bg-emerald-600"
                                          : "bg-gray-300 dark:bg-gray-700"
                                }`}
                            />
                            {index < 3 && (
                                <div
                                    className={`w-8 h-0.5 mx-1 ${
                                        [
                                            "email",
                                            "code",
                                            "newPassword",
                                            "success",
                                        ].indexOf(step) > index
                                            ? "bg-emerald-600"
                                            : "bg-gray-300 dark:bg-gray-700"
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Email */}
                        {step === "email" && (
                            <motion.div
                                key="email"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                </div>

                                <h3 className="text-xl text-center mb-6 text-gray-900 dark:text-white">
                                    Забыли пароль?
                                </h3>

                                <form onSubmit={handleEmailSubmit} className="space-y-5">
                                    <div>
                                        <Label
                                            htmlFor="reset-email"
                                            className="text-gray-700 dark:text-gray-300 mb-2 block"
                                        >
                                            Email
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <Input
                                                id="reset-email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="pl-11 h-12 rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isLoading || !email}
                                        className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30 transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Отправка...
                                            </div>
                                        ) : (
                                            <>
                                                Отправить код
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <div className="text-center">
                                        <a
                                            href="#login"
                                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Вернуться ко входу
                                        </a>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 2: Verification Code */}
                        {step === "code" && (
                            <motion.div
                                key="code"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-2xl mx-auto mb-6">
                                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>

                                <h3 className="text-xl text-center mb-2 text-gray-900 dark:text-white">
                                    Проверьте почту
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
                                    Мы отправили код на <strong>{email}</strong>
                                </p>

                                <form onSubmit={handleCodeSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-3 text-center">
                                            Введите 6-значный код
                                        </label>
                                        <div className="flex gap-2 justify-center">
                                            {code.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    id={`code-${index}`}
                                                    type="text"
                                                    maxLength={1}
                                                    value={digit}
                                                    onChange={(e) =>
                                                        handleCodeChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyDown={(e) =>
                                                        handleCodeKeyDown(index, e)
                                                    }
                                                    className="w-12 h-14 text-center text-2xl rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30"
                                        disabled={isLoading || code.some((d) => !d)}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Проверка...
                                            </div>
                                        ) : (
                                            <>
                                                Подтвердить
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                                        Не получили код?{" "}
                                        <button className="text-emerald-600 dark:text-emerald-400 hover:underline">
                                            Отправить снова
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 3: New Password */}
                        {step === "newPassword" && (
                            <motion.div
                                key="newPassword"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-500/10 rounded-2xl mx-auto mb-6">
                                    <Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>

                                <h3 className="text-xl text-center mb-2 text-gray-900 dark:text-white">
                                    Новый пароль
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
                                    Создайте надежный пароль для вашего аккаунта
                                </p>

                                <form
                                    onSubmit={handlePasswordSubmit}
                                    className="space-y-5"
                                >
                                    <div>
                                        <Label className="text-gray-700 dark:text-gray-300 mb-2 block">
                                            Новый пароль
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Минимум 8 символов"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                                className="pl-11 pr-11 h-12 rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>

                                        {password && (
                                            <div className="mt-3">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        Надежность пароля
                                                    </span>
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        {getPasswordStrengthText()}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all ${getPasswordStrengthColor()}`}
                                                        style={{
                                                            width: `${passwordStrength()}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <Label className="text-gray-700 dark:text-gray-300 mb-2 block">
                                            Подтвердите пароль
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <Input
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Повторите пароль"
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(e.target.value)
                                                }
                                                required
                                                className="pl-11 pr-11 h-12 rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    )
                                                }
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="w-5 h-5" />
                                                ) : (
                                                    <Eye className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                        {confirmPassword &&
                                            password !== confirmPassword && (
                                                <p className="text-sm text-red-600 dark:text-red-400 mt-2 flex items-center gap-1">
                                                    <XCircle className="w-4 h-4" />
                                                    Пароли не совпадают
                                                </p>
                                            )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30"
                                        disabled={
                                            isLoading ||
                                            !password ||
                                            !confirmPassword ||
                                            password !== confirmPassword ||
                                            passwordStrength() < 50
                                        }
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Сохранение...
                                            </div>
                                        ) : (
                                            <>
                                                Сохранить пароль
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 4: Success */}
                        {step === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full mx-auto mb-6"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                                </motion.div>

                                <h3 className="text-2xl text-gray-900 dark:text-white mb-2">
                                    Пароль изменен!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    Теперь вы можете войти с новым паролем
                                </p>

                                <Button
                                    onClick={() => (window.location.href = "#login")}
                                    className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30"
                                >
                                    Войти в аккаунт
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </section>
    );
}
