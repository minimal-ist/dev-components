import { useId } from "react";

import { cn } from "~/lib/cn";

type StatorMarkProps = {
  /** Slot count. Real stators run 12–48; 36 reads as a genuine profile. */
  slots?: number;
  /** Slowly rotate. Suppressed automatically under prefers-reduced-motion. */
  spin?: boolean;
  className?: string;
};

/**
 * A stator lamination profile, drawn to scale.
 *
 * This is the signature mark of the site: the single punched sheet that every
 * product on the page is a variation of. The geometry is generated rather than
 * traced, so the slot count can change per placement without a new asset.
 */
export function StatorMark({
  slots = 36,
  spin = false,
  className,
}: StatorMarkProps) {
  const maskId = useId();
  const size = 400;
  const centre = size / 2;

  const outerR = 192;
  const slotOuterR = 150;
  const slotInnerR = 96;
  const boreR = 72;

  const slotWidth = 13;
  const neckWidth = 5.5;

  const step = 360 / slots;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("h-full w-full", className)}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width={size} height={size} fill="black" />
          <circle cx={centre} cy={centre} r={outerR} fill="white" />
          <circle cx={centre} cy={centre} r={boreR} fill="black" />
          <g transform={`translate(${centre} ${centre})`}>
            {Array.from({ length: slots }, (_, i) => (
              <g key={i} transform={`rotate(${i * step})`}>
                {/* Slot body — where the winding sits. */}
                <rect
                  x={-slotWidth / 2}
                  y={-slotOuterR}
                  width={slotWidth}
                  height={slotOuterR - slotInnerR}
                  rx={slotWidth / 2}
                  fill="black"
                />
                {/* Neck — the narrow opening down to the bore. */}
                <rect
                  x={-neckWidth / 2}
                  y={-slotInnerR - 2}
                  width={neckWidth}
                  height={slotInnerR - boreR + 6}
                  fill="black"
                />
              </g>
            ))}
          </g>
        </mask>
      </defs>

      <g
        mask={`url(#${maskId})`}
        className={cn(
          spin && "origin-center animate-[stator-spin_120s_linear_infinite]",
        )}
      >
        <circle cx={centre} cy={centre} r={outerR} className="fill-steel-300" />
        <circle
          cx={centre}
          cy={centre}
          r={outerR}
          className="fill-none stroke-steel-500"
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}
