export const siteConfig = {
  name: "Home Service Contractor Template",

  description:
    "A reusable website and lead-generation platform for roofing, HVAC, plumbing, electrical, and other home service contractors.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  seo: {
    defaultTitle: "Home Service Contractor Template",
    titleTemplate: "%s | Home Service Contractor Template",
    defaultDescription:
      "Helpful homeowner resources, contractor services, estimates, and lead-generation tools for home service businesses.",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Homeowner Resources",
      href: "/resources",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  callsToAction: {
    primary: {
      label: "Request an Estimate",
      href: "/contact",
    },
    secondary: {
      label: "Explore Resources",
      href: "/resources",
    },
  },

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
