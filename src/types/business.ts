export type Service = {
  name: string;
  slug: string;
  description: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type BusinessConfig = {
  companyName: string;
  trade: string;
  tagline: string;

  contact: {
    phone: string;
    email: string;
  };

  location: {
    city: string;
    state: string;
    serviceArea: string[];
  };

  services: Service[];

  callsToAction: {
    primary: CallToAction;
    secondary: CallToAction;
  };

  branding: {
    logo: string;
  };

  links: {
    bookingUrl: string;
    googleBusinessProfile: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
};
