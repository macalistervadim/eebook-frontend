export function EmeraldBtn({
       children,
       rounded = "rounded-2xl",
       py = "py-4",
       px = "px-4",
    }: {
    children: React.ReactNode;
    rounded?: string;
    py?: string;
    px?: string;
}) {
    return (
        <a
            href="#"
            className={`text-white ${px} ${py} ${rounded} bg-gradient-to-r from-emerald-600
      to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl
      hover:shadow-emerald-500/30 transition-all text-sm text-center inline-flex items-center justify-center`}
        >
            {children}
        </a>
    );
}
