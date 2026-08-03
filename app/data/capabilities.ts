/**
 * Manufacturing envelope — the numbers a buyer checks first.
 * Source: stampinglaminations.com /operation and /about.
 */

export type Capability = {
  label: string;
  value: string;
  unit?: string;
  note?: string;
};

export const capabilities: Capability[] = [
  {
    label: "Stamping diameter",
    value: "30 – 400",
    unit: "mm",
    note: "Round stampings across the standard tool range",
  },
  {
    label: "EI lamination range",
    value: "EI19 – EI350",
    note: "Transformer core types",
  },
  {
    label: "Coil thickness",
    value: "0.20 – 0.50",
    unit: "mm",
    note: "CRGO and CRNGO grades",
  },
  {
    label: "Maximum coil width",
    value: "Up to 1000",
    unit: "mm",
    note: "Slitting line capacity",
  },
  {
    label: "Monthly capacity",
    value: "400+",
    unit: "tons",
    note: "Bulk orders accepted at short notice",
  },
  {
    label: "Grades handled",
    value: "CRGO, CRNGO",
    note: "Grain oriented and non grain oriented silicon steel",
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
