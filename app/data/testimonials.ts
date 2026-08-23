/** Customer quotes. Source: stampinglaminations.com homepage. Named, verbatim. */

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Highly satisfied with overall business support from Dev Components.",
    name: "Mr. Ravi",
    company: "SaveWatt",
  },
  {
    quote: "Dev quality of products and services provided are very good.",
    name: "Ms. Nivethini D",
    company: "Salzer",
  },
  {
    quote:
      "Timely delivery of products and services at Dev Components is good.",
    name: "Mr. Ramesh C Shastri",
    company: "Trafomec India",
  },
  {
    quote:
      "Co-ordination of staff communication and timely response at Dev Components is very good.",
    name: "Mr. Ravi Kumar GH",
    company: "Prismatic Engineering",
  },
];

/**
 * Named customers legible on the live logo wall.
 *
 * TODO(content): the live site shows 15 logos; only these were legible in the
 * page source. Add the rest when the client supplies the list, ideally as SVG.
 */
export const clients: string[] = [
  "Elettromil",
  "V-Guard",
  "Salzer",
  "Trafomec India",
  "SaveWatt",
];
