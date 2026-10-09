import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const button = cva(
  [
    "group/button",
    "inline-flex items-center justify-center gap-2 rounded-card font-medium",
    "transition duration-(--dur-fast) ease-standard",
    "hover:-translate-y-px active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        // white on accent-600 passes 4.5:1; hover uses glow, not a lighter fill
        primary:
          "bg-accent-600 text-white hover:shadow-[0_0_24px_var(--color-accent-glow)] active:bg-accent-700",
        secondary:
          "border border-border bg-transparent text-text-1 hover:border-border-strong hover:bg-bg-3",
        ghost: "text-text-2 hover:text-text-1",
      },
      size: {
        md: "h-9 px-4 text-small",
        lg: "h-11 px-5 text-body",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = VariantProps<typeof button> & {
  className?: string;
  children: ReactNode;
} & (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "href" | "className" | "children"
      >)
    | ({ href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)
  );

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = cn(button({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...anchor } = props;
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={classes} {...anchor}>
          {children}
        </Link>
      );
    }
    const external = !href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...anchor}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
