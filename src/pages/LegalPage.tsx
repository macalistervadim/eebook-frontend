"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Shield,
    FileText,
    Lock,
    Cookie,
    CheckCircle2,
    AlertTriangle,
    Eye,
    Scale,
} from "lucide-react";
import Footer from "@/components/Footer.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";

const sections = {
    privacy: [
        {
            title: "Какие данные мы собираем",
            content: [
                "Личная информация: email, имя, телефон (при регистрации)",
                "Финансовые данные: информация о портфелях, транзакциях, активах",
                "Технические данные: IP-адрес, браузер, операционная система",
                "Данные использования: действия в приложении, предпочтения, настройки",
            ],
        },
        {
            title: "Как мы используем ваши данные",
            content: [
                "Предоставление услуг платформы и синхронизация с брокерами",
                "Персонализация опыта и AI-прогнозы",
                "Улучшение качества сервиса и разработка новых функций",
                "Коммуникация с пользователями (уведомления, поддержка)",
                "Соблюдение законодательных требований",
            ],
        },
        {
            title: "Защита данных",
            content: [
                "Шифрование данных AES-256 при хранении и передаче",
                "Регулярные аудиты безопасности и тестирование на проникновение",
                "Ограниченный доступ сотрудников к персональным данным",
                "Соответствие стандартам PCI DSS для финансовых данных",
                "Регулярное резервное копирование с шифрованием",
            ],
        },
        {
            title: "Ваши права",
            content: [
                "Доступ к вашим персональным данным",
                "Исправление неточных данных",
                "Удаление ваших данных (право на забвение)",
                "Ограничение обработки данных",
                "Экспорт данных в машиночитаемом формате",
                "Отзыв согласия на обработку данных",
            ],
        },
    ],
    terms: [
        {
            title: "Условия использования",
            content: [
                'Сервис предоставляется "как есть" без гарантий',
                "Пользователь несет ответственность за сохранность учетных данных",
                "Запрещается использование сервиса в противоправных целях",
                "Мы оставляем право изменять условия с уведомлением пользователей",
            ],
        },
        {
            title: "Интеллектуальная собственность",
            content: [
                "Все права на платформу принадлежат eebook",
                "Пользовательский контент остается собственностью пользователя",
                "Запрещено копирование, распространение без разрешения",
                "API и документация доступны по лицензии MIT",
            ],
        },
        {
            title: "Ограничение ответственности",
            content: [
                "Мы не несем ответственности за инвестиционные решения пользователей",
                "AI-прогнозы носят информационный характер, не являются рекомендациями",
                "Не гарантируем непрерывность работы сервиса",
                "Пользователь несет риски при интеграции с брокерами",
            ],
        },
        {
            title: "Прекращение использования",
            content: [
                "Пользователь может удалить аккаунт в любой момент",
                "Мы можем приостановить доступ при нарушении условий",
                "При удалении аккаунта данные удаляются в течение 30 дней",
                "Резервные копии хранятся до 90 дней для восстановления",
            ],
        },
    ],
    security: [
        {
            title: "Шифрование и защита данных",
            content: [
                "TLS 1.3 для всех соединений",
                "AES-256 шифрование данных в покое",
                "Шифрование API ключей брокеров",
                "HSM (Hardware Security Module) для криптографических операций",
            ],
        },
        {
            title: "Аутентификация и доступ",
            content: [
                "Двухфакторная аутентификация (2FA)",
                "Биометрическая аутентификация на мобильных устройствах",
                "Сессии с автоматическим истечением",
                "Мониторинг подозрительной активности",
            ],
        },
        {
            title: "Инфраструктура",
            content: [
                "Серверы расположены в сертифицированных дата-центрах",
                "Географическое резервирование данных",
                "DDoS защита и Web Application Firewall",
                "Регулярные обновления и патчи безопасности",
            ],
        },
        {
            title: "Процессы и политики",
            content: [
                "Программа Bug Bounty для исследователей безопасности",
                "Регулярные аудиты безопасности третьей стороной",
                "План реагирования на инциденты",
                "Обучение сотрудников вопросам безопасности",
            ],
        },
    ],
    cookies: [
        {
            title: "Необходимые cookie",
            content: [
                "Сессионные cookie для аутентификации",
                "Cookie безопасности для защиты от CSRF атак",
                "Cookie для сохранения настроек (язык, тема)",
                "Эти cookie необходимы для работы сервиса",
            ],
        },
        {
            title: "Аналитические cookie",
            content: [
                "Google Analytics для статистики посещений",
                "Анализ поведения пользователей для улучшения UX",
                "A/B тестирование новых функций",
                "Можно отключить в настройках браузера",
            ],
        },
        {
            title: "Маркетинговые cookie",
            content: [
                "Cookie для персонализации рекламы",
                "Ретаргетинг в социальных сетях",
                "Отслеживание эффективности рекламных кампаний",
                "Требуют явного согласия пользователя",
            ],
        },
        {
            title: "Управление cookie",
            content: [
                "Вы можете отключить cookie в настройках браузера",
                "Некоторые функции могут быть недоступны без cookie",
                "Можно выбрать какие типы cookie разрешить",
                "Cookie настройки доступны в футере сайта",
            ],
        },
    ],
};

