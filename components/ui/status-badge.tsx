import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        success: "status-success",
        warning: "status-warning", 
        info: "status-info",
        error: "status-error",
        gis: "bg-gis-primary/10 text-gis-primary border-gis-primary/20",
        health: "bg-health-primary/10 text-health-primary border-health-primary/20",
        ai: "bg-ai-primary/10 text-ai-primary border-ai-primary/20",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      animated: {
        true: "animate-pulse-soft",
        false: "",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "md",
      animated: false,
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  asChild?: boolean
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, variant, size, animated, ...props }, ref) => {
    return (
      <div
        className={cn(statusBadgeVariants({ variant, size, animated, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export { StatusBadge, statusBadgeVariants } 