export type UserSubscription = {
    id: number;
    user_id: number;
    plan: string;
    started_at: string;
    expired_at: string | null;
    is_active: boolean;
};
