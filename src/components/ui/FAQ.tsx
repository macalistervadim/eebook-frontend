import type { JSX } from "react";
import AccordionUI from "./Accordion.tsx";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { LucideMessageCircle } from "lucide-react";

const faqs = [
    {
        question: "Как eebook получает доступ к моим данным?",
        answer:
            "Мы используем официальные API брокеров с read-only доступом. " +
            "Это означает, что eebook может только читать информацию о вашем портфеле, " +
            "но не может совершать сделки или выводить средства. " +
            "Все данные передаются по защищенному протоколу с банковским уровнем шифрования.",
    },
    {
        question: "Безопасно ли подключать свои брокерские счета?",
        answer:
            "Абсолютно. Мы используем те же стандарты безопасности, что и крупнейшие банки. " +
            "Данные шифруются, мы не храним пароли от ваших брокерских счетов, " +
            "и имеем сертификацию ISO 27001. Кроме того, подключение " +
            "происходит напрямую через OAuth, что исключает передачу учетных данных третьим лицам.",
    },
    {
        question: "Какие брокеры поддерживаются?",
        answer:
            "На данный момент мы поддерживаем 15+ крупнейших российских брокеров, " +
            "включая Тинькофф, Сбербанк, ВТБ, Альфа-Банк, БКС, Открытие и другие. " +
            "Мы постоянно добавляем новые интеграции. Если вашего брокера нет в списке, " +
            "напишите нам, и мы добавим его в приоритете.",
    },
    {
        question: "Есть ли мобильное приложение?",
        answer:
            "Да! eebook доступен как веб-приложение, так и в виде нативных мобильных " +
            "приложений для iOS и Android. Все данные синхронизируются " +
            "между устройствами в реальном времени.",
    },
    {
        question: "Как работают AI-прогнозы?",
        answer:
            "Наша AI-модель анализирует исторические данные, рыночные тренды, " +
            "макроэкономические показатели и структуру вашего портфеля. " +
            "На основе этого она предоставляет прогнозы доходности и рекомендации " +
            "по оптимизации. Точность прогнозов постоянно улучшается благодаря машинному обучению.",
    },
    {
        question: "Можно ли экспортировать данные?",
        answer:
            "Конечно! Вы можете экспортировать все данные в форматах Excel, CSV и PDF. " +
            "Также доступен полный API для интеграции с " +
            "вашими собственными системами и инструментами анализа.",
    },
    {
        question: "Что включает бесплатный тариф?",
        answer:
            "Бесплатный тариф включает подключение одного брокерского счета, " +
            "до 50 позиций, базовую аналитику, календарь купонов " +
            "и мобильное приложение. Этого достаточно для большинства начинающих инвесторов.",
    },
    {
        question: "Как отменить подписку?",
        answer:
            "Вы можете отменить подписку в любой момент в настройках аккаунта. " +
            "Отмена происходит мгновенно, и с вас не будет взиматься плата " +
            "за следующий период. Все ваши данные сохраняются, и " +
            "вы можете вернуться к платному тарифу когда угодно.",
    },
];

export default function FAQ(): JSX.Element {
    return (
        <section
            id="faq"
            className="max-w-full text-center mx-auto p-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 py-30"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
                        Частые вопросы
                    </h1>
                    <p className="text-slate-600 text-xl mb-25 dark:text-slate-400">
                        Ответы на самые популярные вопросы о eebook
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
            >
                <Accordion.Root
                    type="single"
                    collapsible
                    className="w-full max-w-3xl mx-auto text-left border border-slate-200 rounded-3xl p-10 shadow-xl bg-white dark:bg-slate-800 dark:border-slate-700"
                >
                    {faqs.map((faq, index) => (
                        <AccordionUI
                            key={index}
                            index={index}
                            header={faq.question}
                            content={faq.answer}
                        />
                    ))}
                </Accordion.Root>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
            >
                <div
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 border
                 border-emerald-100 rounded-2xl flex text-left gap-6 p-4 py-6 items-center max-w-xl mx-auto mt-10 dark:from-emerald-950 dark:to-teal-950 dark:border-emerald-900"
                >
                    <div className="bg-white p-3 rounded-xl shadow-sm dark:bg-slate-800">
                        <LucideMessageCircle className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-slate-900 mb-1 dark:text-white">
                            Не нашли ответ?
                        </p>
                        <p className="text-slate-600 text-sm dark:text-slate-400">
                            Наша поддержка работает 24/7.{" "}
                            <span className="text-emerald-600 hover:text-emerald-900 hover:cursor-pointer dark:text-emerald-400 dark:hover:text-emerald-800 transition-all">
                                Напишите нам →
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
