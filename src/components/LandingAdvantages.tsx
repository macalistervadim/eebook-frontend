import type { JSX } from "react";
import {
    TrendingUp,
    Sparkles,
    BarChart3,
    Calendar,
    Wallet,
    Shield,
    Zap,
    Globe,
} from "lucide-react";

export default function LandingAdvantages(): JSX.Element {
    return (
        <section className="text-center p-6 py-32 max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                Все для успешных инвестиций
            </h1>
            <p className="text-slate-600 text-xl mb-25">
                eebook объединяет передовые технологии и простоту использования, чтобы
                дать вам полный контроль над инвестициями.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                  border-slate-200 transition-all duration-300
                  hover:shadow-emerald-100/50 hover:translate-y-1
                  rounded-3xl text-left group  hover:border-emerald-200
                  hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer"
                >
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br
                     from-slate-100 to-slate-50 group-hover:from-emerald-200/70
                     group-hover:to-emerald-200/70
                     transition-all duration-300"
                    >
                        <Wallet className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <p className="text-xl text-slate-900 ">Единый портфель</p>
                    <p className="text-slate-600">
                        Управляйте всеми инвестициями в одном месте, независимо от
                        брокера.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                 border-slate-200 transition-all duration-300
                 hover:shadow-emerald-100/50 hover:translate-y-1
                 rounded-3xl text-left group  hover:border-emerald-200
                 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer"
                >
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100
                     to-slate-50 group-hover:from-emerald-200/70
                     group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <TrendingUp className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <p className="text-xl text-slate-900">Динамика в реальном времени</p>
                    <p className="text-slate-600">
                        Отслеживайте изменения портфеля моментально с живыми графиками.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50
                 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200
                 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer"
                >
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <Sparkles className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <p className="text-xl text-slate-900">AI-прогнозы</p>
                    <p className="text-slate-600">
                        Используйте искусственный интеллект для прогнозирования
                        доходности.
                    </p>
                </div>
                <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-calendar w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                            aria-hidden="true"
                        >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                    </div>
                    <p className="text-xl text-slate-900">Календарь купонов</p>
                    <p className="text-slate-600">
                        Никогда не пропустите выплаты с умным календарем и прогнозами.
                    </p>
                </div>
                <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chart-column w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                            aria-hidden="true"
                        >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                        </svg>
                    </div>
                    <p className="text-xl text-slate-900">Детальная аналитика</p>
                    <p className="text-slate-600">
                        Глубокие метрики и графики для принятия взвешенных решений.
                    </p>
                </div>
                <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-shield w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                            aria-hidden="true"
                        >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                    <p className="text-xl text-slate-900">Безопасность данных</p>
                    <p className="text-slate-600">
                        Банковский уровень защиты ваших финансовых данных.
                    </p>
                </div>
                <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-zap w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                            aria-hidden="true"
                        >
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                    </div>
                    <p className="text-xl text-slate-900">Молниеносная скорость</p>
                    <p className="text-slate-600">
                        Мгновенная синхронизация и обновление данных.
                    </p>
                </div>
                <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                    <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-globe w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                    </div>
                    <p className="text-xl text-slate-900">Мультивалютность</p>
                    <p className="text-slate-600">
                        Поддержка всех мировых валют и рынков.
                    </p>
                </div>
            </div>
        </section>
    );
}
