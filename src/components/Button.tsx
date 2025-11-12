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
        "hover:bg-slate-200 transition hover:text-slate-700",
    noBg:
        "text-slate-900 rounded-2xl bg-transparent hover:bg-slate-200 " +
        "transition hover:text-slate-700 border-2 border-slate-200 text-sm",
};

export default function Button({
    children,
    typeButton,
    rounded = "rounded-2xl",
    py = "py-4",
    px = "px-4",
}: {
    children: React.ReactNode;
    typeButton: keyof typeof typeBtn;
    rounded?: string;
    py?: string;
    px?: string;
}): JSX.Element {
    return (
        <button className={`${typeBtn[typeButton]} ${py} ${px} ${rounded}`}>
            {children}
        </button>
    );
}
