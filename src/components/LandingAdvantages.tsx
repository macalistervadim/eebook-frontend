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
        <section className="text-center p-6 py-50 max-w-7xl mx-auto">
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
                        <Wallet
                            className="w-6 h-6 text-slate-600
                        dark:text-slate-300 group-hover:text-emerald-600
                         dark:group-hover:text-emerald-400 transition-colors
                         duration-300"
                        />
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
                        <TrendingUp
                            className="w-6 h-6 text-slate-600
                        dark:text-slate-300 group-hover:text-emerald-600
                        dark:group-hover:text-emerald-400 transition-colors
                        duration-300"
                        />
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
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br
                    from-slate-100 to-slate-50 group-hover:from-emerald-200/70
                    group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <Sparkles
                            className="w-6 h-6 text-slate-600
                        dark:text-slate-300 group-hover:text-emerald-600
                        dark:group-hover:text-emerald-400 transition-colors
                        duration-300"
                        />
                    </div>
                    <p className="text-xl text-slate-900">AI-прогнозы</p>
                    <p className="text-slate-600">
                        Используйте искусственный интеллект для прогнозирования
                        доходности.
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
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br
                    from-slate-100 to-slate-50 group-hover:from-emerald-200/70
                     group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <Calendar
                            className="w-6 h-6 text-slate-600 dark:text-slate-300
                         group-hover:text-emerald-600
                         dark:group-hover:text-emerald-400
                         transition-colors duration-300"
                        />
                    </div>
                    <p className="text-xl text-slate-900">Календарь купонов</p>
                    <p className="text-slate-600">
                        Никогда не пропустите выплаты с умным календарем и прогнозами.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50
                 hover:translate-y-1 rounded-3xl text-left group
                 hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50
                  cursor-pointer"
                >
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br
                    from-slate-100 to-slate-50 group-hover:from-emerald-200/70
                    group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <BarChart3
                            className="w-6 h-6 text-slate-600
                        dark:text-slate-300 group-hover:text-emerald-600
                         dark:group-hover:text-emerald-400 transition-colors
                          duration-300"
                        />
                    </div>
                    <p className="text-xl text-slate-900">Детальная аналитика</p>
                    <p className="text-slate-600">
                        Глубокие метрики и графики для принятия взвешенных решений.
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
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br
                    from-slate-100 to-slate-50 group-hover:from-emerald-200/70
                    group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <Shield
                            className="w-6 h-6 text-slate-600 dark:text-slate-300
                         group-hover:text-emerald-600
                         dark:group-hover:text-emerald-400 transition-colors
                         duration-300"
                        />
                    </div>
                    <p className="text-xl text-slate-900">Безопасность данных</p>
                    <p className="text-slate-600">
                        Банковский уровень защиты ваших финансовых данных.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50
                hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200
                hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer"
                >
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100
                     to-slate-50 group-hover:from-emerald-200/70
                     group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <Zap
                            className="w-6 h-6 text-slate-600 dark:text-slate-300
                         group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                          transition-colors duration-300"
                        />
                    </div>
                    <p className="text-xl text-slate-900">Молниеносная скорость</p>
                    <p className="text-slate-600">
                        Мгновенная синхронизация и обновление данных.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-6 border group p-8 h-full
                border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50
                 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200
                  hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer"
                >
                    <div
                        className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100
                    to-slate-50 group-hover:from-emerald-200/70
                    group-hover:to-emerald-200/70 transition-all duration-300"
                    >
                        <Globe
                            className="w-6 h-6 text-slate-600 dark:text-slate-300
                        group-hover:text-emerald-600
                        dark:group-hover:text-emerald-400 transition-colors
                         duration-300"
                        />
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
