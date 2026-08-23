/**
 * Product catalogue.
 *
 * Every figure here is transcribed from stampinglaminations.com. Where the
 * source page did not state a value, the field is omitted rather than
 * estimated — a wrong thickness or grade in a published spec table is a
 * commercial liability, not a copy problem.
 */

export type Spec = {
  label: string;
  value: string;
};

export type Variant = {
  name: string;
  description: string;
  application: string;
};

export type Product = {
  slug: string;
  name: string;
  /** One line, used under the heading and in the nav mega-menu. */
  tagline: string;
  /** Card copy on the index page. Two sentences maximum. */
  summary: string;
  /** Body paragraphs on the detail page. */
  description: string[];
  specs: Spec[];
  variants: Variant[];
  applications: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "electrical-laminations",
    name: "Electrical Laminations",
    tagline: "E&I transformer cores, Type 28 to Type 350",
    summary:
      "Transformer cores punched from non-aging CRNGO silicon steel. Named for their shape — the stack reads as the letters E and I.",
    description: [
      "E&I laminations form the core of a transformer, the device that steps voltage up or down. They take their name from their profile: the two pieces look like the letters E and I, and interleave to close the magnetic circuit.",
      "The core is punched from high grade, non-aging Cold Rolled Non Grain Oriented (CRNGO) silicon steel conforming to HIB grade, BIS certified.",
    ],
    specs: [
      { label: "Material", value: "CRNGO silicon steel, non-aging" },
      { label: "Grade", value: "HIB, BIS certified" },
      { label: "Thickness", value: "0.25 – 0.50 mm" },
      { label: "Watt loss", value: "2.5 – 6 W/kg @ 1.5 T, 50 Hz" },
      { label: "Range", value: "Type 28 – Type 350" },
      { label: "Inverter grade", value: "20,000 Gs saturation induction" },
    ],
    variants: [
      {
        name: "EI Transformer Laminations",
        description:
          "The standard interleaved E and I profile across the full type range.",
        application: "Distribution and control transformers",
      },
      {
        name: "UI Laminations",
        description: "U and I profile for cores requiring a longer window.",
        application: "Transformers with extended winding windows",
      },
      {
        name: "Inverter Laminations",
        description:
          "Punched to hold 20,000 Gs saturation magnetic induction intensity.",
        application: "Inverters and converters",
      },
      {
        name: "Medical Grade Isolation Transformer Laminations",
        description:
          "Cores for isolation transformers built to medical supply requirements.",
        application: "Medical isolation transformers",
      },
      {
        name: "Stabilizer Laminations",
        description: "Cores for voltage stabilisation equipment.",
        application: "Voltage stabilizers",
      },
      {
        name: "3 Phase Lamination Cores",
        description:
          "Three-limb cores for three-phase transformer construction.",
        application: "Industrial and power generation",
      },
    ],
    applications: [
      "Transformers",
      "Voltage stabilizers",
      "UPS",
      "Inverters",
      "Converters",
      "Lighting ballasts",
      "Rectifiers",
    ],
    image: "/images/products/electrical-laminations.png",
  },
  {
    slug: "motor-stamping",
    name: "Motor Stampings",
    tagline: "Rotor and stator stampings for thirteen motor types",
    summary:
      "The rotating and stationary cores at the centre of any motor or pump. Thirteen distinct stamping families, from EV traction to shaded pole.",
    description: [
      "Motor stampings are used in any apparatus that converts electrical energy to mechanical energy or the reverse. They are the heart of the motor or the pump.",
      "Each family below is punched to a different profile and a different duty. Tooling is developed per application.",
    ],
    specs: [
      { label: "Material", value: "Electrical steel" },
      { label: "Submersible pump range", value: "20 – 800 mm" },
      { label: "Pole shoe thickness", value: "0.25 – 0.50 mm" },
      { label: "Segmented core count", value: "4, 6, 8, 10 or 12 segments" },
      { label: "Shaded pole rating", value: "From 20 W" },
    ],
    variants: [
      {
        name: "EV Motor Stampings",
        description:
          "Made of electrical steel for traction motors in electric vehicles.",
        application: "EV automotive industry",
      },
      {
        name: "Induction Motor Stampings",
        description:
          "Rotors and stators made of electrical steel for alternating current machines.",
        application: "Pumps, compressors, electrical appliances",
      },
      {
        name: "BLDC Motor Stampings",
        description: "Brushless DC motor cores made of electrical steel.",
        application: "Computer peripherals, power tools, aircraft, automobiles",
      },
      {
        name: "Stepper Motor Stampings",
        description: "Stepper motor cores made of electrical steel.",
        application:
          "Scanners, printers, CNC, 3D printers, intelligent lighting",
      },
      {
        name: "Servo Motor Stampings",
        description: "Servo motor cores made of electrical steel.",
        application: "Robotics, elevators, in-line manufacturing",
      },
      {
        name: "Alternator Stator Stampings",
        description:
          "Stator cores made of electrical steel for alternator assemblies.",
        application: "Internal combustion automotives, locomotives",
      },
      {
        name: "Segmented Cores",
        description:
          "Segments of lamination core that form a complete circle when assembled — 4, 6, 8, 10 or 12 per core.",
        application: "Cost-sensitive electrical devices and equipment",
      },
      {
        name: "Mixer Rotor & Stator Stampings",
        description:
          "Electrical steel with heat resistance and high tensile strength characteristics.",
        application: "Hand tools, grinders, mixing appliances",
      },
      {
        name: "Armature Stampings",
        description: "The rotating member that turns on its own axis.",
        application: "Hand tools, grinders, grinding appliances",
      },
      {
        name: "Washing Machine Motor Stampings",
        description: "Square in profile rather than the traditional round.",
        application:
          "Washing machines, cooler pumps and motors, air conditioner motors",
      },
      {
        name: "Submersible Pump Stampings",
        description: "High grade electrical steel, 20 mm to 800 mm.",
        application: "Submersible pumps",
      },
      {
        name: "Shaded Pole Motor Stampings",
        description: "Small format cores, ratings from 20 watts upward.",
        application:
          "Toys, hair dryers, desk fans, cooling fans, projectors, displays",
      },
      {
        name: "Pole Shoe Stampings",
        description: "Thickness between 0.25 and 0.50 mm.",
        application: "DC machine applications",
      },
    ],
    applications: [
      "Electric vehicles",
      "Submersible pumps",
      "Compressors",
      "Robotics",
      "Home appliances",
      "Power tools",
    ],
    image: "/images/products/motor-stamping.png",
  },
  {
    slug: "epoxy-coated-cores",
    name: "Epoxy Coated Cores",
    tagline: "Electrostatic epoxy, 0.15 to 0.6 mm, classes B / F / H",
    summary:
      "Powder coating applied to motor cores for insulation and environmental protection. Coating thickness and bake class are set by the application.",
    description: [
      "Epoxy powder coating is suitable for a wide range of motor cores. It provides excellent insulation properties and helps protect the motor core from moisture, dust and other contaminants.",
      "Coatings are specified against the voltage requirement and the stator or rotor dimensions, then baked to the required temperature class.",
    ],
    specs: [
      { label: "Coating thickness", value: "0.15 – 0.60 mm" },
      { label: "Temperature class", value: "B, F, H" },
      { label: "Finish", value: "Blue, green" },
      { label: "Function", value: "Insulation, moisture and dust protection" },
    ],
    variants: [],
    applications: ["All motor core types, applied to requirement"],
    image: "/images/products/epoxy-coated-cores.png",
  },
  {
    slug: "bonded-special-purpose-cores",
    name: "Bonded & Special Purpose Cores",
    tagline: "Five stacking methods, from bonding varnish to TIG weld",
    summary:
      "Stacked cores held together without interlock or welding where iron loss must be lowest — plus welded, cleated and interlocked alternatives.",
    description: [
      "Stator bonding, also called bonded stator lamination technology, uses high temperature glue or epoxy to complete the lamination stack. The stator needs no interlock and no welding, which reaches the lowest iron loss and the highest motor efficiency.",
      "Bonding varnish does not disturb magnetic flux. It applies no stress and does not deform the material, so the magnetic properties remain entirely intact.",
    ],
    specs: [
      {
        label: "Cleat strip thickness",
        value: "Up to 2 mm, galvanized or cold rolled",
      },
      { label: "Cleats per stator", value: "2 – 16, by motor size" },
      {
        label: "Bonding methods",
        value: "Glue, varnish, TIG weld, cleat, die interlock",
      },
    ],
    variants: [
      {
        name: "Bonded & Stamping Cores",
        description:
          "Bound with special glue. Raises production speed while holding the required precision, and protects the core from moisture and dust.",
        application: "All motor core types, to requirement",
      },
      {
        name: "Electric Vehicle Stamping Cores",
        description:
          "Bound with special glue to precision requirement, coated where the application calls for it.",
        application: "High-efficiency EV motors",
      },
      {
        name: "Welded Stator Cores",
        description:
          "Bound by organic or TIG welding to hold the stack intact, maintaining precision and the lowest achievable watt loss.",
        application: "Larger and thicker industrial stators",
      },
      {
        name: "Cleated Stator Cores",
        description:
          "Stacked by galvanized or cold rolled strips up to 2 mm. Cleating notches align with the lamination tooth or slot opening — 2 to 16 per stator depending on motor size.",
        application: "An alternative to interlocked cores",
      },
      {
        name: "Interlock Magnetic Cores",
        description:
          "Stacked automatically in the die system, produced faster while holding precision for higher motor efficiency.",
        application: "Almost all industrial applications",
      },
    ],
    applications: [
      "Electric vehicle motors",
      "High-efficiency industrial motors",
      "Large stators",
    ],
    image: "/images/products/bonded-special-purpose-cores.png",
  },
  {
    slug: "linear-motor-stampings",
    name: "Linear Motor Stampings",
    tagline: "Cores for linear induction motors",
    summary:
      "Laminations for motors that produce force in a straight line rather than a rotation — cranes, liquid metal pumps, door actuators.",
    description: [
      "Linear motor stampings are used in linear induction motors, which are housed in cranes for material handling, for pumping liquid metal, and as actuators for door movement.",
      "Linear induction motors are also used in high-voltage circuit breakers.",
    ],
    specs: [
      { label: "Material", value: "CRNGO silicon steel, non-aging" },
      { label: "Grade", value: "HIB, BIS certified" },
      { label: "Thickness", value: "0.25 – 0.50 mm" },
      { label: "Watt loss", value: "2.5 – 6 W/kg @ 1.5 T, 50 Hz" },
    ],
    variants: [],
    applications: [
      "Material handling cranes",
      "Liquid metal pumping",
      "Door actuators",
      "High-voltage circuit breakers",
    ],
    image: "/images/products/linear-motor-stampings.png",
  },
  {
    slug: "contactor-cores",
    name: "Contactor Cores",
    tagline: "Switching cores for remote circuit control",
    summary:
      "The electromagnetic core inside a contactor — the relay that opens and closes a circuit or an AC motor from a distance.",
    description: [
      "Contactor cores are used in electrical appliances suitable for switching circuits and AC motors on and off from a long distance. A special type of relay switches the circuit, and the swift movement of the pairs of contacts that open and close external circuits is provided by the contactor core.",
      "Contactor cores provide an electromagnetic field whenever current flows, and the moving coils attract each other. A large current is drawn initially by the electromagnetic coil. The moving contact is pushed forward by the moving core, and the force created by the electromagnet holds the moving and fixed contacts together.",
      "Cores are made across a range of sizes depending on the required output parameter.",
    ],
    specs: [],
    variants: [
      {
        name: "Armature Cores & Magnetic Cores",
        description:
          "Provide the electromagnetic field as current flows through the coil wound on the core. Made specific to the circuit they serve.",
        application: "Switching assemblies",
      },
    ],
    applications: [
      "Remote circuit switching",
      "AC motor control",
      "Electrical appliances",
    ],
    image: "/images/products/contactor-cores.png",
  },
  {
    slug: "strip-laminations",
    name: "Strip Laminations",
    tagline: "Cut to length at ±0.02 mm, 240+ pieces a minute",
    summary:
      "Core sheet for transformers too large for stamped E&I. Sheared, O-punched and cut to length on an automatic line.",
    description: [
      "Strip laminations are used where the transformer is too large for a stamped core — power transformers and isolation transformers.",
      "The line shears, O-punches and cuts to the required length of transformer core sheet, producing pieces with 3, 5 or 7 steps in the vertical direction and 3, 5 or 7 steps in the horizontal direction.",
      "The automatic cutting line uses a tungsten carbide steel cutter with high reliability.",
    ],
    specs: [
      { label: "Accuracy", value: "±0.02 mm" },
      { label: "Cutting speed", value: "240+ pieces / min" },
      { label: "Max sheet width", value: "300 mm" },
      { label: "Hole size", value: "ø8 – 25 mm" },
      { label: "Cut angle", value: "90°, automatic" },
      {
        label: "Step configuration",
        value: "3, 5 or 7 — vertical and horizontal",
      },
      { label: "Cutter", value: "Tungsten carbide steel" },
    ],
    variants: [],
    applications: ["Power transmission transformers", "Isolation transformers"],
    image: "/images/products/strip-laminations.png",
  },
  {
    slug: "crgo-miter-cut",
    name: "CRGO Miter Cut",
    tagline: "Two O-punches and a V-notch in one pass",
    summary:
      "Grain-oriented steel punched, notched and cut on the production line, then stacked automatically into 20 columns for core assembly.",
    description: [
      "Electrical steel coils are punched and cut to shape and size on the production line. Classification and finishing are completed at the end of the line, and the output is automatically stacked into 20 columns for core assembly.",
      "The distinguishing feature of this line is that two O-punches and one V-notch can work at the same time, producing transformer core pieces with 3, 5 or 7 steps in the vertical direction and 3, 5 or 7 steps in the horizontal direction.",
      "Any size and any length, with or without miter cutting, can be achieved.",
    ],
    specs: [
      { label: "Thickness", value: "0.35 mm, 0.50 mm" },
      { label: "Auto stacking", value: "Up to 20 columns" },
      { label: "Simultaneous operations", value: "2 × O-punch + 1 × V-notch" },
      {
        label: "Step configuration",
        value: "3, 5 or 7 — vertical and horizontal",
      },
    ],
    variants: [],
    applications: ["Large transformer cores"],
    image: "/images/products/crgo-miter-cut.png",
  },
  {
    slug: "crngo-crgo-slit-master-coils",
    name: "CRNGO, CRGO Slit & Master Coils",
    tagline: "Master coils to 5 tons, C3 / C4 / C5 mill coating",
    summary:
      "Silicon electrical steel supplied as master coil or slit to width, in fully-processed or semi-processed condition.",
    description: [
      "Master and slit coils are supplied as-is or in slit form to suit the application. These coils are silicon electrical steel grades with magnetic properties strongly oriented with respect to the direction of rolling.",
      "Material comes in Fully-Processed (FP) or Semi-Processed (SP) condition. Semi-processed requires a Quality Development Anneal (QDA); fully-processed requires a Stress Relief Anneal (SRA).",
      "Coils are typically supplied with an insulating coating applied at the mill.",
    ],
    specs: [
      {
        label: "Condition",
        value: "Fully-Processed (FP) or Semi-Processed (SP)",
      },
      { label: "Anneal", value: "QDA for SP, SRA for FP" },
      { label: "Mill coating", value: "C3, C4, C5" },
      { label: "Standard roll", value: "1000 mm" },
      { label: "Coil weight", value: "Up to 4 – 5 tons" },
    ],
    variants: [],
    applications: [
      "Supplied slit or in master form against specific industrial requirement",
    ],
    image: "/images/products/crngo-crgo-slit-master-coils.png",
  },
  {
    slug: "progressive-tool-die-designing-making",
    name: "Progressive Tool Die Designing & Making",
    tagline: "CAD-designed tooling, built and certified in house",
    summary:
      "The tools that make everything else. Designed, developed, tested and certified before they punch a single production lamination.",
    description: [
      "Tool designing and die making cover the design and development of tools used to cut, form, support or mould metal — jigs and fixtures, drills and cutting blades.",
      "Dev coordinates the designing, development and actual testing of these tools to certify their technical capability for use in manufacturing stampings, laminations, motors, stators and related products.",
      "Dies are made by skilled die makers and designed using CAD to create highly accurate, unambiguous designs.",
    ],
    specs: [
      {
        label: "Tool types",
        value: "Progressive, blanking, compound, riveting",
      },
      { label: "Design method", value: "CAD" },
      { label: "Scope", value: "Design, development, testing, certification" },
    ],
    variants: [],
    applications: [
      "Lamination punching tools",
      "Motor and stator production tooling",
    ],
    image: "/images/products/progressive-tool-die-designing-making.png",
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
