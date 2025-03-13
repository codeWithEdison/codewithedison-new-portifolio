
import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy";
  hoverEffect?: boolean;
  border?: boolean;
}

export function GlassPanel({
  className,
  children,
  intensity = "medium",
  hoverEffect = false,
  border = true,
  ...props
}: GlassPanelProps) {
  // Configure blur intensity
  const blurIntensity = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    heavy: "backdrop-blur-lg",
  };
  
  // Configure background opacity
  const bgOpacity = {
    light: "bg-white/10 dark:bg-white/5",
    medium: "bg-white/20 dark:bg-white/10",
    heavy: "bg-white/30 dark:bg-white/15",
  };

  return (
    <div
      className={cn(
        "rounded-xl",
        blurIntensity[intensity],
        bgOpacity[intensity],
        border && "border border-white/20",
        "shadow-lg transition-all duration-300",
        hoverEffect && "hover:shadow-xl hover:scale-[1.01]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({
  className,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <GlassPanel 
      className={cn("p-6", className)} 
      hoverEffect={true}
      {...props}
    >
      {children}
    </GlassPanel>
  );
}
