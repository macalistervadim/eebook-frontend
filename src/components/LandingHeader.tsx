import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import Button from "./Button";
import { motion } from "motion/react";
import { useTheme } from "@/components/ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function LandingHeader() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
                           bg-white/80 dark:bg-slate-900/80
                           border-b border-slate-200 dark:border-slate-700"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                <Link
                    to="/"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600
                              bg-clip-text text-2xl text-transparent"
                >
                    eebook
                </Link>
                {/* Desktop nav */}
                <ul className="hidden gap-8 text-md md:flex">
                    <li>
                        <HashLink
                            smooth
                            to="/#comparsion"
                            className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                        >
                            Функции
                        </HashLink>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                        >
                            О нас
                        </Link>
                    </li>
                    <li>
                        <HashLink
                            smooth
                            to="/#price"
                            className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                        >
                            Цены
                        </HashLink>
                    </li>
                    <li>
                        <a className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer">
                            Документация
                        </a>
                    </li>
                </ul>
                {/* Desktop buttons */}
                <div className="hidden items-center justify-center gap-6 text-sm md:flex">
                    <button
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800
                                   hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        )}
                    </button>

                    <Button
                        typeButton="ghost"
                        className="px-3 py-2 cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Войти
                    </Button>
                    <Button
                        typeButton="emerald"
                        className="px-3 py-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/register")}
                    >
                        Начать бесплатно
                    </Button>
                </div>
                {/* Mobile */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button className="p-2 md:hidden">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="left" className="w-64 p-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-6 mt-6"
                        >
                            <ul className="flex flex-col gap-4 text-lg">
                                <li>
                                    <HashLink
                                        smooth
                                        to="/#comparsion"
                                        className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                                    >
                                        Функции
                                    </HashLink>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                                    >
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <HashLink
                                        smooth
                                        to="/#price"
                                        className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                                    >
                                        Цены
                                    </HashLink>
                                </li>
                                <li>
                                    <a className="text-slate-900 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white cursor-pointer">
                                        Документация
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-3 pt-4 border-t">
                                <Button
                                    typeButton="noBg"
                                    onClick={() => navigate("/login")}
                                    className="px-2 py-2 rounded-xl"
                                >
                                    Войти
                                </Button>
                                <Button
                                    typeButton="emerald"
                                    onClick={() => navigate("/register")}
                                    className="px-2 py-2 rounded-xl"
                                >
                                    Начать бесплатно
                                </Button>
                            </div>
                        </motion.div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
