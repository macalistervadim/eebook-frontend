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
        <Accordion.Item value={`item-${index}`} className="border-b border-slate-300">
            <Accordion.Header>
                <Accordion.Trigger
                    className="py-4 text-md font-medium w-full
                flex justify-between items-center group transition-colors"
                >
                    {header}
                    <ChevronDownIcon
                        className="text-slate-500
                    transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
                className="AccordionContent overflow-hidden text-slate-600
            data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            >
                <div className="pb-4">{content}</div>
            </Accordion.Content>
        </Accordion.Item>
    );
}
