/**
 * Customer logos, supplied by the client as a mixed folder of PNG and JPEG.
 *
 * Each was background-knocked-out by flooding in from the edges (so white
 * inside a mark survives), trimmed, and fitted to a common 320x96 box, which
 * is what lets fourteen wildly different marks sit at the same optical weight.
 *
 * The originals carried no usable filenames — "3.png", "images (2).png" — so
 * the mapping from file to company lives in the processing script and the
 * result is recorded here.
 */

export type Client = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const clients: Client[] = [
  {
    name: "V-Guard",
    src: "/images/clients/v-guard.webp",
    width: 208,
    height: 96,
  },
  {
    name: "Salzer Electronics",
    src: "/images/clients/salzer.webp",
    width: 320,
    height: 53,
  },
  {
    name: "Elettromil",
    src: "/images/clients/elettromil.webp",
    width: 320,
    height: 84,
  },
  {
    name: "Trafomec Shanghai",
    src: "/images/clients/trafomec.webp",
    width: 320,
    height: 93,
  },
  {
    name: "Deccan Submersible Pumpsets",
    src: "/images/clients/deccan.webp",
    width: 300,
    height: 96,
  },
  {
    name: "Prismatic",
    src: "/images/clients/prismatic.webp",
    width: 320,
    height: 53,
  },
  { name: "Numax", src: "/images/clients/numax.webp", width: 87, height: 96 },
  {
    name: "Dynalektric",
    src: "/images/clients/dynalektric.webp",
    width: 178,
    height: 96,
  },
  {
    name: "MS India Transformers",
    src: "/images/clients/ms-india.webp",
    width: 320,
    height: 69,
  },
  {
    name: "Golden Electronics",
    src: "/images/clients/golden-electronics.webp",
    width: 134,
    height: 96,
  },
  {
    name: "Physics Motors",
    src: "/images/clients/physics-motors.webp",
    width: 320,
    height: 79,
  },
  {
    name: "Procon Controls",
    src: "/images/clients/procon-controls.webp",
    width: 320,
    height: 88,
  },
  {
    name: "TVS Sun-TWS",
    src: "/images/clients/sun-tws.webp",
    width: 320,
    height: 62,
  },
  {
    name: "Miracle",
    src: "/images/clients/miracle.webp",
    width: 320,
    height: 73,
  },
];
