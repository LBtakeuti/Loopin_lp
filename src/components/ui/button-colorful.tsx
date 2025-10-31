import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative overflow-hidden",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-300",
                "group",
                "hover:scale-105",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-[length:300%_100%]",
                    "bg-gradient-to-r",
                    "from-purple-400 from-[0%]",
                    "via-purple-400 via-[8%]",
                    "via-violet-400 via-[16%]",
                    "via-indigo-400 via-[24%]",
                    "via-blue-400 via-[32%]",
                    "via-sky-400 via-[40%]",
                    "via-cyan-400 via-[48%]",
                    "via-teal-400 via-[56%]",
                    "via-emerald-400 via-[72%]",
                    "via-green-400 via-[88%]",
                    "to-green-400 to-[100%]",
                    "opacity-100",
                    "transition-all duration-500",
                    "group-hover:scale-110 group-hover:brightness-110"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center transition-transform duration-300">
                <span className="text-white dark:text-zinc-900">{label}</span>
            </div>
        </Button>
    );
}
