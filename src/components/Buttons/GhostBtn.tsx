export function GhostBtn({ children }: { children: React.ReactNode }) {
    return (
        <a href="#" className="text-slate-900 h-9 px-3 py-2 rounded-xl bg-transparent
        hover:bg-slate-200 transition hover:text-slate-700"
        >
            {children}
        </a>
    );
}