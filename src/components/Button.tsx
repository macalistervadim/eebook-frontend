import React from "react";
import type { JSX } from "react";

const typeBtn: Record<string, string> = {
    emerald:
        "text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700" +
        "hover:to-teal-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl " +
        "hover:shadow-emerald-500/30 transition-all text-sm text-center inline-flex " +
        "items-center justify-center",
    ghost:
        "text-slate-900 rounded-xl bg-transparent " +
        "hover:bg-slate-200 transition hover:text-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
    noBg:
        "text-slate-900 rounded-2xl bg-transparent hover:bg-slate-200 " +
        "transition hover:text-slate-700 border-1 border-slate-300 text-sm " +
        "dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200",
    slate: "bg-slate-900 hover:bg-slate-800 text-white",
};

export default function Button({
    children,
    typeButton,
    className,
    onClick,
}: {
    children: React.ReactNode;
    typeButton: keyof typeof typeBtn;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
    return (
        <button className={`${typeBtn[typeButton]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
