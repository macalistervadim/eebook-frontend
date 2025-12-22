import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/Input.tsx";
import { Button } from "@/components/ui/Button.tsx";
import type { JSX } from "react";
import { motion } from "motion/react";

type PortfoliosFilterProps = {
    searchQuery: string;
    setSearchQuery: (v: string) => void;
};

export const PortfoliosFilter = ({
    searchQuery,
    setSearchQuery,
}: PortfoliosFilterProps): JSX.Element => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
        >
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                    type="text"
                    placeholder="Поиск портфелей..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none w-full pl-11 pr-4 h-12 rounded-xl bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                />
            </div>
            <Button
                type="button"
                variant="outline"
                className="rounded-xl px-4 flex justify-center items-center border-slate-300 dark:border-slate-700 h-12"
            >
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
            </Button>
        </motion.div>
    );
};
