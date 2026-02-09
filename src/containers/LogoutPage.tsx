"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LogOut, CheckCircle2, Loader2, ArrowRight, Shield } from "lucide-react";
import { Card } from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useLogout } from "@/containers/Logout.tsx";
import PortfolioHeader from "@/components/landing/PortfolioHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";

export default function LogoutPage() {
    const logout = useLogout();
    const [step, setStep] = useState<"confirm" | "loading" | "success">("confirm");
    const navigate = useNavigate();

    const handleLogout = () => {
        setStep("loading");
        logout();
        setStep("success");
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-100 dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-900">
            <PortfolioHeader />
            <div className="py-24 max-w-md mx-auto px-6 relative z-10">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h2 className="text-emerald-600 dark:text-emerald-400 mb-2">
                        {step === "confirm" && "Выход из системы"}
                        {step === "loading" && "Выходим..."}
                        {step === "success" && "До встречи!"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {step === "confirm" && "Вы уверены?"}
                        {step === "loading" && "Завершаем сеанс"}
                        {step === "success" && "Вы успешно вышли из системы"}
                    </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8">
                    <AnimatePresence mode="wait">
                        {step === "confirm" && (
                            <motion.div
                                key="confirm"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-500/10 rounded-2xl mx-auto mb-6">
                                    <LogOut className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                                </div>

                                <h3 className="text-xl text-center mb-2 text-gray-900 dark:text-white">
                                    Выйти из аккаунта?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm">
                                    Вы уверены, что хотите завершить сеанс?
                                </p>

                                <div className="space-y-3">
                                    <Button
                                        onClick={handleLogout}
                                        className="w-full h-12 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl shadow-lg shadow-amber-500/30"
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Да, выйти
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => navigate("/dashboard")}
                                        className="w-full h-12 rounded-xl border-gray-300 dark:border-gray-700"
                                    >
                                        Отмена
                                    </Button>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <div className="flex gap-3">
                                        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                                                Безопасность
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                При выходе все активные сессии будут
                                                завершены
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === "loading" && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-6">
                                    <Loader2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-spin" />
                                </div>

                                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                                    Выходим из системы...
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Завершаем активные сессии
                                </p>
                            </motion.div>
                        )}

                        {step === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
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
                                    Вы вышли из системы
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    До скорых встреч!
                                </p>

                                <Button
                                    onClick={() => (window.location.href = "#login")}
                                    className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30"
                                >
                                    Войти снова
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
