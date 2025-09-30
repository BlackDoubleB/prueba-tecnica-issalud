import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 text-royal-blue-900 md:text-sm outline-none transition-[color,box-shadow,border]",
        "bg-white border border-royal-blue-100 shadow-md shadow-royal-blue-400",
        "text-royal-blue-900 placeholder:text-royal-blue-800/50",
        "h-10 px-3 py-2 rounded-lg",

        "focus-visible:border-royal-blue-600",
        "focus-visible:ring-royal-blue-600/40 focus-visible:ring-[3px]",

        "disabled:opacity-50 disabled:cursor-not-allowed",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",

        className
      )}
      {...props}
    />
  );
}

export { Input };
