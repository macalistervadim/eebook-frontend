import type { Portfolio } from "@/types/portfolios/portfolio.ts";

export const calculatePortfoliosStats = (portfolios: Portfolio[]) => {
    const totalValue = portfolios.reduce((sum, p) => sum + p.value, 0);
    const totalProfit = portfolios.reduce((sum, p) => sum + p.profit, 0);
    const totalInvested = portfolios.reduce((sum, p) => sum + p.invested, 0);
    const avgReturn =
        totalProfit > 0 && totalInvested > 0
            ? Number(((totalProfit / totalInvested) * 100).toFixed(2))
            : 0;
    return { totalValue, totalProfit, totalInvested, avgReturn };
};
