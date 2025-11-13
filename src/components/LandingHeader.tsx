import Button from "./Button.tsx";
import type { JSX } from "react";
import { Moon } from "lucide-react";

export function LandingHeader(): JSX.Element {
    return (
        <header
            id="header"
            className="fixed left-50 right-50 z-50 max-w-7xl p-6 flex justify-between mx-auto items-center "
        >
            <p className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-2xl">
                eebook
            </p>
            <ul className="flex gap-8 text-md">
                <li>
                    <a href="#" className="text-slate-900 hover:text-slate-700">
                        Функции
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-900 hover:text-slate-700">
                        О продукте
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-900 hover:text-slate-700">
                        Цены
                    </a>
                </li>
                <li>
                    <a href="#" className="text-slate-900 hover:text-slate-700">
                        Документация
                    </a>
                </li>
            </ul>
            <div className="flex gap-6 text-sm justify-center items-center text-center">
                <button
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200  transition-colors"
                    aria-label="Toggle theme"
                >
                    <Moon className="w-5 h-5 text-slate-700 " />
                </button>
                <Button typeButton="ghost" px="px-3" py="py-2">
                    Войти
                </Button>
                <Button typeButton="emerald" px="px-3" py="py-2" rounded="rounded-xl">
                    Начать бесплатно
                </Button>
            </div>
        </header>
    );
}
