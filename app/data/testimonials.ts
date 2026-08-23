/**
 * Customer quotes. Source: stampinglaminations.com homepage. Named, verbatim.
 *
 * `role` matters more than it looks: these are purchase and production people,
 * not executives, which is exactly who a procurement reader wants to hear from.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Highly satisfied with overall business support from Dev Components.",
    name: "Mr. Ravi",
    role: "Production Manager",
    company: "SaveWatt",
  },
  {
    quote: "Dev quality of products and services provided are very good.",
    name: "Ms. Nivethini D",
    role: "Purchase Engineer",
    company: "Salzer",
  },
  {
    quote:
      "Timely delivery of products and services at Dev Components is good.",
    name: "Mr. Ramesh C Shastri",
    role: "Asst Manager Purchase",
    company: "Trafomec India",
  },
  {
    quote:
      "Co-ordination of staff communication and timely response at Dev Components is very good.",
    name: "Mr. Ravi Kumar GH",
    role: "Purchases",
    company: "Prismatic Engineering",
  },
];
