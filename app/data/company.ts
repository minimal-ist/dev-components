/** Company facts. All transcribed from stampinglaminations.com. */

export const company = {
  name: "Dev Components Pvt. Ltd.",
  shortName: "Dev Components",
  founded: 1991,
  founder: {
    name: "Mr. Dhananjaya A",
    credentials: "B.E. Mechanical, R.V. College of Engineering, Bangalore",
  },
  positioning: "Precision electrical stampings and laminations",
  description:
    "Dev Components manufactures electrical stampings, laminations and allied products for motors, transformers, pumps and electric vehicles — supplying OEMs across India and abroad since 1991.",

  mission:
    "Research and develop high quality stamping tools, and supply competitively priced A-to-Z electrical stampings and laminations across the globe.",
  vision: "Contribute to conserve energy and preserve the future.",
  values:
    "Set high standards of business and transaction, practise the highest principles of work ethics, maintain transparency, and persistently strive for excellence.",

  /**
   * The welcome copy from stampinglaminations.com, kept in the company's own
   * voice. Mechanical errors in the source are corrected — a stray comma in
   * "submersible, pumps", the hyphenation artifact "auto- motive", and
   * "built wide and huge client base over since" — but nothing is reworded.
   *
   * `pullQuote` is the strongest line they have written about themselves and
   * is set large rather than buried mid-paragraph.
   */
  welcome: {
    heading: "Welcome to Dev Components",
    paragraphs: [
      "Dev Components, a Private Limited Company, was incorporated in 1991 by Mr. Dhananjaya A, a B.E. (Mech) graduate from R.V. College of Engineering, Bangalore, to manufacture electrical stampings, laminations and other allied activities — catering quality products to various industries including large OEMs across the world.",
      "Dev Components is highly experienced in manufacturing precision electrical stampings and laminations for a wide range of applications such as fans, motors, submersible pumps, transformers, chokes, ballasts, tacho generators, alternators and electric motors for the automobile industry, and serves a wide range of industries including automotive, consumer products, appliances and heavy industrial electric capital equipment among others.",
      "Dev Components has built a wide client base since its inception in 1991 by supplying quality products used across a large majority of manufacturing industries. Our products form the core of electrical appliances — motors, fans, mixer grinders, household appliances, electric vehicle motors, and motors for automotive and industrial capital equipment. That has enabled Dev Components to evolve into one of the best stamping and lamination punching set-ups in the whole of India, and to extend supplies to customers across the globe.",
    ],
    pullQuote: "Wherever there is a conversion of electricity, our products are needed.",
  },

  /**
   * Certifications.
   *
   * AS 9100 Rev. D is the aerospace quality standard and is the strongest
   * credential here — it is why the aerospace and defense sectors are on the
   * list at all. Taken from the certification seal on the welcome section of
   * the source site.
   *
   * TODO(content): ISO 14001:2015 came from an earlier reading of the live
   * site and does not appear on that seal. Confirm it is current before
   * launch; a lapsed certification claim is worse than a missing one.
   */
  certifications: ["AS 9100 Rev. D", "ISO 9001:2015", "ISO 14001:2015"],

  /**
   * Certification marks — the registrar-issued artwork, when supplied.
   *
   * Deliberately empty rather than drawn. There is no generic ISO 9001 logo a
   * company may display: ISO forbids use of its own logo by certified
   * organisations, and what a certified firm actually shows is the accredited
   * mark of the registrar that issued the certificate (TUV, BSI, DNV, Bureau
   * Veritas and so on), used under that registrar's licence and usually
   * carrying the certificate number. AS9100 works the same way under the IAQG
   * scheme.
   *
   * A lookalike drawn here would be a fabricated credential, not a design
   * shortcut. Drop the real files into public/images/certifications/ and add
   * an entry — WelcomeSection renders marks when this list has entries and
   * falls back to the typographic treatment when it is empty.
   */
  certificationMarks: [] as Array<{
    /** Standard the mark attests to, e.g. "AS 9100 Rev. D". */
    name: string;
    /** Path under public/, e.g. "/images/certifications/as9100-tuv.png". */
    src: string;
    /** Body that issued the certificate. Shown as the caption. */
    registrar?: string;
    /** Certificate number, if the registrar requires it beside the mark. */
    certificateNumber?: string;
    width: number;
    height: number;
  }>,

  phone: "+91 99456 71218",
  phoneHref: "tel:+919945671218",
  whatsappHref: "https://wa.me/919945671218",
  email: "info@devcomponents.in",
  emailHref: "mailto:info@devcomponents.in",

  addresses: [
    {
      label: "Registered office",
      lines: [
        "No. 83, 4th Cross, R.K. Layout 2nd Stage",
        "Padmanabha Nagar",
        "Bangalore – 560070, Karnataka, India",
      ],
    },
    {
      label: "Factory 1",
      lines: [
        "1/400, Hoody, Near ABT Godown",
        "Mahadevpura, Whitefield Road",
        "Bangalore – 560070",
      ],
    },
    {
      label: "Factory 2",
      lines: [
        "Site 29, Sy 7/2, Kachohalli Industrial Area",
        "Magadi Main Road, Vishwaneedam Post",
        "Bangalore – 560091",
      ],
    },
    {
      label: "Factory 3",
      lines: [
        "Site 30, Sy 7/2, Kachohalli Industrial Area",
        "Magadi Main Road, Vishwaneedam Post",
        "Bangalore – 560091",
      ],
    },
  ],

  /** Primary address used in the footer and structured data. */
  primaryAddress: {
    street: "Site 29, Sy 7/2, Kachohalli Industrial Area, Magadi Main Road",
    locality: "Vishwaneedam Post",
    region: "Karnataka",
    postalCode: "560091",
    country: "IN",
    city: "Bangalore",
  },

  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/DevStampingLaminations/" },
    { name: "YouTube", href: "https://www.youtube.com/@DevStampingLaminations" },
    { name: "Facebook", href: "https://www.facebook.com/DevStampingLaminations" },
    { name: "Instagram", href: "https://www.instagram.com/devstampinglaminatons/" },
  ],

  export: {
    summary:
      "Dev Components products are exported beyond Indian frontiers, including to the USA and European countries, with an expanding footprint in international markets.",
    directMarkets: ["USA", "European countries"],
    partnerNetwork: {
      partner: "Kawarin Enterprises",
      markets: [
        "Batam",
        "India",
        "Pakistan",
        "Sri Lanka",
        "Myanmar",
        "Australia",
        "Brazil",
        "Egypt",
        "Malaysia",
      ],
    },
  },

  pledge: [
    {
      title: "Preference and consistency",
      body: "Meet the expectations of every stakeholder, every time.",
    },
    {
      title: "Product safety and full compliance",
      body: "Transparent working principles across the whole operation.",
    },
    {
      title: "Zero defects and zero waste",
      body: "The competitive advantage is built here, not in the price list.",
    },
    {
      title: "Everybody's commitment",
      body: "Engage every participant in the value chain.",
    },
  ],
} as const;
