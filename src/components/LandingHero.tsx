import {JSX} from "react";
import Button from "./Button.tsx";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingHero(): JSX {
    return (
        <section
            id="hero"
            className="mx-auto flex flex-col p-6 text-center bg-slate-50 max-w-full h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
        >
            <p className="py-2 mt-30 border border-slate-200 w-100 rounded-full
                    mx-auto text-sm text-slate-900 mb-10 flex justify-center items-center gap-3"
            >
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Новое поколение инвестиционных инструментов
            </p>
            <div className="flex flex-col gap-6 mb-[15px]">
                <h1 className="text-6xl md:text-8xl bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
                    eebook
                </h1>
                <h2 className="text-3xl md:text-4xl text-slate-700">
                    Управляйте инвестициями <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              умнее, проще, эффективнее
            </span>
                </h2>
                <h3 className="text-lg md:text-xl text-slate-600 mb-15">
                    Единая платформа для управления всеми вашими портфелями. AI-<br/>
                    прогнозы, детальный аналитики и удобные инструменты в одном месте
                </h3>
            </div>

            <div className="space-x-3">
                <Button typeButton="emerald">Начать бесплатно <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
                <Button typeButton="noBg">Посмотреть демо</Button>
            </div>

            <p className="text-sm text-slate-500 mt-20">
                Интеграция с любым брокером • AI-анализ • Бесплатно для начала
            </p>
        </section>
    )
}
