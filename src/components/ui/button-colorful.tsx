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
                    "rounded-md",
                    "bg-gradient-to-r from-purple-400 via-blue-400 to-green-400",
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
