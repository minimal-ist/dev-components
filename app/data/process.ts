/**
 * The eight production stages, in order. Source: stampinglaminations.com/operation.
 *
 * The order carries real information — a coil cannot be punched before it is
 * slit — so these are numbered in the UI. Nothing else on the site is.
 *
 * Each stage carries an icon key for the pictographic flow on the Operation
 * page. `image` is the slot for the client's own pictograph: when set, it is
 * rendered instead of the icon. Drop the files into public/images/process/
 * and fill the path here — nothing else changes.
 */

export type StageIcon =
  | "plan"
  | "slit"
  | "batch"
  | "tool"
  | "stamp"
  | "inspect"
  | "pack"
  | "maintain";

export type Stage = {
  id: number;
  name: string;
  body: string;
  icon: StageIcon;
  /** Path under public/, e.g. "/images/process/01-planning.webp". */
  image?: string;
};

export const processStages: Stage[] = [
  {
    id: 1,
    name: "Coil slit planning",
    body: "Widths are planned against the tool and the order so the master coil yields the most parts with the least offcut.",
    icon: "plan",
  },
  {
    id: 2,
    name: "Coils are slit",
    body: "Master coils are slit to the planned widths on the slitting line.",
    icon: "slit",
  },
  {
    id: 3,
    name: "Batchwise slit coils ready",
    body: "Slit coils are batched and staged, traceable to the master coil they came from.",
    icon: "batch",
  },
  {
    id: 4,
    name: "Tool setting and sampling",
    body: "The tool is set into the machine and first-off samples are taken and checked before the run is released.",
    icon: "tool",
  },
  {
    id: 5,
    name: "Stamping and lamination manufacturing",
    body: "Production runs on the machine matched to the product type — progressive, blanking or compound tooling.",
    icon: "stamp",
  },
  {
    id: 6,
    name: "Quality check and control",
    body: "Manufactured stock is checked on the spot and at dispatch against certified instruments.",
    icon: "inspect",
  },
  {
    id: 7,
    name: "Water resistant packing",
    body: "Stock is packed water resistant and made ready for dispatch — silicon steel does not travel well wet.",
    icon: "pack",
  },
  {
    id: 8,
    name: "Tool maintenance",
    body: "Tools are ground and maintained on a schedule, which is what holds the tolerance across a long run.",
    icon: "maintain",
  },
];
