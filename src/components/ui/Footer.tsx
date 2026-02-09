import { motion } from "motion/react";
import { Twitter, Linkedin, Mail, Github, MessageCircle } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Обзор", href: "#" },
        { name: "Функции", href: "#" },
        { name: "Интеграции", href: "#" },
        { name: "Цены", href: "#pricing" },
        { name: "Обновления", href: "#updates" },
        { name: "Дорожная карта", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "API", href: "#docs" },
    ],
    platform: [
        { name: "AI-помощник", href: "#ai-assistant" },
        { name: "Портфели", href: "#portfolio-app" },
        { name: "Аналитика", href: "#analytics" },
        { name: "Отчёты", href: "#reports" },
        { name: "Календарь событий", href: "#calendar" },
        { name: "Импорт данных", href: "#import" },
        { name: "Бэктестинг", href: "#backtesting" },
        { name: "Мобильное приложение", href: "#" },
    ],
    finance: [
        { name: "Личные финансы", href: "#finance-tracker" },
        { name: "Транзакции", href: "#transactions" },
        { name: "Бюджеты", href: "#budget-manager" },
        { name: "Финансовые цели", href: "#financial-goals" },
        { name: "Категории расходов", href: "#" },
        { name: "Планирование", href: "#" },
        { name: "Отчёты", href: "#" },
    ],
    tools: [
        { name: "Калькулятор ROI", href: "#" },
        { name: "Налоговый калькулятор", href: "#" },
        { name: "Анализ рисков", href: "#" },
        { name: "Сравнение портфелей", href: "#" },
        { name: "Импорт от брокера", href: "#broker-import" },
        { name: "Добавить актив", href: "#add-asset" },
    ],
    learning: [
        { name: "Образовательный центр", href: "#education-center" },
        { name: "Документация", href: "#docs" },
        { name: "Блог", href: "#pulse" },
        { name: "Новости рынка", href: "#news" },
        { name: "Кейсы", href: "#" },
        { name: "Вебинары", href: "#" },
        { name: "Гайды", href: "#" },
        { name: "FAQ", href: "#" },
    ],
    brokers: [
        { name: "Т-Инвестиции", href: "#" },
        { name: "Сбербанк Инвестор", href: "#" },
        { name: "ВТБ Мои Инвестиции", href: "#" },
        { name: "Альфа-Инвестиции", href: "#" },
        { name: "БКС Брокер", href: "#" },
        { name: "Freedom Finance", href: "#" },
        { name: "Interactive Brokers", href: "#" },
    ],
    company: [
        { name: "О нас", href: "#about" },
        { name: "Карьера", href: "#careers" },
        { name: "Команда", href: "#" },
        { name: "Партнёры", href: "#" },
        { name: "Инвесторам", href: "#" },
        { name: "Пресс-центр", href: "#" },
        { name: "Контакты", href: "#" },
    ],
    support: [
        { name: "Центр поддержки", href: "#support" },
        { name: "FAQ", href: "#" },
        { name: "Статус системы", href: "#" },
        { name: "Сообщить о проблеме", href: "#" },
        { name: "Обратная связь", href: "#" },
        { name: "Форум", href: "#" },
    ],
    developers: [
        { name: "API Документация", href: "#docs" },
        { name: "SDK & Библиотеки", href: "#" },
        { name: "Webhooks", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "Примеры кода", href: "#" },
        { name: "Changelog API", href: "#" },
    ],
    legal: [
        { name: "Условия использования", href: "#legal" },
        { name: "Политика конфиденциальности", href: "#legal" },
        { name: "Обработка данных", href: "#legal" },
        { name: "Безопасность", href: "#legal" },
        { name: "Cookies", href: "#legal" },
        { name: "Лицензия", href: "#legal" },
        { name: "Соглашение SLA", href: "#legal" },
    ],
};

const socialLinks = [
    {
        icon: Twitter,
        href: "#",
        label: "Twitter",
        color: "hover:text-slate-900 dark:hover:text-white",
    },
    {
        icon: Github,
        href: "#",
        label: "GitHub",
        color: "hover:text-slate-900 dark:hover:text-white",
    },
    {
        icon: MessageCircle,
        href: "#",
        label: "Telegram",
        color: "hover:text-sky-500 hover:text-slate-900 dark:hover:text-white",
    },
    {
        icon: Mail,
        href: "#",
        label: "Email",
        color: "hover:text-emerald-600 hover:text-slate-900 dark:hover:text-white",
    },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b w-full from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            eebook
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xs leading-relaxed text-sm">
                            Новое поколение инвестиционных инструментов для умного
                            управления портфелем и личными финансами.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 ${social.color} transition-all`}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Продукт
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Платформа
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.platform.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Finance Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Финансы
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.finance.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Инструменты
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.tools.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learning Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Обучение
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.learning.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brokers Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Интеграции
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.brokers.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Компания
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Поддержка
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developers Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Разработчикам
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.developers.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                                    >
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mb-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
                        Юридическое
                    </h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {footerLinks.legal.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block relative group"
                            >
                                <span className="relative">
                                    {link.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            © {new Date().getFullYear()} eebook. Все права защищены.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <p className="text-slate-500 dark:text-slate-500">
                                Сделано с ❤️ для инвесторов
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-slate-600 dark:text-slate-400">
                                    Все системы работают
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
