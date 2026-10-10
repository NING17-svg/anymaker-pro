import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/",
    labels: { "en-US": "Guides" },
    children: [
      { href: "/guides/getting-started/", labels: { "en-US": "Getting started" } },
      { href: "/guides/vehicle-building/", labels: { "en-US": "Vehicle building" } },
      { href: "/guides/helicopter-guide/", labels: { "en-US": "Helicopter guide" } },
      { href: "/guides/boat-building/", labels: { "en-US": "Boat building" } },
      { href: "/guides/engine-wiring/", labels: { "en-US": "Engine wiring" } },
      { href: "/guides/microcontroller-programming/", labels: { "en-US": "Microcontroller programming" } },
      { href: "/guides/weapons-and-ammo/", labels: { "en-US": "Weapons and ammo" } },
      { href: "/guides/undead-enemies/", labels: { "en-US": "Undead enemies" } },
      { href: "/guides/survival-tips/", labels: { "en-US": "Survival tips" } },
      { href: "/guides/map-and-biomes/", labels: { "en-US": "Map and biomes" } },
      { href: "/guides/bunkers-and-progression/", labels: { "en-US": "Bunkers and progression" } },
      { href: "/guides/multiplayer/", labels: { "en-US": "Multiplayer" } },
      { href: "/guides/sandbox-mode/", labels: { "en-US": "Sandbox mode" } },
      { href: "/guides/base-building/", labels: { "en-US": "Base building" } },
    ],
  },
  { href: "/guides/survival-tips/", labels: { "en-US": "Survival" } },
  { href: "/guides/multiplayer/", labels: { "en-US": "Multiplayer" } },
  { href: "/guides/sandbox-mode/", labels: { "en-US": "Sandbox" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/guides/getting-started/", labels: { "en-US": "Getting started" } },
  { href: "/guides/vehicle-building/", labels: { "en-US": "Vehicle building" } },
  { href: "/guides/base-building/", labels: { "en-US": "Base building" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
