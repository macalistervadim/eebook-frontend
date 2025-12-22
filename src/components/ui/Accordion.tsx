import type { JSX } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

export default function AccordionUI({
    index,
    header,
    content,
}: {
    index: number;
    header: string;
    content: string;
}): JSX.Element {
    return (
        <Accordion.Item
            value={`item-${index}`}
            className="border-b border-slate-300 dark:border-slate-600"
        >
            <Accordion.Header>
                <Accordion.Trigger
                    className="py-4 text-md  w-full
                flex justify-between items-center group transition-colors text-left"
                >
                    {header}
                    <ChevronDownIcon
                        className="text-slate-500 dark:text-slate-300
                    transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
                className="AccordionContent overflow-hidden text-slate-600 dark:text-slate-300 text-sm
            data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            >
                <div className="pb-4">{content}</div>
            </Accordion.Content>
        </Accordion.Item>
    );
}
