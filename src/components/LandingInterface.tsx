import LandingPortfolioCharts from "./LandingPortfolioCharts.tsx";
import type { JSX } from "react";

export default function LandingInterface(): JSX.Element {
    return (
        <section
            id="interface"
            className="max-w-full text-center mx-auto p-6 mt-10 py-45 bg-slate-50 relative"
        >
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                Красота в каждой детали
            </h1>
            <p className="text-slate-600 text-xl mb-25">
                Интерфейс, разработанный для инвесторов. Все данные под рукой, ничего
                лишнего.
            </p>
            <div className="max-w-7xl mx-auto relative">
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-t-3xl p-3 flex items-center gap-2 shadow-xl">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
                        <div className="w-4 h-4 text-emerald-500">🔒</div>
                        <p>eebook.com</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 md:p-12 rounded-b-3xl shadow-2xl border-x border-b border-slate-200">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col border group p-8 h-full min-h-2xl border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Общий капитал</p>
                                <div className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-dollar-sign w-5 h-5 text-emerald-600"
                                        aria-hidden="true"
                                    >
                                        <line x1="12" y1="2" x2="12" y2="22"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">460 000 ₽</p>
                            <div className="flex items-center gap-1 text-emerald-600 text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right w-4 h-4"
                                    aria-hidden="true"
                                >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                                <span>+18.2% за месяц</span>
                            </div>
                        </div>

                        <div className="flex flex-col border group p-8 h-full border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Доходность</p>
                                <div className="p-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-trending-up w-5 h-5 text-teal-600"
                                        aria-hidden="true"
                                    >
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">+64.2%</p>
                            <p className="text-slate-500 text-sm">годовых</p>
                        </div>

                        <div className="flex flex-col border group p-8 h-full border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                            <div className="flex justify-between items-center mb-5">
                                <p className="text-slate-600">Активы</p>
                                <div className="p-2 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-activity w-5 h-5 text-slate-600"
                                        aria-hidden="true"
                                    >
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-3xl text-slate-900 mb-2">127</p>
                            <p className="text-slate-500 text-sm">позиций</p>
                        </div>
                        <LandingPortfolioCharts />
                    </div>
                </div>

                <div
                    className="text-left hidden lg:block absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div className="text-sm text-slate-600 mb-2">AI-прогноз</div>
                    <div className="text-3xl text-emerald-600 mb-1">+12.4%</div>
                    <div className="text-xs text-slate-500">следующий месяц</div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-up-right w-3 h-3"
                            aria-hidden="true"
                        >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                        </svg>
                        <span>высокая уверенность</span>
                    </div>
                </div>

                <div
                    className="text-left hidden lg:block absolute -left-8 bottom-1/4 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div className="text-sm text-slate-600 mb-2">Ближайший купон</div>
                    <div className="text-2xl text-slate-900 mb-1">12 ноя</div>
                    <div className="text-xl text-emerald-600">2 845 ₽</div>
                    <div className="mt-3 text-xs text-slate-500">ОФЗ 26233</div>
                </div>
            </div>
        </section>
    );
}
