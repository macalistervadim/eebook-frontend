"use client";

import { useState } from "react";
import { Button } from "../ui/Button.tsx";
import { Input } from "../ui/Input.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar.tsx";
import {
    Bell,
    Search,
    Settings,
    Moon,
    Sun,
    ChevronDown,
    Menu,
    X,
    LayoutDashboard,
    PieChart,
    TrendingUp,
    FileText,
    Wallet,
    ArrowLeftRight,
    Calendar,
    Target,
    Lightbulb,
    BarChart3,
    Gauge,
    Layers,
    Download,
    FileBarChart,
    FileSpreadsheet,
    Sparkles,
    Check,
    FolderOpen,
} from "lucide-react";
import { useTheme } from "../../utils/ThemeProvider.tsx";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../ui/Badge.tsx";
import { Link, useNavigate } from "react-router-dom";

const menuItems = {
    portfolios: {
        label: "Портфели",
        icon: PieChart,
        items: [
            { label: "Мои портфели", href: "/portfolio", icon: Wallet },
            { label: "Активы", href: "#portfolios", icon: Wallet },
            { label: "Операции", href: "#transactions", icon: ArrowLeftRight },
            { label: "Календарь выплат", href: "#calendar", icon: Calendar },
            { label: "Цели", href: "#goals", icon: Target },
            { label: "AI Советы", href: "#advice", icon: Lightbulb },
        ],
    },
    analytics: {
        label: "Аналитика",
        icon: TrendingUp,
        items: [
            { label: "Метрики", href: "#analytics-metrics", icon: Gauge },
            { label: "Диверсификация", href: "#analytics-diversification", icon: Layers },
            {
                label: "Производительность",
                href: "#analytics-performance",
                icon: BarChart3,
            },
            { label: "Отчёты", href: "#reports", icon: FileText },
            { label: "Налоговые отчёты", href: "#reports-tax", icon: FileSpreadsheet },
            { label: "Отчёты брокера", href: "#reports-broker", icon: FileBarChart },
            { label: "Экспорт данных", href: "#reports-export", icon: Download },
        ],
    },
};

const mockPortfolios = [
    {
        id: 1,
        name: "Основной портфель",
        value: 850000,
        profit: 18.06,
        color: "emerald",
    },
    {
        id: 2,
        name: "Агрессивный рост",
        value: 320000,
        profit: 24.5,
        color: "purple",
    },
    {
        id: 3,
        name: "Консервативный",
        value: 580000,
        profit: 12.3,
        color: "blue",
    },
    {
        id: 4,
        name: "Дивидендный",
        value: 450000,
        profit: 9.8,
        color: "amber",
    },
];

