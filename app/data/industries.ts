/**
 * Sectors served. Source: stampinglaminations.com homepage.
 *
 * `icon` is a key, not a component — data modules stay free of React so they
 * can be read by the sitemap script and the router config at build time.
 * IndustriesSection owns the key-to-icon mapping.
 */

export type Industry = {
  name: string;
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
