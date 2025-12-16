import { useLogout } from "@/components/Logout.tsx";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LogOut, CheckCircle2, Loader2, ArrowRight, Shield } from "lucide-react";
import Button from "@/components/Button.tsx";
import { useNavigate } from "react-router-dom";

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
                </motion.div>

                {step === "confirm" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-500/10 rounded-2xl mx-auto mb-6">
                                <LogOut className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                            </div>

                            <h2 className="text-2xl text-slate-900 dark:text-white text-center mb-2">
                                Выйти из аккаунта?
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
                                Вы уверены, что хотите завершить сеанс?
                            </p>

                            <div className="space-y-3">
                                <Button
                                    typeButton="emerald"
                                    onClick={handleLogout}
                                    className="rounded-xl  w-full bg-amber-600 hover:bg-amber-700 h-12"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Да, выйти
                                </Button>

                                <Button
                                    typeButton="noBg"
                                    onClick={() => navigate("/dashboard")}
                                    className="rounded-xl w-full h-12"
                                >
                                    Отмена
                                </Button>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                <div className="flex gap-3">
                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">
                                            Безопасность
                                        </p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">
                                            При выходе все активные сессии будут завершены
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === "loading" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-900/50 rounded-full mx-auto mb-6">
                                <Loader2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-spin" />
                            </div>

                            <h2 className="text-2xl text-slate-900 dark:text-white mb-2">
                                Выходим из системы...
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Завершаем активные сессии
                            </p>
                        </div>
                    </motion.div>
                )}

                {step === "success" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="border rounded-xl p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full mx-auto mb-6"
                            >
                                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                            </motion.div>

                            <h2 className="text-2xl text-slate-900 dark:text-white mb-2">
                                Вы вышли из системы
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                До скорых встреч!
                            </p>

                            <Button
                                typeButton="emerald"
                                onClick={() => navigate("/login")}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 h-12"
                            >
                                Войти снова
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
