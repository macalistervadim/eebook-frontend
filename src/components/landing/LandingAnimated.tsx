"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useTransform, useMotionValue } from "motion/react";
import {
    LayoutDashboard,
    Newspaper,
    LineChart as LineChartIcon,
    PieChart as PieChartIcon,
    Brain,
} from "lucide-react";

import PortfolioScreenshot from "@/assets/screenshots/dashboard.png";
import UpdatesScreenshot from "@/assets/screenshots/updates.png";
import DocsScreenshot from "@/assets/screenshots/docs.png";
import SupportScreenshot from "@/assets/screenshots/support.png";

const demoPages = [
    {
        id: "dashboard",
        title: "Портфолио",
        icon: LayoutDashboard,
        duration: 8000,
        description: "Обзор инвестиций",
        screenshot: PortfolioScreenshot,
    },
    {
        id: "updates",
        title: "Обновления",
        icon: Newspaper,
        duration: 6000,
        description: "Последние новости",
        screenshot: UpdatesScreenshot,
    },
    {
        id: "docs",
        title: "Документация",
        icon: LineChartIcon,
        duration: 7000,
        description: "Руководства и справка",
        screenshot: DocsScreenshot,
    },
    {
        id: "support",
        title: "Поддержка",
        icon: Brain,
        duration: 5000,
        description: "Помощь и контакты",
        screenshot: SupportScreenshot,
    },
];

export default function DashboardAnimated() {
    const [activePage, setActivePage] = useState(0);
    const progress = useMotionValue(0);

    const containerRef = useRef<HTMLDivElement>(null);

    // Автопереключение страниц с прогрессом
    useEffect(() => {
        const currentDuration = demoPages[activePage].duration;
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const newProgress = Math.min((elapsed / currentDuration) * 100, 100);
            progress.set(newProgress);

            if (elapsed < currentDuration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                progress.set(0);
                setActivePage((prev) => (prev + 1) % demoPages.length);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [activePage]);

    // Плавная непрерывная прокрутка
    useEffect(() => {
        if (!containerRef.current) return;

        let animationFrameId: number;

        const animate = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const maxScroll = container.scrollHeight - container.clientHeight;

            if (maxScroll > 0) {
                const rawProgress = progress.get() / 100;
                const eased = easeInOutCubic(rawProgress);
                container.scrollTop = maxScroll * eased;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Сброс скролла в начало при смене страницы
        containerRef.current.scrollTop = 0;

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [activePage, progress]);

    const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const CurrentPageComponent = demoPages[activePage].component;

    const width = 288;
    const height = 96;
    const perimeter = (width + height) * 2;

    const dashOffset = useTransform(progress, (p) => perimeter - (p / 100) * perimeter);
    return (
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Красота в каждой детали
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Интерфейс, разработанный для инвесторов. Все данные под рукой,
                        ничего лишнего.
                    </p>
                </motion.div>

                {/* Demo Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex gap-8"
                >
                    {/* Left Menu */}
                    <div className="flex-shrink-0 w-72 space-y-3">
                        {demoPages.map((page, index) => {
                            const Icon = page.icon;
                            const isActive = activePage === index;

                            return (
                                <motion.div
                                    key={page.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <button
                                        onClick={() => {
                                            setActivePage(index);
                                            progress.set(0);
                                        }}
                                        className={`w-full p-5 rounded-2xl transition-all relative overflow-hidden ${
                                            isActive
                                                ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 shadow-lg"
                                                : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md"
                                        }`}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 rounded-2xl pointer-events-none">
                                                <svg
                                                    className="absolute inset-0 w-full h-full"
                                                    style={{ overflow: "visible" }}
                                                >
                                                    <motion.rect
                                                        x="0"
                                                        y="0"
                                                        width="100%"
                                                        height="100%"
                                                        rx="16"
                                                        ry="16"
                                                        fill="none"
                                                        stroke="#10b981"
                                                        strokeWidth="3"
                                                        strokeDasharray={perimeter}
                                                        strokeDashoffset={dashOffset}
                                                        className="transition-all duration-100"
                                                        style={{
                                                            vectorEffect:
                                                                "non-scaling-stroke",
                                                        }}
                                                    />
                                                </svg>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4 relative z-10">
                                            <div
                                                className={`p-3 rounded-xl transition-all ${
                                                    isActive
                                                        ? "bg-emerald-600 shadow-lg"
                                                        : "bg-slate-100 dark:bg-slate-700"
                                                }`}
                                            >
                                                <Icon
                                                    className={`w-6 h-6 ${
                                                        isActive
                                                            ? "text-white"
                                                            : "text-slate-600 dark:text-slate-400"
                                                    }`}
                                                />
                                            </div>
                                            <div className="text-left flex-1">
                                                <div
                                                    className={`font-semibold mb-1 ${
                                                        isActive
                                                            ? "text-slate-900 dark:text-white"
                                                            : "text-slate-600 dark:text-slate-400"
                                                    }`}
                                                >
                                                    {page.title}
                                                </div>
                                                <div className="text-xs text-slate-500 dark:text-slate-500">
                                                    {page.description}
                                                </div>
                                            </div>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-2 h-2 bg-emerald-600 rounded-full"
                                                />
                                            )}
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Browser */}
                    <div className="flex-1 relative">
                        {/* Browser Chrome */}
                        <div className="bg-white dark:bg-slate-800 rounded-t-2xl border border-slate-200 dark:border-slate-700 border-b-0 p-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 mx-4 bg-slate-100 dark:bg-slate-700 rounded-lg px-4 py-1.5 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                <div className="w-3 h-3 text-slate-400">🔒</div>
                                <span className="truncate">
                                    app.eebook.ru/{demoPages[activePage].id}
                                </span>
                            </div>
                        </div>

                        {/* Browser Content */}
                        <div
                            ref={containerRef}
                            className="bg-white dark:bg-slate-900 rounded-b-2xl border border-slate-200 dark:border-slate-700 border-t-0 overflow-y-auto overflow-x-hidden h-[600px] shadow-2xl relative pointer-events-none"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <style jsx>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative w-full h-full">
                                        <img
                                            src={demoPages[activePage].screenshot}
                                            alt={demoPages[activePage].title}
                                            className="w-full h-auto block"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating indicator - только Live */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -right-4 top-1/4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-slate-600 dark:text-slate-400">
                                    Live
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
