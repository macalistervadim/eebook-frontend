import { Button } from "@/components/ui/Button.tsx";
import { Download } from "lucide-react";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileBillingTabHistory = (): JSX.Element => {
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">История платежей</h3>
            <div className="space-y-3">
                {[
                    {
                        date: "01.01.2024",
                        description: "Premium Annual",
                        amount: 9990,
                    },
                    {
                        date: "01.01.2023",
                        description: "Premium Annual",
                        amount: 8990,
                    },
                ].map((payment, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                        <div>
                            <div className="text-slate-900 dark:text-white">
                                {payment.description}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {payment.date}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-slate-900 dark:text-white">
                                ₽{payment.amount.toLocaleString()}
                            </span>
                            <Button variant="ghost" size="sm">
                                <Download className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
