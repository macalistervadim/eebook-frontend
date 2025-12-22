"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import PortfolioHeader from "@/components/landing/PortfolioHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";
import { useAuth } from "@/utils/auth/AuthProvider.tsx";
import { ProfileCard } from "@/components/profile/ProfileCard.tsx";
import { ProfileNavigation } from "@/components/profile/ProfileNavigation.tsx";
import { ProfileContent } from "@/components/profile/ProfileContent.tsx";
import { useProfile } from "@/hooks/useProfile.ts";
import { ProfileLoader } from "@/components/profile/ProfileLoader.tsx";

export type ProfileTab =
    | "overview"
    | "account"
    | "security"
    | "notifications"
    | "billing";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<ProfileTab>("overview");

    const { isLoading: authLoading } = useAuth();
    const { data, loading, error } = useProfile(!authLoading);

    if (loading) return <ProfileLoader />;
    if (error || !data) return <div>Ошибка загрузки профиля</div>;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PortfolioHeader />
            <div className="max-w-[1600px] mx-auto mb-20">
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 p-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <ProfileCard
                            avatar="placeholder"
                            user={data.user}
                            subscription={data.user_subscription}
                        />
                        <ProfileNavigation
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <ProfileContent
                            activeTab={activeTab}
                            user={data.user}
                            user_subscription={data.user_subscription}
                        />
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
