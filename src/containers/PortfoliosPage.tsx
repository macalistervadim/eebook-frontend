"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/Button.tsx";
import PortfolioHeader from "@/components/landing/PortfolioHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";
import { useAuth } from "@/utils/auth/AuthProvider.tsx";
import { useNavigate } from "react-router-dom";
import { PortfoliosStats } from "@/components/portfolios/PortfoliosStats.tsx";
import { PortfoliosGrid } from "@/components/portfolios/PortfoliosGrid.tsx";
import { PortfoliosFilter } from "@/components/portfolios/PortfoliosFilter.tsx";
import { PortfoliosCreateCard } from "@/components/portfolios/PortfoliosCreateCard.tsx";
import { usePortfolios } from "@/hooks/usePortfolios.ts";
import { PortfoliosLoader } from "@/components/portfolios/PortfoliosLoader.tsx";
import { calculatePortfoliosStats } from "@/domain/PortfoliosCalc.ts";

export default function PortfoliosPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { isLoading } = useAuth();
    const { data: portfolios, loading } = usePortfolios(!isLoading);
    const { totalValue, totalProfit, avgReturn } = calculatePortfoliosStats(portfolios);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const isMenuButton = target
                .closest("button")
                ?.querySelector('[class*="MoreVertical"]');
            const isMenuContent = target
                .closest('[class*="bg-white"]')
                ?.querySelector('[class*="py-2"]');

            if (!isMenuButton && !isMenuContent) {
                setOpenMenuId(null);
            }
        };

        if (openMenuId) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [openMenuId]);

    if (loading) return <PortfoliosLoader />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1600px] mx-auto px-6 py-10 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-slate-900 dark:text-white mb-2 text-xl">
                                Мои портфели
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Управляйте всеми вашими инвестиционными портфелями
                            </p>
                        </div>
                        <Button
                            type="button"
                            variant="default"
                            className="rounded-xl px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25"
                            onClick={() => navigate("/create-portfolio")}
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Создать портфель
                        </Button>
                    </div>
                </motion.div>

                <PortfoliosStats
                    totalProfit={totalProfit}
                    portfolios={portfolios}
                    totalValue={totalValue}
                    avgReturn={avgReturn}
                />

                <PortfoliosFilter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" ref={menuRef}>
                    {portfolios.map((portfolio, index) => (
                        <motion.div
                            key={portfolio.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        >
                            <PortfoliosGrid
                                portfolio={portfolio}
                                openMenuId={openMenuId}
                                setOpenMenuId={setOpenMenuId}
                            />
                        </motion.div>
                    ))}
                </div>

                <PortfoliosCreateCard />
            </div>
            <Footer />
        </div>
    );
}