export default function PortfolioHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();
    const [selectedPortfolio, setSelectedPortfolio] = useState<number | "all">("all");
    const [isPortfolioSelectorOpen, setIsPortfolioSelectorOpen] = useState(false);
    const navigate = useNavigate();

    const handleDropdownToggle = (key: string) => {
        setOpenDropdown(openDropdown === key ? null : key);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-[1600px] mx-auto px-6 py-4">
                <div className="flex items-center justify-between gap-6">
                    {/* Logo & Nav */}
                    <div className="flex items-center gap-8">
                        <Link
                            to="/dashboard"
                            className="text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2"
                        >
                            eebook
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {/* Обзор */}
                            <Link
                                to="/dashboard"
                                className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                            >
                                <LayoutDashboard className="w-4 h-4" />
                                Обзор
                            </Link>

                            {/* AI Помощник */}
                            <a
                                href="#ai-assistant"
                                className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 relative"
                            >
                                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    AI Помощник
                                </span>
                                <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs px-1.5 py-0.5">
                                    NEW
                                </Badge>
                            </a>

                            {/* Портфели */}
                            <div className="relative">
                                <button
                                    onClick={() => handleDropdownToggle("portfolios")}
                                    className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                    <PieChart className="w-4 h-4" />
                                    Портфели
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                            openDropdown === "portfolios"
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openDropdown === "portfolios" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 overflow-hidden"
                                        >
                                            {menuItems.portfolios.items.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        to={item.href}
                                                        className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                                        onClick={() =>
                                                            setOpenDropdown(null)
                                                        }
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                                            <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                        </div>
                                                        <span>{item.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Аналитика */}
                            <div className="relative">
                                <button
                                    onClick={() => handleDropdownToggle("analytics")}
                                    className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                    <TrendingUp className="w-4 h-4" />
                                    Аналитика
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                            openDropdown === "analytics"
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {openDropdown === "analytics" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 overflow-hidden"
                                        >
                                            {menuItems.analytics.items.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <a
                                                        key={item.href}
                                                        href={item.href}
                                                        className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                                        onClick={() =>
                                                            setOpenDropdown(null)
                                                        }
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <span>{item.label}</span>
                                                    </a>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>
                    </div>

                    {/* Search */}
                    <div className="hidden md:flex flex-1 max-w-md">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="text"
                                placeholder="Поиск активов, транзакций..."
                                className="w-full pl-11 pr-4 h-10 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800"
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            ) : (
                                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            )}
                        </button>

                        {/* Notifications */}
                        <button
                            className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => navigate("/notifications")}
                        >
                            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
                        </button>

                        {/* Settings */}
                        <button className="hidden md:block p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <Settings className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </button>

                        <div className="relative hidden md:block">
                            <button
                                onClick={() =>
                                    setIsPortfolioSelectorOpen(!isPortfolioSelectorOpen)
                                }
                                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700"
                            >
                                <PieChart className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="text-sm text-slate-700 dark:text-slate-300 max-w-[120px] truncate">
                                    {selectedPortfolio === "all"
                                        ? "Все портфели"
                                        : mockPortfolios.find(
                                              (p) => p.id === selectedPortfolio
                                          )?.name || "Портфель"}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${
                                        isPortfolioSelectorOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Portfolio Selector Dropdown */}
                            <AnimatePresence>
                                {isPortfolioSelectorOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                                    >
                                        {/* Header */}
                                        <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                                Выбор портфеля
                                            </h3>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                                Аналитика будет показана для выбранного
                                                портфеля
                                            </p>
                                        </div>

                                        {/* All Portfolios Option */}
                                        <div className="py-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedPortfolio("all");
                                                    setIsPortfolioSelectorOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                                                    selectedPortfolio === "all"
                                                        ? "bg-emerald-50 dark:bg-emerald-900/20"
                                                        : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                                        <Layers className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                                                            Все портфели
                                                        </div>
                                                        <div className="text-xs text-slate-500 dark:text-slate-400">
                                                            Агрегированная аналитика
                                                        </div>
                                                    </div>
                                                </div>
                                                {selectedPortfolio === "all" && (
                                                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-slate-200 dark:border-slate-700"></div>

                                        {/* Individual Portfolios */}
                                        <div className="py-2 max-h-80 overflow-y-auto">
                                            {mockPortfolios.map((portfolio) => (
                                                <button
                                                    key={portfolio.id}
                                                    onClick={() => {
                                                        setSelectedPortfolio(
                                                            portfolio.id
                                                        );
                                                        setIsPortfolioSelectorOpen(false);
                                                    }}
                                                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                                                        selectedPortfolio === portfolio.id
                                                            ? "bg-emerald-50 dark:bg-emerald-900/20"
                                                            : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <div
                                                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                                                portfolio.color ===
                                                                "emerald"
                                                                    ? "bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-500/20 dark:to-emerald-500/10"
                                                                    : portfolio.color ===
                                                                        "purple"
                                                                      ? "bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-500/20 dark:to-purple-500/10"
                                                                      : portfolio.color ===
                                                                          "blue"
                                                                        ? "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-500/10"
                                                                        : "bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-500/20 dark:to-amber-500/10"
                                                            }`}
                                                        >
                                                            <PieChart
                                                                className={`w-5 h-5 ${
                                                                    portfolio.color ===
                                                                    "emerald"
                                                                        ? "text-emerald-600 dark:text-emerald-400"
                                                                        : portfolio.color ===
                                                                            "purple"
                                                                          ? "text-purple-600 dark:text-purple-400"
                                                                          : portfolio.color ===
                                                                              "blue"
                                                                            ? "text-blue-600 dark:text-blue-400"
                                                                            : "text-amber-600 dark:text-amber-400"
                                                                }`}
                                                            />
                                                        </div>
                                                        <div className="text-left flex-1 min-w-0">
                                                            <div className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                                                {portfolio.name}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                                <span>
                                                                    ₽
                                                                    {(
                                                                        portfolio.value /
                                                                        1000
                                                                    ).toFixed(0)}
                                                                    K
                                                                </span>
                                                                <span>•</span>
                                                                <span
                                                                    className={
                                                                        portfolio.profit >
                                                                        0
                                                                            ? "text-emerald-600 dark:text-emerald-400"
                                                                            : "text-red-600 dark:text-red-400"
                                                                    }
                                                                >
                                                                    {portfolio.profit > 0
                                                                        ? "+"
                                                                        : ""}
                                                                    {portfolio.profit}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {selectedPortfolio ===
                                                        portfolio.id && (
                                                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Footer - Manage Portfolios */}
                                        <div className="border-t border-slate-200 dark:border-slate-700">
                                            <Link
                                                to="/portfolio"
                                                onClick={() =>
                                                    setIsPortfolioSelectorOpen(false)
                                                }
                                                className="flex items-center gap-3 px-4 py-3 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                                    <FolderOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                                <span className="text-sm font-medium">
                                                    Управление портфелями
                                                </span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Profile */}
                        <div className="relative hidden md:block">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                            >
                                <Avatar className="w-8 h-8 ring-2 ring-emerald-500/20">
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm">
                                        ИИ
                                    </AvatarFallback>
                                </Avatar>
                                <ChevronDown
                                    className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${
                                        isProfileOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {isProfileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                                    >
                                        {/* Profile Header */}
                                        <div className="p-5 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Avatar className="w-14 h-14 ring-2 ring-emerald-500/30">
                                                    <AvatarImage src="" />
                                                    <AvatarFallback className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg">
                                                        ИИ
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="text-slate-900 dark:text-white truncate">
                                                            Иван Иванов
                                                        </p>
                                                        <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 text-xs px-1.5 py-0 h-5">
                                                            PRO
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                                        ivan@email.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-center">
                                                <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                                        Портфели
                                                    </p>
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        3
                                                    </p>
                                                </div>
                                                <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                                        Активы
                                                    </p>
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        35
                                                    </p>
                                                </div>
                                                <div className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50">
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                                        Доход
                                                    </p>
                                                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                                                        +18%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="py-2">
                                            <Link
                                                to="/profile"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        Мой профиль
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                                        Настройки аккаунта
                                                    </p>
                                                </div>
                                            </Link>
                                            <a
                                                href="#settings"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        Настройки
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                                        Безопасность и уведомления
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#notifications"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        Уведомления
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                                        3 новых
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="#support"
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                <div className="flex-1">
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        Помощь
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                                        Поддержка 24/7
                                                    </p>
                                                </div>
                                            </a>
                                        </div>

                                        {/* Premium Banner */}
                                        <div className="px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-t border-slate-200 dark:border-slate-700">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="flex-1">
                                                    <p className="text-sm text-slate-900 dark:text-white">
                                                        Premium до 31.12.2025
                                                    </p>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                                        Автопродление включено
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Logout */}
                                        <div className="border-t border-slate-200 dark:border-slate-700">
                                            <Link
                                                to="/logout"
                                                className="flex items-center gap-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                            >
                                                <span className="text-sm">Выйти</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            ) : (
                                <Menu className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 pb-4 space-y-2 overflow-hidden"
                        >
                            <a
                                href="#portfolio-app"
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                <LayoutDashboard className="w-4 h-4" />
                                Обзор
                            </a>
                            {/* Mobile portfolios submenu */}
                            {menuItems.portfolios.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 px-8 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.label}
                                    </a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
