/**
 * Facility photographs.
 *
 * Seven were scraped from stampinglaminations.com; the press hall and the
 * building exterior are lifted from the client's company profile PDF, which
 * carries them at higher resolution than the site did. Captions describe
 * what is in frame and nothing more — no capacities, no machine models.
 */

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Lead photo: takes the large cell in the grid. */
  lead?: boolean;
};

export const facilityPhotos: GalleryPhoto[] = [
  {
    src: "/images/factory/press-hall.webp",
    alt: "Press hall with a row of high-speed presses under an overhead crane",
    caption: "Press hall",
    width: 1600,
    height: 723,
    lead: true,
  },
  {
    src: "/images/factory/building-exterior.webp",
    alt: "Exterior of the Dev Components factory building",
    caption: "Factory, Bangalore",
    width: 1600,
    height: 700,
  },
  {
    src: "/images/factory/press-shop.jpg",
    alt: "Stamping presses on the shop floor",
    caption: "Press shop",
    width: 993,
    height: 467,
  },
  {
    src: "/images/factory/slitting-line.jpg",
    alt: "Coil slitting line",
    caption: "Slitting line",
    width: 931,
    height: 559,
  },
  {
    src: "/images/factory/progressive-die.jpg",
    alt: "Progressive die in the tool room",
    caption: "Progressive die",
    width: 761,
    height: 493,
  },
  {
    src: "/images/factory/tool-room.jpg",
    alt: "Tool room with machining centres",
    caption: "Tool room",
    width: 993,
    height: 647,
  },
  {
    src: "/images/factory/tool-grinding.jpg",
    alt: "Tool grinding station",
    caption: "Tool grinding",
    width: 941,
    height: 505,
  },
  {
    src: "/images/factory/quality-check.jpg",
    alt: "Inspection of stamped laminations",
    caption: "Quality check",
    width: 349,
    height: 439,
  },
  {
    src: "/images/factory/packed-dispatch.jpg",
    alt: "Packed laminations ready for dispatch",
    caption: "Packed for dispatch",
    width: 591,
    height: 479,
  },
];
