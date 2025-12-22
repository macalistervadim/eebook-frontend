import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button.tsx";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const PortfoliosCreateCard = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            <div className="border rounded-xl p-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-900 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Plus className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-slate-900 dark:text-white mb-2">
                        Создайте новый портфель
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Разделите ваши инвестиции на несколько портфелей с разными
                        стратегиями для лучшей диверсификации
                    </p>
                    <Button
                        type="button"
                        variant="default"
                        className="rounded-xl px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                        onClick={() => navigate("/create-portfolio")}
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Создать портфель
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
