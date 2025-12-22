"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Chrome,
    Apple as AppleIcon,
    Linkedin,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { Button } from "../components/ui/Button.tsx";
import { Checkbox } from "@/components/ui/Checkbox.tsx";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { loginRequest } from "@/api/authApi.ts";
import { useAuth } from "@/utils/auth/AuthProvider.tsx";
import { Input } from "@/components/ui/Input.tsx";
import { Label } from "@/components/ui/Label.tsx";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loginError, setLoginError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (value: string) => {
        if (!value) {
            setEmailError("");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Некорректный email адрес");
        } else {
            setEmailError("");
        }
    };

    const handleSocialLogin = (provider: string) => {
        console.log("Login with", provider);
    };

    const isEmailValid = email && !emailError;
    const navigate = useNavigate();
    const { setAccessToken } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        const token = await loginRequest(email, password);
        if (!token) {
            setLoginError("Неверный логин или пароль");
            return;
        }

        setAccessToken(token);
        navigate("/dashboard");
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-100 dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-900">
            <LandingHeader />

            <div className="w-full max-w-md relative z-10 mt-40 mb-40">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-emerald-600 dark:text-emerald-400 mb-2">
                            Вход
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Войдите в ваш аккаунт
                        </p>
                    </div>
                </motion.div>

                {/* Форма */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8">
                        {/* Ошибка */}
                        <motion.div
                            animate={{ opacity: loginError ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                            className={`mb-6 ${loginError ? "block" : "hidden"}`}
                        >
                            {loginError && (
                                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                                    <div>
                                        <div className="text-red-900 dark:text-red-200 mb-1">
                                            Ошибка входа
                                        </div>
                                        <div className="text-red-700 dark:text-red-300">
                                            {loginError}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        <div className="space-y-3 mb-6">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-300 dark:border-gray-700 flex items-center justify-center"
                                onClick={() => handleSocialLogin("Google")}
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Войти через Google
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-300 dark:border-gray-700 flex items-center justify-center"
                                onClick={() => handleSocialLogin("Apple")}
                            >
                                <AppleIcon className="w-5 h-5 mr-2" />
                                Войти через Apple
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-300 dark:border-gray-700 flex items-center justify-center"
                                onClick={() => handleSocialLogin("LinkedIn")}
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                Войти через LinkedIn
                            </Button>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 bg-white/80 dark:bg-gray-900/80 text-gray-500 dark:text-gray-400">
                                    или используйте email
                                </span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <Label className="text-gray-700 dark:text-gray-300 mb-2 block">
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            validateEmail(e.target.value);
                                        }}
                                        onBlur={(e) => validateEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className={`outline-none border w-full pl-11 pr-11 h-12 rounded-xl transition-all
                      ${
                          emailError
                              ? "border-red-500 focus:border-red-500"
                              : isEmailValid
                                ? "border-emerald-500 focus:border-emerald-500"
                                : "border-gray-300 dark:border-gray-700"
                      }`}
                                        required
                                    />
                                    {email && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {emailError ? (
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            ) : isEmailValid ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                            ) : null}
                                        </div>
                                    )}
                                </div>
                                {emailError && (
                                    <p className="text-red-600 dark:text-red-400 mt-2 flex items-center gap-1">
                                        <XCircle className="w-4 h-4" /> {emailError}
                                    </p>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <Label className="text-gray-700 dark:text-gray-300 mb-2 block">
                                    Пароль
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="outline-none border w-full pl-11 pr-11 h-12 rounded-xl border-gray-300 dark:border-gray-700 focus:border-emerald-500"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                            </div>

                            {/* REMEMBER */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="login-remember" />
                                    <Label
                                        htmlFor="login-remember"
                                        className="text-gray-600 dark:text-gray-400 cursor-pointer select-none"
                                    >
                                        Запомнить меня
                                    </Label>
                                </div>
                                <Link
                                    to="/password-reset"
                                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                                >
                                    Забыли пароль?
                                </Link>
                            </div>

                            {/* BUTTON — with spinner */}
                            <Button
                                type="submit"
                                variant="default"
                                size="lg"
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg transition-all  shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Вход...
                                    </div>
                                ) : (
                                    "Войти"
                                )}
                            </Button>
                        </form>

                        {/* Sign up */}
                        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
                            Нет аккаунта?{" "}
                            <Link
                                to="/register"
                                className="text-emerald-600 dark:text-emerald-400"
                            >
                                Зарегистрироваться
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
