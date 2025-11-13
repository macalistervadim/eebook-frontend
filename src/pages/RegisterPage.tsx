"use client";

import { useState } from "react";

import { Eye, EyeOff, Mail, Lock, Chrome, AppleIcon, Linkedin } from "lucide-react";
import Button from "../components/Button.tsx";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });

        async function login({ email, password }: { email; password: string }) {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/v1/users/login/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Ошибка авторизации");
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Ошибка при входе:", error);
            }
        }
        await login({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-100  px-4 py-12">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5  rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5  rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <a href="/" className="inline-block">
                        <h1 className="text-emerald-600  mb-2">eebook</h1>
                    </a>
                    <p className="text-gray-600 ">Войдите в ваш аккаунт</p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50  p-8">
                    <div className="space-y-3 mb-6">
                        <Button
                            typeButton="noBg"
                            py="py-2"
                            px="w-full text-md font-semibold flex items-center justify-center rounded-xl py-3"
                        >
                            <Chrome className="w-5 h-5 mr-3" />
                            Войти через Google
                        </Button>
                        <Button
                            typeButton="noBg"
                            py="py-2"
                            px="w-full text-md font-semibold flex items-center justify-center rounded-xl py-3"
                        >
                            <AppleIcon className="w-5 h-5 mr-3" />
                            Войти через Apple
                        </Button>
                        <Button
                            typeButton="noBg"
                            py="py-2"
                            px="w-full text-md font-semibold flex items-center justify-center rounded-xl py-3"
                        >
                            <Linkedin className="w-5 h-5 mr-3" />
                            Войти через LinkedIn
                        </Button>
                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 "></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 bg-white/80  text-gray-500 ">
                                или используйте email
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="text-gray-700  mb-2 block">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-11 h-12 rounded-xl border w-full border-gray-300  bg-white d focus:border-emerald-500  focus:ring-emerald-500/20"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="text-gray-700  mb-2 block"
                            >
                                Пароль
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-11 pr-11 h-12 rounded-xl border w-full border-gray-300 bg-white  focus:border-emerald-500  focus:ring-emerald-500/20"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 d transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember me & Forgot password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="bg-black"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-gray-600  cursor-pointer select-none"
                                >
                                    Запомнить меня
                                </label>
                            </div>
                            <a
                                href="/forgot-password"
                                className="text-emerald-600 hover:text-emerald-700  transition-colors"
                            >
                                Забыли пароль?
                            </a>
                        </div>

                        <Button
                            typeButton="emerald"
                            rounded="w-full rounded-xl font-medium"
                        >
                            Войти
                        </Button>
                    </form>

                    <p className="text-center mt-6 text-gray-600 ">
                        Нет аккаунта?{" "}
                        <a
                            href="/register"
                            className="text-emerald-600  hover:text-emerald-700  transition-colors"
                        >
                            Зарегистрироваться
                        </a>
                    </p>
                </div>

                {/* Footer text */}
                <p className="text-center mt-8 text-gray-500 ">
                    Продолжая, вы принимаете наши{" "}
                    <a href="/terms" className="text-emerald-600  hover:underline">
                        Условия использования
                    </a>{" "}
                    и{" "}
                    <a href="/privacy" className="text-emerald-600 hover:underline">
                        Политику конфиденциальности
                    </a>
                </p>
            </div>
        </div>
    );
}
