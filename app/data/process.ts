/**
 * The eight production stages, in order. Source: stampinglaminations.com/operation.
 *
 * The order carries real information — a coil cannot be punched before it is
 * slit — so these are numbered in the UI. Nothing else on the site is.
 */

export type Stage = {
  id: number;
  name: string;
  body: string;
};

export const processStages: Stage[] = [
  {
    id: 1,
    name: "Coil slit planning",
    body: "Widths are planned against the tool and the order so the master coil yields the most parts with the least offcut.",
  },
  {
    id: 2,
    name: "Coils are slit",
    body: "Master coils are slit to the planned widths on the slitting line.",
  },
  {
    id: 3,
    name: "Batchwise slit coils ready",
    body: "Slit coils are batched and staged, traceable to the master coil they came from.",
  },
  {
    id: 4,
    name: "Tool setting and sampling",
    body: "The tool is set into the machine and first-off samples are taken and checked before the run is released.",
  },
  {
    id: 5,
    name: "Stamping and lamination manufacturing",
    body: "Production runs on the machine matched to the product type — progressive, blanking or compound tooling.",
  },
  {
    id: 6,
    name: "Quality check and control",
    body: "Manufactured stock is checked on the spot and at dispatch against certified instruments.",
  },
  {
    id: 7,
    name: "Water resistant packing",
    body: "Stock is packed water resistant and made ready for dispatch — silicon steel does not travel well wet.",
  },
  {
    id: 8,
    name: "Tool maintenance",
    body: "Tools are ground and maintained on a schedule, which is what holds the tolerance across a long run.",
  },
];
