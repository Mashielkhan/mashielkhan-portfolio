import { cn } from "@/lib/cn";

export function Chip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-chip border border-border px-2.5 py-1 font-mono text-[0.75rem] leading-none text-text-2",
                "transition-colors duration-(--dur-fast) hover:border-border-strong hover:text-text-1",
                className,
            )}
            {...props}
        />
    );
}