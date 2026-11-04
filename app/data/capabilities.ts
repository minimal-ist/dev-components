/**
 * Manufacturing envelope — the numbers a buyer checks first.
 *
 * Source: the client's brief of 29 October 2026, which supersedes the figures
 * originally transcribed from stampinglaminations.com. Two values changed in
 * that brief and are recorded here as the client wrote them:
 *
 *   - Coil thickness was a single "0.20 – 0.50 mm". It is now split by grade:
 *     0.15 – 0.65 mm for CRNO and 0.23 – 0.35 mm for CRGO.
 *   - Grades handled was "CRGO, CRNGO". It is now the actual grade
 *     designations, again split by material.
 *
 * The brief writes "CRNO" in this table and "CRNGO" in the product-line copy
 * on the page before it. Both are transcribed as written rather than
 * normalised — which spelling the company uses is theirs to settle.
 *
 * Monthly capacity is deliberately absent: the stats band already carries
 * 400+ tons a month, and the client asked for each figure in one place only.
 */

export type Capability = {
  /** Stable key — two entries can share a label. */
  id: string;
  label: string;
  value?: string;
  unit?: string;
  note?: string;
  /**
   * Per-grade breakdown, where the brief gives one value per steel grade
   * rather than a single figure.
   */
  rows?: Array<{ grade: string; value: string }>;
};

export const capabilities: Capability[] = [
  {
    id: "presses",
    label: "High speed presses",
    value: "25T – 200T",
    note: "Press range across the shop floor",
  },
  {
    id: "stamping-diameter",
    label: "Stamping diameter",
    value: "30 – 400",
    unit: "mm",
    note: "Round stampings across the standard tool range",
  },
  {
    id: "ei-range",
    label: "EI lamination range",
    value: "EI19 – EI350",
    note: "Transformer core types",
  },
  {
    id: "coil-thickness",
    label: "Coil thickness",
    rows: [
      { grade: "CRNO", value: "0.15 – 0.65 mm" },
      { grade: "CRGO", value: "0.23 – 0.35 mm" },
    ],
  },
  {
    id: "grades",
    label: "Grades handled",
    rows: [
      { grade: "CRNO", value: "250, 310, 350, 400, 470, 530, 600, 700, 1000" },
      { grade: "CRGO", value: "120, 110, 90, 85 & ZDKH" },
    ],
  },
  {
    id: "coil-width",
    label: "Maximum coil width",
    value: "Up to 1000",
    unit: "mm",
    note: "Slitting line capacity",
  },
  {
    id: "customised",
    label: "Customized for you",
    note: "We design the component according to your drawings and specifications",
  },
];

export const qualityControl = {
  summary:
    "Dimensions are verified in house against certified instruments, on the line and at dispatch.",
  instruments: [
    "Certified digital verniers",
    "Micrometers",
    "Surface plates and gauges",
    "Dedicated assembly and tool rooms",
  ],
  practices: [
    "On-spot sampling during production",
    "Dimension verification against certified instruments",
    "Periodic tool grinding and maintenance",
    "Water resistant packing before dispatch",
  ],
};

export const whyDev = [
  {
    title: "Volume buys the price down",
    body: "High volume manufacturing and bulk procurement of steel let the material cost be optimised, and that shows up in the quote.",
  },
  {
    title: "Quality control stays in house",
    body: "An in-house team checks against ISO standards rather than sampling after the fact at a third party.",
  },
  {
    title: "Tooling is designed here",
    body: "A dedicated research, design and development team builds the progressive tools, so a custom profile does not mean a new supplier.",
  },
];
