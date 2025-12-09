import { motion } from "motion/react";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const footerLinks = {
    product: [
        { name: "Функции", href: "/#comparsion" },
        { name: "Интеграции", href: "/#integrations" },
        { name: "Цены", href: "/#price" },
        { name: "Обновления", href: "#" },
    ],
    company: [
        { name: "О нас", href: "/about" },
        { name: "Блог", href: "#" },
        { name: "Карьера", href: "/career" },
        { name: "Контакты", href: "#" },
    ],
    resources: [
        { name: "Документация", href: "#" },
        { name: "API", href: "#" },
        { name: "Поддержка", href: "#" },
        { name: "Статус", href: "#" },
    ],
    legal: [
        { name: "Конфиденциальность", href: "#" },
        { name: "Условия", href: "#" },
        { name: "Безопасность", href: "#" },
        { name: "Cookies", href: "#" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isHash = href.startsWith("/#");

    if (isHash) {
        return (
            <HashLink
                smooth
                to={href}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
                {children}
            </HashLink>
        );
    }

    return (
        <Link
            to={href}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
};

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 w-full">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    <div className="col-span-2">
                        <div className="text-3xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            eebook
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xs">
                            Новое поколение инвестиционных инструментов для умного
                            управления портфелем.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-slate-900 dark:text-white">Продукт</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <FooterLink href={link.href}>{link.name}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-slate-900 dark:text-white">Компания</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <FooterLink href={link.href}>{link.name}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-slate-900 dark:text-white">Ресурсы</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <FooterLink href={link.href}>{link.name}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-slate-900 dark:text-white">
                            Юридическое
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            © 2025 eebook. Все права защищены.
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 text-sm">
                            Сделано с ❤️ для инвесторов
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
