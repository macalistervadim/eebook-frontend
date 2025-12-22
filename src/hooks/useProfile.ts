// src/hooks/useProfile.ts
import { useEffect, useState } from "react";
import { apiFetch } from "@/api/apiFetch";
import type { apiProfileResponse } from "@/types/profile/apiProfileResponse.ts";

export function useProfile(isAuthReady: boolean) {
    const [data, setData] = useState<apiProfileResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!isAuthReady) return;

        const load = async () => {
            try {
                const res = await apiFetch("http://localhost:8000/api/v1/users/me");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setData(await res.json());
            } catch (e) {
                setError(e as Error);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [isAuthReady]);

    return { data, loading, error };
}
