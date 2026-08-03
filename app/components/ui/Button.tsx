import { Link } from "react-router";

import { cn } from "~/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 font-mono text-xs " +
  "tracking-[0.14em] uppercase transition-colors duration-200 ease-(--ease-out-quint)";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-deep",
  outline: "border border-steel-400 text-ink hover:border-ink hover:bg-ink hover:text-sheet",
  ghost: "text-ink underline decoration-steel-400 underline-offset-[6px] hover:decoration-accent",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps & { to: string } & Omit<React.ComponentProps<typeof Link>, "to" | "className">) {
  const external = to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={to}
        className={cn(base, variants[variant], className)}
        {...(to.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
