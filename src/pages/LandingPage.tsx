import { LandingHeader } from "../components/Headers/LandingHeader.tsx";
import {EmeraldBtn} from "../components/Buttons/EmeraldBtn.tsx";
import {NoBgBtn} from "../components/Buttons/NoBgBtn.tsx";
import LandingPortfolioCharts from "../components/Charts/LandingPortfolioCharts.tsx";
import LandingCalc from "../components/LandingCalc.tsx";

export default function LandingPage() {
    return (
        <main>
            <LandingHeader />
            <section
                id="hero"
                className="mx-auto flex flex-col p-6 text-center bg-slate-50 max-w-full h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
            >
                <p className="py-2 mt-30 border border-slate-200 w-100 rounded-full
                    mx-auto text-sm text-slate-900 mb-10 flex justify-center items-center gap-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-sparkles w-4 h-4 text-emerald-600 dark:text-emerald-400"
                         aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558
                        1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051
                        5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1
                        1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
                        </path>
                        <path d="M20 2v4">
                        </path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                    </svg>Новое поколение инвестиционных инструментов
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
                    <EmeraldBtn>Начать бесплатно</EmeraldBtn>
                    <NoBgBtn>Посмотреть демо</NoBgBtn>
                </div>

                <p className="text-sm text-slate-500 mt-20">
                    Интеграция с любым брокером • AI-анализ • Бесплатно для начала
                </p>
            </section>
            <section className="text-center p-6 py-32 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Все для успешных инвестиций</h1>
                <p className="text-slate-600 text-xl mb-25">eebook объединяет передовые технологии и простоту использования, чтобы дать вам полный контроль над инвестициями.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wallet w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900 ">Единый портфель</p>
                        <p className="text-slate-600">Управляйте всеми инвестициями в одном месте, независимо от брокера.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Динамика в реальном времени</p>
                        <p className="text-slate-600">Отслеживайте изменения портфеля моментально с живыми графиками.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        </div>
                        <p className="text-xl text-slate-900">AI-прогнозы</p>
                        <p className="text-slate-600">Используйте искусственный интеллект для прогнозирования доходности.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Календарь купонов</p>
                        <p className="text-slate-600">Никогда не пропустите выплаты с умным календарем и прогнозами.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Детальная аналитика</p>
                        <p className="text-slate-600">Глубокие метрики и графики для принятия взвешенных решений.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Безопасность данных</p>
                        <p className="text-slate-600">Банковский уровень защиты ваших финансовых данных.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Молниеносная скорость</p>
                        <p className="text-slate-600">Мгновенная синхронизация и обновление данных.</p>
                    </div>
                    <div className="flex flex-col gap-6 border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-xl hover:bg-emerald-100/50 cursor-pointer">
                        <div className="p-3 rounded-2xl w-12 bg-gradient-to-br from-slate-100 to-slate-50 group-hover:from-emerald-200/70 group-hover:to-emerald-200/70 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        </div>
                        <p className="text-xl text-slate-900">Мультивалютность</p>
                        <p className="text-slate-600">Поддержка всех мировых валют и рынков.</p>
                    </div>
                </div>
            </section>
            <section
                id="interface"
                className="max-w-full text-center mx-auto p-6 mt-10 py-45 bg-slate-50 relative"
            >
                <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                    Красота в каждой детали
                </h1>
                <p className="text-slate-600 text-xl mb-25">
                    Интерфейс, разработанный для инвесторов. Все данные под рукой, ничего лишнего.
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
                            <LandingPortfolioCharts/>
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
            <section id="how-it-work" className="max-w-full text-center mx-auto p-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Как это работает</h1>
                    <p className="text-slate-600 text-xl mb-25">Четыре простых шага от подключения до профессионального управления портфелем</p>
                    <div className="grid grid-cols-4 gap-8 z-[1]">
                        <div className="flex flex-col flex-start">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                    <span className="text-2xl text-white font-bold">01</span>
                                </div>
                                <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg flex flex-col border group p-8 h-full  gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                                <div className="text-5xl mb-4 text-center">🔗</div>
                                <p className="text-xl text-slate-900 mb-3 text-center">Подключите брокеров</p>
                                <p className="text-slate-600 text-center leading-relaxed">Добавьте все свои брокерские счета в один клик. Безопасное подключение через API.</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-start">
                            <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center gap-5 justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                                    <span className="text-2xl text-white font-bold">02</span>
                                </div>
                                <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg flex flex-col border group p-8 h-full  gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                                <div className="text-5xl mb-4 text-center">📊</div>
                                <h3 className="text-xl text-slate-900 mb-3 text-center">Агрегируйте данные</h3>
                                <p className="text-slate-600  text-center leading-relaxed">eebook автоматически соберет данные со всех счетов и построит единый портфель.</p>              </div>
                        </div>
                        <div className="flex flex-col flex-start">
                            <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                                    <span className="text-2xl text-white font-bold">03</span>
                                </div>
                                <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg flex flex-col gap-5 border group p-8 h-full gap-5 border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer">
                                <div className="text-5xl mb-4 text-center">🤖</div>
                                <h3 className="text-xl text-slate-900 mb-3 text-center">Анализируйте с AI</h3>
                                <p className="text-slate-600 text-center leading-relaxed">Получайте умные прогнозы, рекомендации по ребалансировке и оптимизации налогов.</p>              </div>
                        </div>
                        <div className="flex flex-col flex-start">
                            <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
                                    <span className="text-2xl text-white font-bold">04</span>
                                </div>
                                <div className="bg-white rounded-full p-1 shadow-lg translate-y-4">
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-lg flex flex-col border group p-8 h-full  border-slate-200 transition-all duration-300 hover:shadow-emerald-100/50 hover:translate-y-1 rounded-3xl text-left group  hover:border-emerald-200 hover:shadow-sm hover:bg-emerald-100/20 cursor-pointer gap-5">
                                <div className="text-5xl mb-4 text-center">✨</div>
                                <h3 className="text-xl text-slate-900 mb-3 text-center">Принимайте решения</h3>
                                <p className="text-slate-600 text-center leading-relaxed">Используйте детальную аналитику и инсайты для успешных инвестиций.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Готовы начать?</p>
                        <div className="inline-flex items-center gap-2 text-emerald-600 "><span>Весь процесс занимает менее 5 минут</span>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="connect-broker" className="max-w-full text-center mx-auto p-6 bg-slate-50 py-45">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Работает с вашим брокером</h1>
                    <p className="text-slate-600 text-xl mb-25">Подключите все свои счета и управляйте портфелями из единого интерфейса. <br/> Безопасно и быстро</p>

                    <div className="bg-white max-w-7xl border-slate-200 shadow-xl p-15 rounded-2xl">
                        <div className="grid grid-cols-2 gap-20 text-left items-center">
                            <div>
                                <div className="mb-10 max-w-fit px-4 max-h-fit text-sm rounded-full py-2 bg-emerald-50 border border-emerald-100 text-emerald-600 items-center justify-center flex gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <p>Активно 15+ интеграций</p>
                                </div>
                                <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">Все ваши инвестиции<br/>в одном месте</h3>
                                <p className="text-lg text-slate-600 mb-8">Подключайте неограниченное количество брокерских счетов. eebook автоматически агрегирует данные и предоставляет единую картину вашего портфеля.</p>
                                <EmeraldBtn py="py-2" px="px-3" rounded="rounded-xl">Подключить брокера</EmeraldBtn>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 mb-3 text-white shadow-lg"><span className="text-lg">Т</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Тинькофф Инвестиции</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 mb-3 text-white shadow-lg"><span className="text-lg">С</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Сбербанк Инвестор</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-3 text-white shadow-lg"><span className="text-lg">В</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">ВТБ Мои Инвестиции</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 mb-3 text-white shadow-lg"><span className="text-lg">А</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Альфа-Инвестиции</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-800"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 mb-3 text-white shadow-lg"><span className="text-lg">Б</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">БКС Брокер</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 mb-3 text-white shadow-lg"><span className="text-lg">О</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Открытие Брокер</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-3 text-white shadow-lg"><span className="text-lg">Г</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Газпромбанк</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5 transition-all rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-700"></div>
                                    <div className="pt-2 relative">
                                        <div className="absolute top-0 right-0"><div className="p-1 bg-emerald-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-3 h-3 text-emerald-600" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div></div>
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 mb-3 text-white shadow-lg"><span className="text-lg">Ф</span></div>
                                        <div className="text-sm text-slate-700 leading-tight">Финам</div>
                                    </div>
                                </div>
                                <div className="col-span-2 border p-4 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 border-dashed rounded-2xl flex flex-col">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-200 mb-2">
                                            <span className="text-lg">+</span>
                                        </div>
                                        <div className="text-sm text-slate-600">И другие брокеры</div>
                                        <div className="text-xs text-slate-500 mt-1">Добавляем новые каждый месяц</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-20 gap-5">
                        <div className="flex gap-6 border p-6 bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-200 transition-all hover:shadow-lg rounded-2xl items-center">
                            <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-5 h-5 text-emerald-600" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
                            <div className="text-left">
                                <h4 className="text-slate-900 mb-2">Безопасное подключение</h4>
                                <p className="text-sm text-slate-600">Банковский уровень шифрования данных</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border p-6 bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-200 transition-all hover:shadow-lg rounded-2xl items-center">
                            <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-5 h-5 text-emerald-600" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
                            <div className="text-left">
                                <h4 className="text-slate-900 mb-2">Мгновенная синхронизация</h4>
                                <p className="text-sm text-slate-600">Обновление портфеля в реальном времени</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border p-6 bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-200 transition-all hover:shadow-lg rounded-2xl items-center">
                            <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock w-5 h-5 text-emerald-600" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                            <div className="text-left">
                                <h4 className="text-slate-900 mb-2">Полная конфиденциальность</h4>
                                <p className="text-sm text-slate-600">Мы не храним пароли от брокеров</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 py-10 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 rounded-2xl mt-10 flex gap-6 items-center">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25"><span className="text-3xl">🔌</span></div>
                        <div className="text-left">
                            <h3 className="text-xl text-white mb-2">Не нашли своего брокера?</h3>
                            <p className="text-slate-300">Мы постоянно добавляем новые интеграции. Напишите нам, и мы добавим вашего брокера в приоритете.</p>
                        </div>
                        <EmeraldBtn px="px-2" py="py-2">Запросить интеграцию</EmeraldBtn>
                    </div>
                </div>
            </section>

            <LandingCalc />


        </main>
    );
}
