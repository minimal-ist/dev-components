import { useId } from "react";

import { cn } from "~/lib/cn";

type GearProps = {
  /** Tooth count. Real gears in this trade run 12–40. */
  teeth?: number;
  className?: string;
};

/**
 * A single spur gear, generated rather than drawn.
 *
 * Teeth are trapezoids swept around the rim, and the bore and lightening
 * holes are masked out — the same construction as a rotor lamination, which
 * is what this company actually punches.
 */
function Gear({ teeth = 24, className }: GearProps) {
  const maskId = useId();
  const size = 200;
  const c = size / 2;

  const rTip = 96;
  const rRoot = 78;
  const rBore = 22;
  const rHoles = 52;

  const step = 360 / teeth;
  const toothWidth = (Math.PI * 2 * rRoot) / teeth / 2.1;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={cn("h-full w-full", className)} aria-hidden="true">
      <defs>
        <mask id={maskId}>
          <rect width={size} height={size} fill="black" />
          <circle cx={c} cy={c} r={rTip} fill="white" />
          {/* Bore */}
          <circle cx={c} cy={c} r={rBore} fill="black" />
          {/* Lightening holes, the way a stamped rotor is relieved */}
          <g transform={`translate(${c} ${c})`}>
            {Array.from({ length: 6 }, (_, i) => (
              <circle
                key={i}
                cx={0}
                cy={-rHoles}
                r={11}
                fill="black"
                transform={`rotate(${i * 60})`}
              />
            ))}
          </g>
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
        <circle cx={c} cy={c} r={rRoot} fill="currentColor" />
        <g transform={`translate(${c} ${c})`}>
          {Array.from({ length: teeth }, (_, i) => (
            <rect
              key={i}
              x={-toothWidth / 2}
              y={-rTip}
              width={toothWidth}
              height={rTip - rRoot + 6}
              rx={2}
              fill="currentColor"
              transform={`rotate(${i * step})`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

type Placed = {
  teeth: number;
  /** Percentages, so the field reflows with the hero instead of being pinned. */
  left: string;
  top: string;
  size: string;
  seconds: number;
  reverse?: boolean;
  opacity: string;
};

/**
 * Meshing gears behind the hero.
 *
 * Sizes and speeds are inversely related the way a real gear train behaves —
 * the small gears turn fastest — which is what stops the field reading as a
 * set of unrelated spinning decorations.
 *
 * The whole field is masked to fade out toward the top so it never reaches the
 * header, and it sits well below the headline in contrast.
 */
const GEARS: Placed[] = [
  { teeth: 28, left: "4%", top: "58%", size: "22rem", seconds: 150, opacity: "0.16" },
  { teeth: 18, left: "26%", top: "12%", size: "13rem", seconds: 95, reverse: true, opacity: "0.13" },
  { teeth: 22, left: "46%", top: "62%", size: "17rem", seconds: 120, opacity: "0.11" },
  { teeth: 14, left: "62%", top: "18%", size: "9rem", seconds: 70, reverse: true, opacity: "0.12" },
  { teeth: 32, left: "78%", top: "70%", size: "26rem", seconds: 190, opacity: "0.10" },
  { teeth: 12, left: "14%", top: "84%", size: "7.5rem", seconds: 58, reverse: true, opacity: "0.14" },
];

export function GearField({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden text-steel-500", className)}
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, #000 34%, #000 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 34%, #000 100%)",
      }}
      aria-hidden="true"
    >
      {GEARS.map((gear, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: gear.left,
            top: gear.top,
            width: gear.size,
            height: gear.size,
            opacity: gear.opacity,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="h-full w-full origin-center"
            style={{
              animation: `${gear.reverse ? "gear-spin-reverse" : "gear-spin"} ${gear.seconds}s linear infinite`,
            }}
          >
            <Gear teeth={gear.teeth} />
          </div>
        </div>
      ))}
    </div>
  );
}
