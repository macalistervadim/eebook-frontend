"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    BookOpen,
    Search,
    Code,
    Zap,
    Shield,
    ChevronRight,
    Copy,
    CheckCircle2,
    Terminal,
    Layers,
    GitBranch,
    Sparkles,
    ExternalLink,
    ChevronDown,
    AlertCircle,
    Hash,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { LandingHeader } from "@/components/landing/LandingHeader.tsx";
import Footer from "@/components/ui/Footer.tsx";

const sidebarSections = [
    {
        title: "Введение",
        icon: BookOpen,
        items: [
            { id: "intro", label: "Introduction" },
            { id: "getting-started", label: "Начало работы" },
            { id: "quick-start", label: "Быстрый старт" },
            { id: "authentication", label: "Аутентификация" },
        ],
    },
    {
        title: "Портфели",
        icon: Layers,
        expanded: true,
        items: [
            { id: "get-portfolios", label: "Получить список портфелей", method: "GET" },
            { id: "create-portfolio", label: "Создать портфель", method: "POST" },
            { id: "get-portfolio", label: "Получить портфель", method: "GET" },
            { id: "update-portfolio", label: "Обновить портфель", method: "PUT" },
            { id: "delete-portfolio", label: "Удалить портфель", method: "DELETE" },
        ],
    },
    {
        title: "Транзакции",
        icon: GitBranch,
        items: [
            { id: "get-transactions", label: "Получить транзакции", method: "GET" },
            { id: "create-transaction", label: "Создать транзакцию", method: "POST" },
            {
                id: "import-transactions",
                label: "Импортировать транзакции",
                method: "POST",
            },
        ],
    },
    {
        title: "Аналитика",
        icon: Sparkles,
        items: [
            { id: "portfolio-stats", label: "Статистика портфеля", method: "GET" },
            { id: "performance", label: "Производительность", method: "GET" },
            { id: "risk-metrics", label: "Метрики риска", method: "GET" },
        ],
    },
    {
        title: "Вебхуки",
        icon: Zap,
        items: [
            { id: "webhooks-overview", label: "Обзор вебхуков" },
            { id: "setup-webhook", label: "Настройка вебхука", method: "POST" },
            { id: "webhook-events", label: "События вебхуков" },
        ],
    },
];

// Оглавление текущей страницы
const pageTableOfContents = [
    { id: "description", label: "Описание" },
    { id: "authorization", label: "Авторизация" },
    { id: "query-parameters", label: "Query параметры" },
    { id: "restrictions", label: "Ограничения" },
    { id: "request-example", label: "Пример запроса" },
    { id: "response-example", label: "Пример ответа" },
];

