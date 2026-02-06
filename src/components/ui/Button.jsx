import * as React from "react"
import { cn } from "../../lib/utils"
// removed cva import as we will stick to simple props for now to keep it lightweight if cva is not installed, 
// using simple switch case or object map for variants. 
// Actually, let's use a simpler approach without 'class-variance-authority' dep unless requested.

const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {

    const variants = {
        default: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
        secondary: "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:text-slate-50",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-primary underline-offset-4 hover:underline",
    }

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-xl px-8 text-lg",
        icon: "h-10 w-10",
    }

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})
Button.displayName = "Button"

export { Button }
