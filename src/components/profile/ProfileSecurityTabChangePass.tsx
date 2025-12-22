import { Button } from "@/components/ui/Button.tsx";
import { Card } from "@/components/ui/Card.tsx";
import { useNavigate } from "react-router-dom";
import type { JSX } from "react";

export const ProfileSecurityTabChangePass = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-6">Изменить пароль</h3>

            <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => navigate("/password-change")}
            >
                Обновить пароль
            </Button>
        </Card>
    );
};
