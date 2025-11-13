import type { JSX } from "react";

export default function HowItWork(): JSX.Element {
    return (
        <section
            id="how-it-work"
            className="max-w-full text-center mx-auto p-6 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                    Как это работает
                </h1>
                <p className="text-slate-600 text-xl mb-25">
                    Четыре простых шага от подключения до профессионального управления
                    портфелем
                </p>
                <div className="grid grid-cols-4 gap-8 z-[1]">
                    <div className="flex flex-col flex-start">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                <span className="text-2xl text-white font-bold">01</span>
                            </div>
                            <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg flex flex-col border group p-8 h-full  gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="text-5xl mb-4 text-center">🔗</div>
                            <p className="text-xl text-slate-900 mb-3 text-center">
                                Подключите брокеров
                            </p>
                            <p className="text-slate-600 text-center leading-relaxed">
                                Добавьте все свои брокерские счета в один клик. Безопасное
                                подключение через API.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-start">
                        <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center gap-5 justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                                <span className="text-2xl text-white font-bold">02</span>
                            </div>
                            <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg flex flex-col border group p-8 h-full  gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="text-5xl mb-4 text-center">📊</div>
                            <h3 className="text-xl text-slate-900 mb-3 text-center">
                                Агрегируйте данные
                            </h3>
                            <p className="text-slate-600  text-center leading-relaxed">
                                eebook автоматически соберет данные со всех счетов и
                                построит единый портфель.
                            </p>{" "}
                        </div>
                    </div>
                    <div className="flex flex-col flex-start">
                        <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                                <span className="text-2xl text-white font-bold">03</span>
                            </div>
                            <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg flex flex-col gap-5 border group p-8 h-full gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="text-5xl mb-4 text-center">🤖</div>
                            <h3 className="text-xl text-slate-900 mb-3 text-center">
                                Анализируйте с AI
                            </h3>
                            <p className="text-slate-600 text-center leading-relaxed">
                                Получайте умные прогнозы, рекомендации по ребалансировке и
                                оптимизации налогов.
                            </p>{" "}
                        </div>
                    </div>
                    <div className="flex flex-col flex-start">
                        <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                                <span className="text-2xl text-white font-bold">04</span>
                            </div>
                            <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                <div className="bg-emerald-500 rounded-full p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-3 text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg flex flex-col border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer gap-5">
                            <div className="text-5xl mb-4 text-center">✨</div>
                            <h3 className="text-xl text-slate-900 mb-3 text-center">
                                Принимайте решения
                            </h3>
                            <p className="text-slate-600 text-center leading-relaxed">
                                Используйте детальную аналитику и инсайты для успешных
                                инвестиций.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Готовы начать?
                    </p>
                    <div className="inline-flex items-center gap-2 text-emerald-600 ">
                        <span>Весь процесс занимает менее 5 минут</span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
