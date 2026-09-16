export const tradeConfig = {
  name: "Roofing",

  singular: "roofer",
  plural: "roofers",

  homeownerTerm: "homeowner",

  serviceNoun: "roof",
  serviceNounPlural: "roofs",

  primaryProblem: "roof damage",

  commonProblems: [
    "Roof leaks",
    "Missing or damaged shingles",
    "Storm damage",
    "Aging roofing materials",
    "Flashing problems",
    "Ventilation issues",
  ],

  primaryServices: [
    "Roof Repair",
    "Roof Replacement",
    "Roof Inspection",
    "Storm Damage",
  ],

  homeownerResources: [
    "Roof repair cost guide",
    "Roof replacement guide",
    "Roof inspection checklist",
    "Storm damage checklist",
    "Questions to ask a roofer",
  ],

  estimateLanguage: {
    noun: "roof estimate",
    cta: "Get a Roof Estimate",
  },

  inspectionLanguage: {
    noun: "roof inspection",
    cta: "Request a Roof Inspection",
  },
} as const;

export type TradeConfig = typeof tradeConfig;
