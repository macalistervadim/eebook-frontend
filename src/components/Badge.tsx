import type { JSX } from "react";
import { Sparkles } from "lucide-react";

//<Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />

export default function Badge({
    children,
    className = "",
    icon = "",
}: {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}): JSX.Element {
    return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
            {icon}
            <span className="text-sm">{children}</span>
        </div>
    );
}
