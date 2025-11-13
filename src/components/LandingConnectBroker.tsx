import Button from "./Button.tsx";
import type { JSX } from "react";
import { Check, ArrowRight, Shield, Zap, Lock } from "lucide-react";
import Badge from "./Badge.tsx";

export default function LandingConnectBroker(): JSX.Element {
    return (
        <section
            id="connect-broker"
            className="max-w-full text-center mx-auto p-6 bg-slate-50 py-45"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                    Работает с вашим брокером
                </h1>
                <p className="text-slate-600 text-xl mb-25">
                    Подключите все свои счета и управляйте портфелями из единого
                    интерфейса. <br /> Безопасно и быстро
                </p>

                <div className="bg-white max-w-7xl border-slate-200 shadow-xl p-15 rounded-2xl">
                    <div className="grid grid-cols-2 gap-20 text-left items-center">
                        <div>
                            <div
                                className="max-w-fit text-sm rounded-full
                                items-center
                                justify-center flex gap-2"
                            >
                                <Badge
                                    icon={
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    }
                                >
                                    Активно 15+ интеграций
                                </Badge>
                            </div>
                            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">
                                Все ваши инвестиции
                                <br />в одном месте
                            </h3>
                            <p className="text-lg text-slate-600 mb-8">
                                Подключайте неограниченное количество брокерских счетов.
                                eebook автоматически агрегирует данные и предоставляет
                                единую картину вашего портфеля.
                            </p>
                            <Button
                                typeButton="emerald"
                                py="py-2"
                                px="px-2"
                                rounded="rounded-xl"
                            >
                                Подключить брокера{" "}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all rounded-2xl
                            relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                    w-10 h-10 rounded-xl bg-gradient-to-br
                                    from-yellow-400 to-yellow-600 mb-3 text-white
                                    shadow-lg"
                                    >
                                        <span className="text-lg">Т</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Тинькофф Инвестиции
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all rounded-2xl
                            relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-green-500 to-emerald-600"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-gradient-to-br
                                     from-green-500 to-emerald-600 mb-3
                                      text-white shadow-lg"
                                    >
                                        <span className="text-lg">С</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Сбербанк Инвестор
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all rounded-2xl
                            relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-blue-500 to-blue-700"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-gradient-to-br
                                     from-blue-500 to-blue-700 mb-3
                                     text-white shadow-lg"
                                    >
                                        <span className="text-lg">В</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        ВТБ Мои Инвестиции
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all
                            rounded-2xl relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-red-500 to-red-700"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center
                                    justify-center w-10 h-10 rounded-xl
                                    bg-gradient-to-br from-red-500
                                    to-red-700 mb-3 text-white shadow-lg"
                                    >
                                        <span className="text-lg">А</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Альфа-Инвестиции
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50 hover:translate-y-0.5
                             transition-all rounded-2xl relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-slate-600 to-slate-800"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center
                                    justify-center w-10 h-10 rounded-xl bg-gradient-to-br
                                    from-slate-600 to-slate-800 mb-3
                                     text-white shadow-lg"
                                    >
                                        <span className="text-lg">Б</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        БКС Брокер
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all
                            rounded-2xl relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-purple-500 to-purple-700"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-gradient-to-br
                                     from-purple-500 to-purple-700 mb-3
                                     text-white shadow-lg"
                                    >
                                        <span className="text-lg">О</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Открытие Брокер
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all rounded-2xl
                            relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-cyan-500 to-blue-600"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-gradient-to-br
                                     from-cyan-500 to-blue-600 mb-3 text-white
                                     shadow-lg"
                                    >
                                        <span className="text-lg">Г</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Газпромбанк
                                    </div>
                                </div>
                            </div>
                            <div
                                className="p-4 bg-white border border-slate-200
                            hover:border-slate-300 hover:bg-slate-50
                            hover:translate-y-0.5 transition-all rounded-2xl
                            relative overflow-hidden"
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-1
                                bg-gradient-to-r from-orange-500 to-orange-700"
                                ></div>
                                <div className="pt-2 relative">
                                    <div className="absolute top-0 right-0">
                                        <div className="p-1 bg-emerald-100 rounded-full">
                                            <Check className="w-3 h-3 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-gradient-to-br
                                     from-orange-500 to-orange-700 mb-3 text-white
                                     shadow-lg"
                                    >
                                        <span className="text-lg">Ф</span>
                                    </div>
                                    <div className="text-sm text-slate-700 leading-tight">
                                        Финам
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-span-2 border p-4 bg-gradient-to-br
                            from-slate-50 to-slate-100 border-slate-200
                             border-dashed rounded-2xl flex flex-col"
                            >
                                <div className="text-center">
                                    <div
                                        className="inline-flex items-center justify-center
                                     w-10 h-10 rounded-xl bg-slate-200 mb-2"
                                    >
                                        <span className="text-lg">+</span>
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        И другие брокеры
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">
                                        Добавляем новые каждый месяц
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-20 gap-5">
                    <div
                        className="flex gap-6 border p-6 bg-white hover:bg-slate-50
                     border-slate-200 hover:border-emerald-200 transition-all
                     hover:shadow-lg rounded-2xl items-center"
                    >
                        <div
                            className="p-3 bg-gradient-to-br from-emerald-100
                         to-teal-100 rounded-xl group-hover:scale-110
                          transition-transform"
                        >
                            <Shield className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-slate-900 mb-2">
                                Безопасное подключение
                            </h4>
                            <p className="text-sm text-slate-600">
                                Банковский уровень шифрования данных
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex gap-6 border p-6 bg-white hover:bg-slate-50
                     border-slate-200 hover:border-emerald-200 transition-all
                      hover:shadow-lg rounded-2xl items-center"
                    >
                        <div
                            className="p-3 bg-gradient-to-br from-emerald-100
                         to-teal-100 rounded-xl group-hover:scale-110
                          transition-transform"
                        >
                            <Zap className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-slate-900 mb-2">
                                Мгновенная синхронизация
                            </h4>
                            <p className="text-sm text-slate-600">
                                Обновление портфеля в реальном времени
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex gap-6 border p-6 bg-white hover:bg-slate-50
                     border-slate-200 hover:border-emerald-200 transition-all
                      hover:shadow-lg rounded-2xl items-center"
                    >
                        <div
                            className="p-3 bg-gradient-to-br from-emerald-100
                        to-teal-100 rounded-xl group-hover:scale-110
                         transition-transform"
                        >
                            <Lock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-slate-900 mb-2">
                                Полная конфиденциальность
                            </h4>
                            <p className="text-sm text-slate-600">
                                Мы не храним пароли от брокеров
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="p-6 py-10 bg-gradient-to-br from-slate-900
                 to-slate-800 border-slate-700 rounded-2xl mt-10
                  flex gap-6 items-center"
                >
                    <div
                        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br
                    from-emerald-500 to-teal-500 rounded-2xl flex items-center
                    justify-center shadow-lg shadow-emerald-500/25"
                    >
                        <span className="text-3xl">🔌</span>
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl text-white mb-2">
                            Не нашли своего брокера?
                        </h3>
                        <p className="text-slate-300">
                            Мы постоянно добавляем новые интеграции. Напишите нам, и мы
                            добавим вашего брокера в приоритете.
                        </p>
                    </div>
                    <Button typeButton="emerald" px="px-2" py="py-2">
                        Запросить интеграцию
                    </Button>
                </div>
            </div>
        </section>
    );
}
