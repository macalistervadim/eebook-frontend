"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Mail,
    ArrowRight,
    CheckCircle2,
    Eye,
    EyeOff,
    ArrowLeft,
    Shield,
    Key,
} from "lucide-react";
import { Card } from "@/components/Card.tsx";
import { Input } from "@/components/Input.tsx";
import { Button } from "@/components/Button.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/Label.tsx";

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
        // Simulate API call
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

            // Auto-focus next input
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

    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950  px-4">
            <LandingHeader />
            <div className="w-full max-w-md mt-40 mb-20 ">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        eebook
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Восстановление пароля
                    </p>
                </motion.div>

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
                                          : "bg-slate-300 dark:bg-slate-700"
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
                                            : "bg-slate-300 dark:bg-slate-700"
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {/* Step 1: Email */}
                    {step === "email" && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                </div>

                                <h2 className="text-2xl text-slate-900 dark:text-white text-center mb-2">
                                    Забыли пароль?
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                    Введите email для восстановления доступа
                                </p>

                                <form onSubmit={handleEmailSubmit} className="space-y-6">
                                    <div>
                                        <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            Email
                                        </Label>
                                        <Input
                                            type="email"
                                            placeholder="ivan@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            "Отправка..."
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
                                            className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-center gap-2"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Вернуться ко входу
                                        </a>
                                    </div>
                                </form>
                            </Card>
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
                            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-2xl mx-auto mb-6">
                                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>

                                <h2 className="text-2xl text-slate-900 dark:text-white text-center mb-2">
                                    Проверьте почту
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                    Мы отправили код на <strong>{email}</strong>
                                </p>

                                <form onSubmit={handleCodeSubmit} className="space-y-6">
                                    <div>
                                        <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-3 text-center">
                                            Введите 6-значный код
                                        </Label>
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
                                                    className="w-12 h-14 text-center text-2xl rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                                        disabled={isLoading || code.some((d) => !d)}
                                    >
                                        {isLoading ? (
                                            "Проверка..."
                                        ) : (
                                            <>
                                                Подтвердить
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                                        Не получили код?{" "}
                                        <button className="text-emerald-600 dark:text-emerald-400 hover:underline">
                                            Отправить снова
                                        </button>
                                    </div>
                                </form>
                            </Card>
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
                            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-500/10 rounded-2xl mx-auto mb-6">
                                    <Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                </div>

                                <h2 className="text-2xl text-slate-900 dark:text-white text-center mb-2">
                                    Новый пароль
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                    Создайте надежный пароль для вашего аккаунта
                                </p>

                                <form
                                    onSubmit={handlePasswordSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            Новый пароль
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Минимум 8 символов"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                                className="pr-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
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
                                    </div>

                                    <div>
                                        <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            Подтвердите пароль
                                        </Label>
                                        <div className="relative">
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
                                            password !== confirmPassword && (
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
                                            !password ||
                                            !confirmPassword ||
                                            password !== confirmPassword ||
                                            passwordStrength() < 50
                                        }
                                    >
                                        {isLoading ? (
                                            "Сохранение..."
                                        ) : (
                                            <>
                                                Сохранить пароль
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    )}

                    {/* Step 4: Success */}
                    {step === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
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
                                    Теперь вы можете войти с новым паролем
                                </p>

                                <Button
                                    onClick={() => navigate("/login")}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                                >
                                    Войти в аккаунт
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </section>
    );
}
