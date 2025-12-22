import { Shield } from "lucide-react";
import { Switch } from "@/components/ui/Switch.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";

export const ProfileSecurityTab2FA = (): JSX.Element => {
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">
                Двухфакторная аутентификация
            </h3>
            <div className="flex items-center justify-between p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                        <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <div className="text-slate-900 dark:text-white mb-1">
                            2FA включена
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                            Authenticator App
                        </div>
                    </div>
                </div>
                <Switch defaultChecked />
            </div>
            <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                Настроить 2FA
            </Button>
        </Card>
    );
};
