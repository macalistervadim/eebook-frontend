export type Portfolio = {
    id: string;
    name: string;
    value: number;
    invested: number;
    profit: number;
    profitPercent: number;
    assetsCount: number;
    chartData: { month: string; value: number }[];
};
