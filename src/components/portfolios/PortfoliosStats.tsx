import { DollarSign, PieChart, Target, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import type { JSX } from "react";

type PortfoliosStateProps = {
    totalValue: number;
    totalProfit: number;
    portfolios: any;
    avgReturn: number;
};

export const PortfoliosStats = ({
    totalValue,
    totalProfit,
    portfolios,
    avgReturn,
}: PortfoliosStateProps): JSX.Element => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl">
                        <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">Общая стоимость</p>
                    <h3 className="text-slate-900 dark:text-white">
                        ₽{totalValue.toLocaleString()}
                    </h3>
                </div>
            </div>

            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">Общая прибыль</p>
                    <h3 className="text-slate-900 dark:text-white">
                        ₽{totalProfit.toLocaleString()}
                    </h3>
                    {avgReturn > 0 && (
                        <p className="text-emerald-600 dark:text-emerald-400">
                            +{avgReturn}%
                        </p>
                    )}
                </div>
            </div>

            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-2xl">
                        <PieChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">Портфелей</p>
                    <h3 className="text-slate-900 dark:text-white">
                        {portfolios.length}
                    </h3>
                </div>
            </div>

            <div className="border rounded-xl p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-2xl">
                        <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-slate-600 dark:text-slate-400">Активов</p>
                    <h3 className="text-slate-900 dark:text-white">
                        {portfolios.reduce((sum, p) => sum + p.assetsCount, 0)}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
};
