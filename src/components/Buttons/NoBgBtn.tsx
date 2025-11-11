export function NoBgBtn({ children }: { children: React.ReactNode }) {
    return (
        <a
            href="#"
            className="text-slate-900 px-4 py-4 rounded-2xl bg-transparent hover:bg-slate-200 transition hover:text-slate-700 border-2 border-slate-200 text-sm"
        >
            {children}
        </a>
    );
}