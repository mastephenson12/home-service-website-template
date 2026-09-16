export const mainNavigation = [
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
    label: "Estimate",
    href: "/estimate",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const footerNavigation = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Accessibility",
    href: "/accessibility",
  },
] as const;

export type NavigationItem = (typeof mainNavigation)[number];
