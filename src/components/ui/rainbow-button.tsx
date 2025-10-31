import React from "react";

import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // before styles - ブラーエフェクト（背面）
        "before:absolute before:bottom-[-30%] before:left-1/2 before:-z-10 before:h-2/5 before:w-4/5 before:-translate-x-1/2",
        "before:bg-[length:300%_100%]",
        "before:bg-gradient-to-r",
        "before:from-purple-400 before:from-[0%]",
        "before:via-purple-400 before:via-[8%]",
        "before:via-violet-400 before:via-[16%]",
        "before:via-indigo-400 before:via-[24%]",
        "before:via-blue-400 before:via-[32%]",
        "before:via-sky-400 before:via-[40%]",
        "before:via-cyan-400 before:via-[48%]",
        "before:via-teal-400 before:via-[56%]",
        "before:via-emerald-400 before:via-[72%]",
        "before:via-green-400 before:via-[88%]",
        "before:to-green-400 before:to-[100%]",
        "before:[filter:blur(1.2rem)]",

        // background gradient - 滑らかな紫→緑のグラデーション
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

        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
