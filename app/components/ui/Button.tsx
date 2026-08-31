import { Link } from "react-router";

import { cn } from "~/lib/cn";

type Variant = "primary" | "outline" | "outlineDark" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-base font-semibold " +
  "transition-[color,background-color,border-color,filter] duration-200 ease-(--ease-out-quint)";

const variants: Record<Variant, string> = {
  primary: "accent-fill text-on-accent hover:brightness-95",
  // Same crimson as primary, so a second action reads as equally important.
  // Outlined rather than a second solid fill: two identical solid buttons
  // compete for the same click and read as a mistake.
  outline:
    "border border-accent text-accent-ink hover:bg-accent hover:text-on-accent",
  // On a dark band the navy outline text disappears; this one inverts.
  outlineDark:
    "border border-white/30 text-sheet hover:border-white hover:bg-sheet hover:text-ink",
  ghost:
    "text-ink underline decoration-steel-400 underline-offset-[6px] hover:decoration-accent",
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
}: ButtonProps & { to: string } & Omit<
    React.ComponentProps<typeof Link>,
    "to" | "className"
  >) {
  const external =
    to.startsWith("http") || to.startsWith("tel:") || to.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={to}
        className={cn(base, variants[variant], className)}
        {...(to.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      viewTransition
      className={cn(base, variants[variant], className)}
      {...props}
    >
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
