import type { JSX } from "react";
import { Sparkles } from "lucide-react";

export default function Badge({
    children,
    className = "",
    icon = <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
}: {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}): JSX.Element {
    return (
        <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${className}`}
        >
            {icon}
            <span className="text-sm">{children}</span>
        </div>
    );
}
