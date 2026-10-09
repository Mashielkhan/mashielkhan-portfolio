import { cn } from "@/lib/cn";

const sizes = {
  page: "max-w-page",
  wide: "max-w-wide",
  copy: "max-w-copy",
} as const;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizes;
};

export function Container({ size = "page", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-8 xl:px-12", sizes[size], className)}
      {...props}
    />
  );
}
