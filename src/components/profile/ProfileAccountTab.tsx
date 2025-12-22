import { Label } from "@/components/ui/Label.tsx";
import { Input } from "@/components/ui/Input.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { Card } from "@/components/ui/Card.tsx";
import type { JSX } from "react";
import type { User } from "@/types/profile/user.ts";

type ProfileAcctountTabProps = {
    user: User;
};

export const ProfileAccountTab = ({ user }: ProfileAcctountTabProps): JSX.Element => {
    return (
        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <h3 className="text-slate-900 dark:text-white mb-8">Личная информация</h3>
            <div className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Имя</Label>
                        <Input
                            defaultValue={user.first_name}
                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Фамилия</Label>
                        <Input
                            defaultValue={user.last_name}
                            className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        defaultValue={user.email}
                        className="bg-slate-50 dark:bg-slate-700/30 border-slate-200 dark:border-slate-700"
                    />
                </div>

                <div className="flex gap-3 pt-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Сохранить изменения
                    </Button>
                    <Button
                        variant="outline"
                        className="border-slate-300 dark:border-slate-700"
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </Card>
    );
};