const sidebar = [
    { id: "privacy", label: "Конфиденциальность", icon: Eye },
    { id: "terms", label: "Условия использования", icon: FileText },
    { id: "security", label: "Безопасность", icon: Lock },
    { id: "cookies", label: "Cookie", icon: Cookie },
];

export default function LegalPage() {
    const [activeSection, setActiveSection] = useState("privacy");

    const getTitleForSection = (section: string) => {
        switch (section) {
            case "privacy":
                return "Политика конфиденциальности";
            case "terms":
                return "Условия использования";
            case "security":
                return "Безопасность и защита данных";
            case "cookies":
                return "Политика использования Cookie";
            default:
                return "";
        }
    };

    const getIconForSection = (section: string) => {
        switch (section) {
            case "privacy":
                return Eye;
            case "terms":
                return FileText;
            case "security":
                return Lock;
            case "cookies":
                return Cookie;
            default:
                return Shield;
        }
    };

    return (
        <section className="py-12 bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            <div className="border-b border-slate-200 dark:border-slate-800 pt-20">
                <div className="container mx-auto px-4 max-w-7xl py-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl">
                                <Scale className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h1 className="text-slate-900 dark:text-white">
                                    Юридическая информация
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Политики, условия и безопасность eebook
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Последнее обновление: 11 декабря 2024 года</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-12">
                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24 space-y-2">
                            {sidebar.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSection(item.id)}
                                        className={`w-full flex items-center text-left gap-3 px-4 py-3 rounded-xl transition-all ${
                                            activeSection === item.id
                                                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="text-sm">{item.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.aside>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 space-y-8"
                    >
                        {/* Title */}
                        <div className="flex items-center gap-3">
                            {(() => {
                                const Icon = getIconForSection(activeSection);
                                return (
                                    <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl">
                                        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                );
                            })()}
                            <h2 className="text-slate-900 dark:text-white">
                                {getTitleForSection(activeSection)}
                            </h2>
                        </div>

                        {/* Introduction Card */}
                        <div className="border p-6 bg-blue-50 rounded-xl dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-slate-900 dark:text-white mb-2">
                                        Важная информация
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {activeSection === "privacy" &&
                                            "Мы серьезно относимся к защите ваших персональных данных и соблюдаем требования законодательства о персональных данных РФ."}
                                        {activeSection === "terms" &&
                                            "Используя eebook, вы соглашаетесь с данными условиями. Пожалуйста, внимательно ознакомьтесь с ними."}
                                        {activeSection === "security" &&
                                            "Безопасность ваших данных - наш главный приоритет. Мы используем современные технологии защиты."}
                                        {activeSection === "cookies" &&
                                            "Мы используем cookie для улучшения вашего опыта. Вы можете управлять настройками cookie."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-8">
                            {sections[activeSection as keyof typeof sections].map(
                                (section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <h3 className="text-slate-900 dark:text-white mb-4">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {section.content.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            )}
                        </div>

                        {/* Contact Card */}
                        <div className="p-6 bg-white rounded-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <h4 className="text-slate-900 dark:text-white mb-4">
                                Остались вопросы?
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Если у вас есть вопросы относительно{" "}
                                {activeSection === "privacy" &&
                                    "политики конфиденциальности"}
                                {activeSection === "terms" && "условий использования"}
                                {activeSection === "security" && "безопасности"}
                                {activeSection === "cookies" && "использования cookie"},
                                свяжитесь с нами:
                            </p>
                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <a
                                        href="mailto:legal@eebook.io"
                                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                                    >
                                        legal@eebook.io
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        ООО "Ибук", ИНН 1234567890
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Download Card */}
                        <div className="border p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-slate-900 dark:text-white mb-2">
                                        Скачать документ
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Доступен в формате PDF для печати
                                    </p>
                                </div>
                                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Скачать PDF
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

function Mail({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    );
}
