import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          "animate-spin rounded-full border-2 border-background border-t-foreground",
          {
            "size-4 border-2": size === "sm",
            "size-5 border-2": size === "default",
            "size-6 border-[3px]": size === "lg"
          },
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
