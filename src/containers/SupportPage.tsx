"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Headphones,
    Send,
    MessageCircle,
    Mail,
    Search,
    Clock,
    CheckCircle2,
    AlertCircle,
    MoreHorizontal,
    Paperclip,
    Phone,
    MessageSquare,
    HelpCircle,
    FileText,
    Zap,
    Users,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs.tsx";
import { Card } from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { Input } from "@/components/ui/Input.tsx";
import { Label } from "@/components/ui/Label.tsx";
import { Textarea } from "@/components/ui/Textarea.tsx";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";

const tickets = [
    {
        id: "TK-12345",
        subject: "Проблема с синхронизацией Т-Инвестиции",
        status: "open",
        priority: "high",
        category: "Техническая проблема",
        created: "2024-12-10",
        lastUpdate: "2 часа назад",
        messages: 3,
    },
    {
        id: "TK-12344",
        subject: "Вопрос по тарифному плану Pro",
        status: "in_progress",
        priority: "medium",
        category: "Биллинг",
        created: "2024-12-09",
        lastUpdate: "1 день назад",
        messages: 5,
    },
    {
        id: "TK-12343",
        subject: "Запрос на добавление нового брокера",
        status: "resolved",
        priority: "low",
        category: "Запрос функции",
        created: "2024-12-05",
        lastUpdate: "3 дня назад",
        messages: 8,
    },
];

const faqCategories = [
    {
        title: "Начало работы",
        icon: Zap,
        questions: [
            {
                q: "Как создать первый портфель?",
                a: "Перейдите в раздел 'Портфели' и нажмите кнопку 'Создать портфель'. Следуйте инструкциям мастера создания.",
            },
            {
                q: "Как подключить брокера?",
                a: "В настройках выберите раздел 'Интеграции', выберите вашего брокера и введите API-ключ.",
            },
        ],
    },
    {
        title: "Биллинг и тарифы",
        icon: FileText,
        questions: [
            {
                q: "Какие тарифные планы доступны?",
                a: "У нас есть Free, Pro и Enterprise планы. Подробнее на странице тарифов.",
            },
            {
                q: "Можно ли отменить подписку?",
                a: "Да, вы можете отменить подписку в любой момент в настройках аккаунта.",
            },
        ],
    },
    {
        title: "Технические вопросы",
        icon: AlertCircle,
        questions: [
            {
                q: "Что делать если данные не синхронизируются?",
                a: "Проверьте срок действия API-ключа и права доступа. Если проблема сохраняется, создайте тикет.",
            },
            {
                q: "Поддерживается ли мобильная версия?",
                a: "Да, веб-версия адаптирована для мобильных устройств. Нативные приложения в разработке.",
            },
        ],
    },
];

const contactMethods = [
    {
        icon: MessageSquare,
        title: "Чат поддержки",
        description: "Онлайн чат с оператором",
        availability: "Пн-Пт 9:00-18:00 МСК",
        action: "Начать чат",
        color: "emerald",
    },
    {
        icon: Mail,
        title: "Email поддержка",
        description: "support@eebook.io",
        availability: "Ответ в течение 24 часов",
        action: "Написать email",
        color: "blue",
    },
    {
        icon: Phone,
        title: "Телефон",
        description: "+7 (495) 123-45-67",
        availability: "Пн-Пт 9:00-18:00 МСК",
        action: "Позвонить",
        color: "purple",
    },
    {
        icon: Users,
        title: "Сообщество",
        description: "Форум и Telegram группа",
        availability: "Круглосуточно",
        action: "Присоединиться",
        color: "amber",
    },
];

