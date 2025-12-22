import type { JSX } from "react";
import { ProfileStats } from "@/components/profile/ProfileStats.tsx";
import { ProfileActivity } from "@/components/profile/ProfileActivity.tsx";
import { ProfileAccountTab } from "@/components/profile/ProfileAccountTab.tsx";
import { ProfileSecurityTabChangePass } from "@/components/profile/ProfileSecurityTabChangePass.tsx";
import { ProfileSecurityTab2FA } from "@/components/profile/ProfileSecurityTab2FA.tsx";
import { ProfileSecurityActiveSessions } from "@/components/profile/ProfileSecurityActiveSessions.tsx";
import { ProfileSecurityTabNotifi } from "@/components/profile/ProfileSecurityTabNotifi.tsx";
import { ProfileBillingTabSubscription } from "@/components/profile/ProfileBillingTabSubscription.tsx";
import type { User } from "@/types/profile/user.ts";
import type { UserSubscription } from "@/types/profile/subscription.ts";
import { ProfileBillingTabAdvantages } from "@/components/profile/ProfileBillingTabAdvantages.tsx";
import { ProfileBillingTabHistory } from "@/components/profile/ProfileBillingTabHistory.tsx";

interface ProfileContentProps {
    activeTab: string;
    user: User;
    user_subscription: UserSubscription | null;
}

export const ProfileContent = ({
    activeTab,
    user,
    user_subscription,
}: ProfileContentProps): JSX.Element => {
    return (
        <>
            {activeTab === "overview" && (
                <>
                    <ProfileStats />
                    <ProfileActivity />
                </>
            )}

            {activeTab === "account" && <ProfileAccountTab user={user} />}

            {activeTab === "security" && (
                <div className="space-y-6">
                    <ProfileSecurityTabChangePass />
                    <ProfileSecurityTab2FA />
                    <ProfileSecurityActiveSessions />
                </div>
            )}

            {activeTab === "notifications" && <ProfileSecurityTabNotifi />}

            {activeTab === "billing" && (
                <div className="space-y-6">
                    {user_subscription != null && (
                        <>
                            <ProfileBillingTabSubscription
                                user_subscription={user_subscription}
                            />
                            <ProfileBillingTabAdvantages />
                            <ProfileBillingTabHistory />
                        </>
                    )}
                </div>
            )}
        </>
    );
};
