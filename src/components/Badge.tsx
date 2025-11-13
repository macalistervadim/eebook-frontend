import type { JSX } from "react";
import { Sparkles } from "lucide-react";

export default function Badge({
    children,
    bgColor = "bg-emerald-50",
    border = "border border-emerald-100",
    textColor = "text-emerald-600",
    icon = <Sparkles className="w-4 h-4 text-emerald-600" />,
}: {
    children: React.ReactNode;
    bgColor?: string;
    border?: string;
    textColor?: string;
    icon: React.ReactNode;
}): JSX.Element {
    return (
        <div
            className={`inline-flex items-center gap-2 px-4 py-2 
                   ${bgColor} rounded-full ${border} mb-6`}
        >
            {icon}
            <span className={`text-sm ${textColor}`}>{children}</span>
        </div>
    );
}
