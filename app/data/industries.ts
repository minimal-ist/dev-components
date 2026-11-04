/**
 * Sectors served. Source: stampinglaminations.com homepage.
 *
 * `icon` is a key, not a component — data modules stay free of React so they
 * can be read by the sitemap script and the router config at build time.
 * IndustriesSection owns the key-to-icon mapping.
 */

/**
 * Introduction to the sectors, transcribed from the client's brief.
 *
 * The statement renders as a subheading under the section title — it is the
 * claim, and the paragraph below it is the evidence. It replaces the lede
 * written during the build.
 */
export const industriesIntro = {
  statement: "At the heart of every motor and transformer, you will find us.",
  body: "Our products form the critical core of various industries. From fans, mixer grinders, transformers, stabilizers, elevators, pumps to advanced technologies like drone motors and EV motor segments, at the heart of it all, you will find us.",
};

export type Industry = {
  name: string;
  /**
   * Photograph behind the hexagon, path under public/, e.g.
   * "/images/industries/automotive.webp". Optional: a sector without one
   * renders as a plain tile with its icon, so the set can be filled in a
   * few at a time. Nothing here is a stock image chosen by us — a wrong
   * photograph against a sector misrepresents what the company supplies.
   */
  image?: string;
  icon:
    | "automotive"
    | "robotics"
    | "energy"
    | "defense"
    | "electrical"
    | "aerospace"
    | "engineering"
    | "railway"
    | "electronics"
    | "equipment"
    | "space"
    | "automation";
};

export const industries: Industry[] = [
  { name: "Automotive", icon: "automotive" },
  { name: "Robotics", icon: "robotics" },
  { name: "Power & energy", icon: "energy" },
  { name: "Defense", icon: "defense" },
  { name: "Electrical", icon: "electrical" },
  { name: "Aerospace", icon: "aerospace" },
  { name: "Engineering", icon: "engineering" },
  { name: "Railway", icon: "railway" },
  { name: "Electronics", icon: "electronics" },
  { name: "Equipment", icon: "equipment" },
  { name: "Space", icon: "space" },
  { name: "Automation", icon: "automation" },
];
