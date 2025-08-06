export const SITE_NAME = "PickIt - Community Litter Picking App";
export const SITE_DESCRIPTION =
  "Join the UK's leading community litter picking movement. Track your cleanup routes, compete with friends, and make a real environmental impact in your local area.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pickit.app";
export const SITE_AUTHOR = "PickIt Team";

export const APP_STORE_URL = "#"; // To be updated with actual App Store URL
export const GOOGLE_PLAY_URL = "#"; // To be updated with actual Google Play URL

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/pickitapp",
  facebook: "https://facebook.com/pickitapp",
  instagram: "https://instagram.com/pickitapp",
  linkedin: "https://linkedin.com/company/pickitapp",
} as const;

export const CONTACT_EMAIL = "hello@pickit.app";
export const SUPPORT_EMAIL = "support@pickit.app";

export const NAVIGATION_ITEMS = [
  { name: "Features", href: "/features" },
  // { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
  // { name: "Help", href: "/help" },
] as const;

export const LEGAL_PAGES = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Accessibility", href: "/accessibility" },
] as const;
