/** Headline figures. Source: stampinglaminations.com homepage and /about. */

export type Stat = {
  /** Numeric portion, animated on scroll. */
  value: number;
  /** Rendered before the number. */
  prefix?: string;
  /** Rendered after the number. */
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 1991, label: "Manufacturing since" },
  { value: 300, suffix: "+", label: "Customers across India" },
  { value: 65000, suffix: "+", label: "Metric tons manufactured" },
  { value: 400, suffix: "+", label: "Tons per month capacity" },
];