export default function SupportPage() {
    const [newTicket, setNewTicket] = useState({
        subject: "",
        category: "",
        priority: "",
        description: "",
    });
    const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "open":
                return (
                    <Badge className="bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-0">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Открыт
                    </Badge>
                );
            case "in_progress":
                return (
                    <Badge className="bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-0">
                        <Clock className="w-3 h-3 mr-1" />В работе
                    </Badge>
                );
            case "resolved":
                return (
                    <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Решен
                    </Badge>
                );
            default:
                return null;
        }
    };

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "high":
                return <Badge variant="destructive">Высокий</Badge>;
            case "medium":
                return <Badge variant="secondary">Средний</Badge>;
            case "low":
                return <Badge variant="outline">Низкий</Badge>;
            default:
                return null;
        }
    };

    return (
        <section className="py-12 bg-white dark:bg-slate-900 min-h-screen">
            <LandingHeader />
            <div className="container mx-auto px-4 max-w-7xl mt-20 mb-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl">
                            <Headphones className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h1 className="text-slate-900 dark:text-white">Поддержка</h1>
                            <p className="text-slate-600 dark:text-slate-400">
                                Мы всегда готовы помочь вам с любыми вопросами
                            </p>
                        </div>
                    </div>
                </motion.div>

                <Tabs defaultValue="contact" className="space-y-8">
                    <TabsList className="grid w-full max-w-2xl grid-cols-3">
                        <TabsTrigger value="contact">Связаться с нами</TabsTrigger>
                        <TabsTrigger value="tickets">Мои обращения</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>

                    {/* Contact Methods */}
                    <TabsContent value="contact" className="space-y-8">
                        {/* Contact Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <motion.div
                                        key={method.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`p-3 rounded-xl ${
                                                        method.color === "emerald"
                                                            ? "bg-emerald-100 dark:bg-emerald-500/10"
                                                            : method.color === "blue"
                                                              ? "bg-blue-100 dark:bg-blue-500/10"
                                                              : method.color === "purple"
                                                                ? "bg-purple-100 dark:bg-purple-500/10"
                                                                : "bg-amber-100 dark:bg-amber-500/10"
                                                    }`}
                                                >
                                                    <Icon
                                                        className={`w-6 h-6 ${
                                                            method.color === "emerald"
                                                                ? "text-emerald-600 dark:text-emerald-400"
                                                                : method.color === "blue"
                                                                  ? "text-blue-600 dark:text-blue-400"
                                                                  : method.color ===
                                                                      "purple"
                                                                    ? "text-purple-600 dark:text-purple-400"
                                                                    : "text-amber-600 dark:text-amber-400"
                                                        }`}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-slate-900 dark:text-white mb-1">
                                                        {method.title}
                                                    </h3>
                                                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                                                        {method.description}
                                                    </p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                                        {method.availability}
                                                    </p>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full"
                                                    >
                                                        {method.action}
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* New Ticket Form */}
                        <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <h3 className="text-slate-900 dark:text-white mb-6">
                                Создать обращение
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                        Тема обращения
                                    </Label>
                                    <Input
                                        placeholder="Кратко опишите вашу проблему"
                                        value={newTicket.subject}
                                        onChange={(e) =>
                                            setNewTicket({
                                                ...newTicket,
                                                subject: e.target.value,
                                            })
                                        }
                                        className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            Категория
                                        </label>
                                        <select
                                            className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                            value={newTicket.category}
                                            onChange={(e) =>
                                                setNewTicket({
                                                    ...newTicket,
                                                    category: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="">Выберите категорию</option>
                                            <option value="technical">
                                                Техническая проблема
                                            </option>
                                            <option value="billing">Биллинг</option>
                                            <option value="feature">
                                                Запрос функции
                                            </option>
                                            <option value="other">Другое</option>
                                        </select>
                                    </div>

                                    <div>
                                        <Label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                            Приоритет
                                        </Label>
                                        <select
                                            className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                                            value={newTicket.priority}
                                            onChange={(e) =>
                                                setNewTicket({
                                                    ...newTicket,
                                                    priority: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="">Выберите приоритет</option>
                                            <option value="low">Низкий</option>
                                            <option value="medium">Средний</option>
                                            <option value="high">Высокий</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                                        Описание проблемы
                                    </label>
                                    <Textarea
                                        placeholder="Подробно опишите вашу проблему или вопрос..."
                                        value={newTicket.description}
                                        onChange={(e) =>
                                            setNewTicket({
                                                ...newTicket,
                                                description: e.target.value,
                                            })
                                        }
                                        className="min-h-[150px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button variant="outline" className="gap-2">
                                        <Paperclip className="w-4 h-4" />
                                        Прикрепить файлы
                                    </Button>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 ml-auto">
                                        <Send className="w-4 h-4 mr-2" />
                                        Отправить обращение
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Tickets List */}
                    <TabsContent value="tickets" className="space-y-6">
                        {tickets.map((ticket, index) => (
                            <motion.div
                                key={ticket.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Badge variant="outline">
                                                    {ticket.id}
                                                </Badge>
                                                {getStatusBadge(ticket.status)}
                                                {getPriorityBadge(ticket.priority)}
                                            </div>
                                            <h3 className="text-slate-900 dark:text-white mb-1">
                                                {ticket.subject}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                                <span>{ticket.category}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {ticket.lastUpdate}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle className="w-4 h-4" />
                                                    {ticket.messages} сообщений
                                                </span>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </Button>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            Просмотреть
                                        </Button>
                                        {ticket.status !== "resolved" && (
                                            <Button variant="ghost" size="sm">
                                                Добавить сообщение
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </TabsContent>

                    {/* FAQ */}
                    <TabsContent value="faq" className="space-y-8">
                        {/* Search */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="text"
                                placeholder="Поиск в базе знаний..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                        </div>

                        {/* FAQ Categories */}
                        <div className="space-y-6">
                            {faqCategories.map((category, catIndex) => {
                                const Icon = category.icon;
                                return (
                                    <div key={category.title}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                                                <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <h3 className="text-slate-900 dark:text-white">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <div className="space-y-3">
                                            {category.questions.map((qa, qaIndex) => {
                                                const faqId = catIndex * 100 + qaIndex;
                                                return (
                                                    <Card
                                                        key={qaIndex}
                                                        className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                setSelectedFAQ(
                                                                    selectedFAQ === faqId
                                                                        ? null
                                                                        : faqId
                                                                )
                                                            }
                                                            className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                                        >
                                                            <span className="text-slate-900 dark:text-white">
                                                                {qa.q}
                                                            </span>
                                                            <HelpCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                                        </button>
                                                        <AnimatePresence>
                                                            {selectedFAQ === faqId && (
                                                                <motion.div
                                                                    initial={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    animate={{
                                                                        height: "auto",
                                                                        opacity: 1,
                                                                    }}
                                                                    exit={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
                                                                        {qa.a}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Footer />
        </section>
    );
}
