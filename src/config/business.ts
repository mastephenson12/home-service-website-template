export const business = {
  companyName: "Example Roofing Company",
  trade: "Roofing",

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

  branding: {
    tagline: "Straight answers. Better roofs.",
    logo: "/images/logo.png",
  },

  callsToAction: {
    primary: "Request an Inspection",
    secondary: "Get a Roof Estimate",
  },

  links: {
    bookingUrl: "",
    googleBusinessProfile: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },

  services: [
    {
      name: "Roof Repair",
      slug: "roof-repair",
    },
    {
      name: "Roof Replacement",
      slug: "roof-replacement",
    },
    {
      name: "Roof Inspection",
      slug: "roof-inspection",
    },
    {
      name: "Storm Damage",
      slug: "storm-damage",
    },
  ],
} as const;

export type BusinessConfig = typeof business;
