export const businessConfig = {
  companyName: "Example Roofing Company",
  trade: "Roofing",

  tagline: "Straight answers. Better roofs.",

  contact: {
    phone: "(555) 555-5555",
    email: "hello@example.com",
  },

  location: {
    city: "Phoenix",
    state: "Arizona",
    serviceArea: [
      "Phoenix",
      "Glendale",
      "Peoria",
      "Scottsdale",
      "Mesa",
      "Tempe",
      "Chandler",
    ],
  },

  services: [
    {
      name: "Roof Repair",
      slug: "roof-repair",
      description:
        "Help homeowners diagnose and repair leaks, damaged shingles, flashing problems, and other common roofing issues.",
    },
    {
      name: "Roof Replacement",
      slug: "roof-replacement",
      description:
        "Complete roof replacement options for aging, damaged, or failing roofing systems.",
    },
    {
      name: "Roof Inspection",
      slug: "roof-inspection",
      description:
        "Professional roof inspections to identify damage, maintenance needs, and potential problems before they get worse.",
    },
    {
      name: "Storm Damage",
      slug: "storm-damage",
      description:
        "Inspection and repair guidance for roofs affected by wind, hail, monsoon storms, and other severe weather.",
    },
  ],

  callsToAction: {
    primary: {
      label: "Request an Inspection",
      href: "/contact",
    },
    secondary: {
      label: "Get a Roof Estimate",
      href: "/estimate",
    },
  },

  branding: {
    logo: "/images/logo.png",
  },

  links: {
    bookingUrl: "",
    googleBusinessProfile: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export type BusinessConfig = typeof businessConfig;
