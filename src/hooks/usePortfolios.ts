// src/hooks/usePortfolios.ts
import { useState, useEffect } from "react";
import { apiFetch } from "@/api/apiFetch.ts";
import type { Portfolio } from "@/types/portfolios/portfolio.ts";

export const usePortfolios = (enabled = true) => {
    const [data, setData] = useState<Portfolio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!enabled) return;

        const fetchPortfolios = async () => {
            setLoading(true);
            try {
                const res = await apiFetch("http://localhost:8080/api/v1/portfolio/");
                if (!res.ok) throw new Error(res.statusText);

                const rawData = await res.json();
                const mapped: Portfolio[] = (rawData || []).map((p: any) => ({
                    id: p.portfolio_id,
                    name: p.name,
                    value: Number(p.total_value),
                    invested: Number(p.invested),
                    profit: Number(p.profit),
                    profitPercent: Number(p.profit_percent),
                    assetsCount: p.assets_count,
                    chartData: [
                        { month: "Jan", value: Number(p.total_value) * 0.95 },
                        { month: "Feb", value: Number(p.total_value) },
                    ],
                }));

                setData(mapped);
            } catch (err) {
                console.error("Ошибка при получении портфелей:", err);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, [enabled]);

    return { data, loading };
};
