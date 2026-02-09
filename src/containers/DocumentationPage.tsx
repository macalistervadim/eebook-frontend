"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    BookOpen,
    Search,
    Code,
    Zap,
    ChevronRight,
    Copy,
    CheckCircle2,
    Layers,
    FileCode,
    Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/Button.tsx";
import { Card } from "../components/ui/Card.tsx";
import { Badge } from "../components/ui/Badge.tsx";
import { Input } from "../components/ui/Input.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs.tsx";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";

const sidebarSections = [
    {
        title: "Введение",
        items: [
            { id: "what-is-eebook", label: "Что такое eebook?" },
            { id: "getting-started", label: "Начало работы" },
            { id: "quick-start", label: "Быстрый старт" },
        ],
    },
    {
        title: "Основы",
        items: [
            { id: "portfolios", label: "Портфели" },
            { id: "assets", label: "Активы" },
            { id: "transactions", label: "Транзакции" },
            { id: "analytics", label: "Аналитика" },
        ],
    },
    {
        title: "API Reference",
        items: [
            { id: "api-overview", label: "Обзор API" },
            { id: "authentication", label: "Аутентификация" },
            { id: "endpoints", label: "Endpoints" },
            { id: "webhooks", label: "Webhooks" },
        ],
    },
    {
        title: "Интеграции",
        items: [
            { id: "brokers", label: "Брокеры" },
            { id: "import-export", label: "Импорт/Экспорт" },
            { id: "third-party", label: "Сторонние сервисы" },
        ],
    },
    {
        title: "Расширенные возможности",
        items: [
            { id: "ai-predictions", label: "AI прогнозы" },
            { id: "custom-metrics", label: "Кастомные метрики" },
            { id: "automation", label: "Автоматизация" },
        ],
    },
];