export default function DocumentationPage() {
    const [selectedItem, setSelectedItem] = useState("get-portfolios");
    const [copiedCode, setCopiedCode] = useState(false);
    const [expandedSections, setExpandedSections] = useState(["Портфели"]);
    const [selectedLanguage, setSelectedLanguage] = useState("curl");
    const [activeSection, setActiveSection] = useState("description");

    const handleCopyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    const toggleSection = (title: string) => {
        setExpandedSections((prev) =>
            prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
        );
    };

    const getMethodColor = (method: string) => {
        const colors = {
            GET: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
            POST: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
            PUT: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
            DELETE: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
        };
        return colors[method as keyof typeof colors] || "";
    };

    const codeExamples = {
        curl: `curl -X GET "https://api.eebook.io/v1/portfolios" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

        javascript: `const response = await fetch('https://api.eebook.io/v1/portfolios', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const portfolios = await response.json();
console.log(portfolios);`,

        python: `import requests

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

        php: `<?php
$client = new GuzzleHttp\\Client();

$response = $client->request('GET', 
    'https://api.eebook.io/v1/portfolios', [
    'headers' => [
        'Authorization' => 'Bearer YOUR_API_KEY',
        'Content-Type' => 'application/json',
    ],
]);

echo $response->getBody();`,
    };

    const responseExample = `{
  "portfolios": [
    {
      "id": "port_1234567890",
      "name": "Основной портфель",
      "currency": "RUB",
      "total_value": 1250000,
      "daily_change": 2.3,
      "total_return": 18.5,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 3,
  "page": 1,
  "per_page": 20
}`;

    return (
        <div id="docs" className="min-h-screen bg-white dark:bg-slate-950">
            <LandingHeader />
            <div className="flex">
                {/* Sidebar - Fixed within docs section */}
                <aside className="w-72 border-r py-20 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 sticky top-0 h-screen overflow-y-auto">
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-slate-900 dark:text-white">
                                    eebook API
                                </h2>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                    v1.0.0
                                </p>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input
                                placeholder="Поиск..."
                                className="pl-10 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-sm"
                            />
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-1">
                            {sidebarSections.map((section, sectionIndex) => {
                                const Icon = section.icon;
                                const isExpanded = expandedSections.includes(
                                    section.title
                                );

                                return (
                                    <div key={sectionIndex}>
                                        <button
                                            onClick={() => toggleSection(section.title)}
                                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-4 h-4" />
                                                <span>{section.title}</span>
                                            </div>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    isExpanded ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="ml-6 mt-1 space-y-1">
                                                        {section.items.map(
                                                            (item, itemIndex) => (
                                                                <button
                                                                    key={itemIndex}
                                                                    onClick={() =>
                                                                        setSelectedItem(
                                                                            item.id
                                                                        )
                                                                    }
                                                                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${
                                                                        selectedItem ===
                                                                        item.id
                                                                            ? "bg-emerald-600 text-white"
                                                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                                                    }`}
                                                                >
                                                                    <span className="text-left flex-1">
                                                                        {item.label}
                                                                    </span>
                                                                    {item.method && (
                                                                        <Badge
                                                                            className={`text-xs px-1.5 py-0 border-0 ml-2 ${
                                                                                selectedItem ===
                                                                                item.id
                                                                                    ? "bg-white/20 text-white"
                                                                                    : getMethodColor(
                                                                                          item.method
                                                                                      )
                                                                            }`}
                                                                        >
                                                                            {item.method}
                                                                        </Badge>
                                                                    )}
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main Content - with left margin for sidebar */}
                <main className="flex-1">
                    <div className="flex justify-center">
                        {/* Documentation Content */}
                        <div className="flex-1 p-12 py-30 max-w-4xl mx-auto">
                            <motion.div
                                key={selectedItem}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Header */}
                                <div className="mb-8" id="top">
                                    <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-0 mb-4">
                                        Портфели
                                    </Badge>
                                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                        Получить список портфелей
                                    </h1>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                                        Возвращает список всех портфелей пользователя с
                                        базовой информацией о каждом.
                                    </p>
                                </div>

                                {/* Environment Tabs */}
                                <div className="mb-6">
                                    <Tabs defaultValue="production" className="w-full">
                                        <TabsList className="bg-slate-100 dark:bg-slate-800">
                                            <TabsTrigger value="production">
                                                Production
                                            </TabsTrigger>
                                            <TabsTrigger value="sandbox">
                                                Sandbox
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>

                                {/* Endpoint */}
                                <Card className="p-6 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl mb-10">
                                    <div className="flex items-center gap-3">
                                        <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-0 font-mono text-xs px-3 py-1">
                                            GET
                                        </Badge>
                                        <code className="text-sm font-mono text-slate-900 dark:text-white">
                                            https://api.eebook.io/v1/portfolios
                                        </code>
                                    </div>
                                </Card>

                                {/* Description */}
                                <div className="mb-10" id="description">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Описание
                                        <a
                                            href="#description"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>
                                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                                        Возвращает результат запроса для метода{" "}
                                        <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono text-emerald-600 dark:text-emerald-400">
                                            Получить список портфелей
                                        </code>
                                        . Результат создания запроса для данного метода
                                        появляется в течение двух дней.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Чтобы использовать метод, нужно{" "}
                                        <a
                                            href="#"
                                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                                        >
                                            получить доступ
                                        </a>{" "}
                                        к API. Добавление и получение информации о
                                        портфелях доступно всем пользователям с активной
                                        подпиской.
                                    </p>
                                </div>

                                {/* Authorization */}
                                <div className="mb-10" id="authorization">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Авторизация
                                        <a
                                            href="#authorization"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                                        <div className="flex gap-3">
                                            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                                                    Security
                                                </p>
                                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                                    <a
                                                        href="#"
                                                        className="underline hover:text-blue-600 font-medium"
                                                    >
                                                        Bearer API Token
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Query Parameters */}
                                <div className="mb-10" id="query-parameters">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Query параметры
                                        <a
                                            href="#query-parameters"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: "page",
                                                type: "integer",
                                                optional: true,
                                                description:
                                                    "Номер страницы для пагинации. По умолчанию: 1",
                                            },
                                            {
                                                name: "per_page",
                                                type: "integer",
                                                optional: true,
                                                description:
                                                    "Количество элементов на странице. По умолчанию: 20, максимум: 100",
                                            },
                                            {
                                                name: "sort",
                                                type: "string",
                                                optional: true,
                                                description: "Сортировка результатов",
                                                options: [
                                                    {
                                                        value: "created_at",
                                                        label: "по дате создания",
                                                    },
                                                    {
                                                        value: "name",
                                                        label: "по названию",
                                                    },
                                                    {
                                                        value: "value",
                                                        label: "по стоимости",
                                                    },
                                                ],
                                            },
                                        ].map((param, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
                                            >
                                                <div className="px-5 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <code className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
                                                            {param.name}
                                                        </code>
                                                        <Badge className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 text-xs">
                                                            {param.type}
                                                        </Badge>
                                                        {param.optional && (
                                                            <Badge className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 text-xs">
                                                                optional
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="px-5 py-4">
                                                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                                        {param.description}
                                                    </p>
                                                    {param.options && (
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 ml-2 mt-3">
                                                            {param.options.map(
                                                                (option, optIdx) => (
                                                                    <li key={optIdx}>
                                                                        <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                                                                            {option.value}
                                                                        </code>{" "}
                                                                        — {option.label}
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Restrictions */}
                                <div className="mb-10" id="restrictions">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Ограничения
                                        <a
                                            href="#restrictions"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>
                                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                                        <div className="flex gap-3">
                                            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                            <div className="text-sm text-amber-900 dark:text-amber-100">
                                                <p>
                                                    <strong>1 запрос в секунду.</strong>{" "}
                                                    При превышении лимита API вернёт
                                                    ошибку{" "}
                                                    <code className="bg-amber-100 dark:bg-amber-800 px-2 py-0.5 rounded font-mono">
                                                        429 Too Many Requests
                                                    </code>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Request Example */}
                                <div className="mb-10" id="request-example">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Пример запроса
                                        <a
                                            href="#request-example"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>

                                    {/* Language Tabs */}
                                    <div className="mb-4">
                                        <Tabs
                                            value={selectedLanguage}
                                            onValueChange={setSelectedLanguage}
                                        >
                                            <TabsList className="bg-slate-100 dark:bg-slate-800">
                                                <TabsTrigger value="curl">
                                                    cURL
                                                </TabsTrigger>
                                                <TabsTrigger value="javascript">
                                                    JavaScript
                                                </TabsTrigger>
                                                <TabsTrigger value="python">
                                                    Python
                                                </TabsTrigger>
                                                <TabsTrigger value="php">PHP</TabsTrigger>
                                            </TabsList>
                                        </Tabs>
                                    </div>

                                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-slate-400" />
                                                <span className="text-sm text-slate-300">
                                                    Request
                                                </span>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    handleCopyCode(
                                                        codeExamples[
                                                            selectedLanguage as keyof typeof codeExamples
                                                        ]
                                                    )
                                                }
                                                className="text-slate-400 hover:text-white hover:bg-slate-800 h-8"
                                            >
                                                {copiedCode ? (
                                                    <>
                                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                                        Скопировано
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4 mr-2" />
                                                        Копировать
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                        <pre className="p-5 overflow-x-auto">
                                            <code className="text-sm text-slate-300 font-mono leading-relaxed">
                                                {
                                                    codeExamples[
                                                        selectedLanguage as keyof typeof codeExamples
                                                    ]
                                                }
                                            </code>
                                        </pre>
                                    </div>
                                </div>

                                {/* Response Example */}
                                <div className="mb-10" id="response-example">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                                        Пример ответа
                                        <a
                                            href="#response-example"
                                            className="text-slate-400 hover:text-emerald-600"
                                        >
                                            <Hash className="w-5 h-5" />
                                        </a>
                                    </h2>

                                    <Tabs defaultValue="200" className="mb-4">
                                        <TabsList className="bg-slate-100 dark:bg-slate-800">
                                            <TabsTrigger value="200">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                    200
                                                </div>
                                            </TabsTrigger>
                                            <TabsTrigger value="400">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    400
                                                </div>
                                            </TabsTrigger>
                                            <TabsTrigger value="401">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    401
                                                </div>
                                            </TabsTrigger>
                                            <TabsTrigger value="429">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    429
                                                </div>
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>

                                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                                        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
                                            <div className="flex items-center gap-2">
                                                <Code className="w-4 h-4 text-slate-400" />
                                                <span className="text-sm text-slate-300">
                                                    Content type
                                                </span>
                                                <Badge className="bg-slate-800 text-slate-300 border-slate-700 text-xs ml-2">
                                                    application/json
                                                </Badge>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    handleCopyCode(responseExample)
                                                }
                                                className="text-slate-400 hover:text-white hover:bg-slate-800 h-8"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <pre className="p-5 overflow-x-auto">
                                            <code className="text-sm text-slate-300 font-mono leading-relaxed">
                                                {responseExample}
                                            </code>
                                        </pre>
                                    </div>
                                </div>

                                {/* Help Box */}
                                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                                    <div className="flex gap-4">
                                        <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                                Нужна помощь?
                                            </h4>
                                            <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                                                Посмотрите дополнительные примеры в нашем
                                                GitHub репозитории или свяжитесь с
                                                поддержкой.
                                            </p>
                                            <div className="flex gap-3">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Открыть примеры
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Table of Contents - Right Sidebar */}
                        <aside className="w-64 py-30 border-l border-slate-200 dark:border-slate-800 p-6 sticky top-0 h-screen overflow-y-auto hidden xl:block">
                            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                                На этой странице
                            </h3>
                            <nav className="space-y-2">
                                {pageTableOfContents.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveSection(item.id);
                                            document
                                                .getElementById(item.id)
                                                ?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${
                                            activeSection === item.id
                                                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-medium"
                                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </aside>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
