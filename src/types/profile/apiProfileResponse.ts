import type { User } from "@/types/profile/user.ts";
import type { UserSubscription } from "@/types/profile/subscription.ts";

export type apiProfileResponse = {
    user: User;
    user_subscription: UserSubscription | null;
};