const codeExamples = {
    javascript: `// Получение списка портфелей
const response = await fetch('https://api.eebook.io/v1/portfolios', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const portfolios = await response.json();
console.log(portfolios);`,
    python: `# Получение списка портфелей
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.eebook.io/v1/portfolios',
    headers=headers
)

portfolios = response.json()
print(portfolios)`,
    curl: `# Получение списка портфелей
curl -X GET "https://api.eebook.io/v1/portfolios" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
};

const quickLinks = [
    {
        title: "Быстрый старт",
        description: "Начните работу за 5 минут",
        icon: Zap,
        link: "#quick-start",
    },
    {
        title: "API Reference",
        description: "Полная документация API",
        icon: Code,
        link: "#api-overview",
    },
    {
        title: "Примеры",
        description: "Готовые примеры кода",
        icon: FileCode,
        link: "#examples",
    },
    {
        title: "Интеграции",
        description: "Подключение брокеров",
        icon: Layers,
        link: "#brokers",
    },
];

export default function DocumentationPage() {
    const [activeSection, setActiveSection] = useState("what-is-eebook");
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedCode, setCopiedCode] = useState(false);
    const [activeCodeTab, setActiveCodeTab] =
        useState<keyof typeof codeExamples>("javascript");

    const handleCopyCode = () => {
        navigator.clipboard.writeText(codeExamples[activeCodeTab]);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    return (
        <section className="min-h-screen bg-white dark:bg-slate-900 ">
            <LandingHeader />
            <div className="border-b border-slate-200 dark:border-slate-800 pt-25">
                <div className="container mx-auto px-4 max-w-7xl py-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl">
                                <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h1 className="text-slate-900 dark:text-white">
                                    Документация
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Полное руководство по использованию eebook
                                </p>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative max-w-2xl">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="text"
                                placeholder="Поиск в документации..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
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
                        <div className="sticky top-24 space-y-8">
                            {sidebarSections.map((section) => (
                                <div key={section.title}>
                                    <h3 className="text-sm text-slate-900 dark:text-white mb-3 px-3">
                                        {section.title}
                                    </h3>
                                    <nav className="space-y-1">
                                        {section.items.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setActiveSection(item.id)}
                                                className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${
                                                    activeSection === item.id
                                                        ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            ))}
                        </div>
                    </motion.aside>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-4 space-y-12"
                    >
                        {/* What is eebook */}
                        {activeSection === "what-is-eebook" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-slate-900 dark:text-white mb-4">
                                        Что такое eebook?
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                                        eebook — это современный инвестиционный помощник,
                                        который работает как надстройка над вашими
                                        брокерами. Мы помогаем управлять портфелями,
                                        отслеживать динамику активов и получать
                                        AI-прогнозы в едином интерфейсе.
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Платформа предоставляет централизованный доступ ко
                                        всем вашим инвестициям, автоматическую
                                        синхронизацию с брокерами, продвинутую аналитику и
                                        интеллектуальные прогнозы на основе машинного
                                        обучения.
                                    </p>
                                </div>

                                {/* Quick Links Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {quickLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.div
                                                key={link.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.05 }}
                                            >
                                                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all cursor-pointer group">
                                                    <div className="flex items-start gap-4">
                                                        <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                                                            <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-slate-900 dark:text-white mb-1">
                                                                {link.title}
                                                            </h3>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                                                    </div>
                                                </Card>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Features */}
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-4">
                                        Ключевые возможности
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "Автоматическая синхронизация с российскими брокерами",
                                            "Консолидированный портфель из всех счетов",
                                            "AI-прогнозы доходности и рисков",
                                            "Расширенная аналитика и метрики",
                                            "Календарь дивидендов и купонов",
                                            "REST API для интеграции",
                                        ].map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Quick Start */}
                        {activeSection === "quick-start" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-slate-900 dark:text-white mb-4">
                                        Быстрый старт
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        Начните работу с eebook за несколько простых шагов
                                    </p>
                                </div>

                                {/* Steps */}
                                <div className="space-y-6">
                                    {[
                                        {
                                            number: "01",
                                            title: "Создайте аккаунт",
                                            description:
                                                "Зарегистрируйтесь на платформе, используя email или OAuth",
                                            code: null,
                                        },
                                        {
                                            number: "02",
                                            title: "Подключите брокера",
                                            description:
                                                "Добавьте API-ключ вашего брокера для автоматической синхронизации",
                                            code: `{
  "broker": "tinkoff",
  "api_token": "YOUR_BROKER_TOKEN"
}`,
                                        },
                                        {
                                            number: "03",
                                            title: "Создайте портфель",
                                            description:
                                                "Настройте портфель и начните отслеживать активы",
                                            code: `POST /api/v1/portfolios
{
  "name": "Основной портфель",
  "description": "Мой первый портфель",
  "broker_id": "uuid-here"
}`,
                                        },
                                    ].map((step, index) => (
                                        <motion.div
                                            key={step.number}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                                        >
                                            <div className="absolute -left-[17px] top-0 w-8 h-8 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">
                                                {step.number}
                                            </div>
                                            <div className="pb-8">
                                                <h3 className="text-slate-900 dark:text-white mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                                    {step.description}
                                                </p>
                                                {step.code && (
                                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 overflow-x-auto">
                                                        <pre className="text-emerald-400 text-sm">
                                                            <code>{step.code}</code>
                                                        </pre>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <Card className="p-6 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-800">
                                    <div className="flex gap-3">
                                        <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-slate-900 dark:text-white mb-2">
                                                Совет
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Рекомендуем начать с подключения одного
                                                брокера и создания тестового портфеля,
                                                чтобы познакомиться с функционалом
                                                платформы.
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}

                        {/* API Overview */}
                        {activeSection === "api-overview" && (
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <h2 className="text-slate-900 dark:text-white">
                                            Обзор API
                                        </h2>
                                        <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0">
                                            v1.0
                                        </Badge>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        RESTful API для программного доступа к вашим
                                        портфелям и аналитике
                                    </p>
                                </div>

                                {/* Base URL */}
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-3">
                                        Base URL
                                    </h3>
                                    <Card className="p-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                        <div className="flex items-center justify-between">
                                            <code className="text-emerald-600 dark:text-emerald-400">
                                                https://api.eebook.io/v1
                                            </code>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={handleCopyCode}
                                            >
                                                {copiedCode ? (
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </Card>
                                </div>

                                {/* Authentication */}
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-3">
                                        Аутентификация
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        Все API запросы требуют Bearer токен в заголовке
                                        Authorization:
                                    </p>
                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4">
                                        <code className="text-emerald-400 text-sm">
                                            Authorization: Bearer YOUR_API_KEY
                                        </code>
                                    </div>
                                </div>

                                {/* Code Example */}
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-3">
                                        Пример запроса
                                    </h3>
                                    <Tabs
                                        value={activeCodeTab}
                                        onValueChange={(v) =>
                                            setActiveCodeTab(
                                                v as keyof typeof codeExamples
                                            )
                                        }
                                    >
                                        <TabsList className="mb-4">
                                            <TabsTrigger value="javascript">
                                                JavaScript
                                            </TabsTrigger>
                                            <TabsTrigger value="python">
                                                Python
                                            </TabsTrigger>
                                            <TabsTrigger value="curl">cURL</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value={activeCodeTab}>
                                            <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 relative group">
                                                <pre className="text-emerald-400 text-sm overflow-x-auto">
                                                    <code>
                                                        {codeExamples[activeCodeTab]}
                                                    </code>
                                                </pre>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/10"
                                                    onClick={handleCopyCode}
                                                >
                                                    {copiedCode ? (
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    ) : (
                                                        <Copy className="w-4 h-4" />
                                                    )}
                                                </Button>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>

                                {/* Rate Limits */}
                                <div>
                                    <h3 className="text-slate-900 dark:text-white mb-3">
                                        Ограничения
                                    </h3>
                                    <div className="grid gap-3">
                                        {[
                                            { plan: "Free", limit: "100 req/hour" },
                                            { plan: "Pro", limit: "1,000 req/hour" },
                                            { plan: "Enterprise", limit: "Custom" },
                                        ].map((item) => (
                                            <Card
                                                key={item.plan}
                                                className="p-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-900 dark:text-white">
                                                        {item.plan}
                                                    </span>
                                                    <Badge variant="secondary">
                                                        {item.limit}
                                                    </Badge>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Brokers Integration */}
                        {activeSection === "brokers" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-slate-900 dark:text-white mb-4">
                                        Подключение брокеров
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        eebook поддерживает автоматическую синхронизацию с
                                        крупнейшими российскими брокерами
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            name: "Т-Инвестиции",
                                            status: "available",
                                            emoji: "🏦",
                                        },
                                        {
                                            name: "Сбербанк Инвестор",
                                            status: "available",
                                            emoji: "🟢",
                                        },
                                        {
                                            name: "ВТБ Мои Инвестиции",
                                            status: "available",
                                            emoji: "🔵",
                                        },
                                        {
                                            name: "Альфа-Инвестиции",
                                            status: "available",
                                            emoji: "🔴",
                                        },
                                        {
                                            name: "БКС Брокер",
                                            status: "soon",
                                            emoji: "⚪",
                                        },
                                        {
                                            name: "Открытие Брокер",
                                            status: "soon",
                                            emoji: "🟠",
                                        },
                                    ].map((broker) => (
                                        <Card
                                            key={broker.name}
                                            className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl">
                                                        {broker.emoji}
                                                    </span>
                                                    <span className="text-slate-900 dark:text-white">
                                                        {broker.name}
                                                    </span>
                                                </div>
                                                <Badge
                                                    className={
                                                        broker.status === "available"
                                                            ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-0"
                                                            : "bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-0"
                                                    }
                                                >
                                                    {broker.status === "available"
                                                        ? "Доступно"
                                                        : "Скоро"}
                                                </Badge>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
