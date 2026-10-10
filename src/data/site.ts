import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "AnyMaker Pro Anymaker Guides",
  brandMark: "AM",
  gameName: "Anymaker",
  domain: "anymaker.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://anymaker.pro").replace(/\/$/, ""),
  description:
    "Anymaker guide hub for vehicle engineering, survival, bunkers, multiplayer, sandbox and base building on Steam.",
  tagline:
    "Steam-ready walkthroughs for Anymaker vehicles, survival, bunkers and 6-player co-op.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "AnyMaker Pro Guides",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Anymaker on Steam",
      href: "https://store.steampowered.com/app/4435340/Anymaker/",
      description: "Official Steam store page for Anymaker by Geometa.",
    },
  ],
  disclaimer:
    "Fan-made guide hub for Anymaker on Steam. All game facts and descriptions reference the official Steam store page.",
};
