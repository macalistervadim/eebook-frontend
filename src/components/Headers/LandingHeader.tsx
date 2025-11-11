import {GhostBtn} from "../Buttons/GhostBtn.tsx";
import {EmeraldBtn} from "../Buttons/EmeraldBtn.tsx";

export function LandingHeader() {
    return (
        <header id="header" className="max-w-7xl p-6 flex justify-between mx-auto items-center bg-white/50">
            <p className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-2xl">eebook</p>
            <ul className="flex gap-8 text-md">
                <li><a href="#" className="text-slate-900 hover:text-slate-700">Функции</a></li>
                <li><a href="#" className="text-slate-900 hover:text-slate-700">О продукте</a></li>
                <li><a href="#" className="text-slate-900 hover:text-slate-700">Цены</a></li>
                <li><a href="#" className="text-slate-900 hover:text-slate-700">Документация</a></li>
            </ul>
            <div className="flex gap-6 text-sm justify-center items-center">
                <GhostBtn>Войти</GhostBtn>
                <EmeraldBtn py="py-2" rounded="rounded-xl">Начать бесплатно</EmeraldBtn>
            </div>
        </header>
    )
}