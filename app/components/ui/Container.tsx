import { cn } from "~/lib/cn";

type ContainerProps = React.ComponentProps<"div"> & {
  /** `wide` gives the full 1440 measure; `text` narrows to a readable column. */
  width?: "default" | "wide" | "text";
};

export function Container({ width = "default", className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-(--spacing-gutter)",
        width === "default" && "max-w-[82rem]",
        width === "wide" && "max-w-[96rem]",
        width === "text" && "max-w-[46rem]",
        className,
      )}
      {...props}
    />
  );
}
