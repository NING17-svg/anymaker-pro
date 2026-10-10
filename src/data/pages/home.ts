import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", supplementary: "collapsed" },
  h1: "Anymaker guides: vehicles, survival, bunkers and multiplayer",
  seoTitle: "Anymaker Guides: Vehicles, Survival, Bunkers and Co-op Tips",
  metaDescription:
    "Anymaker guides for vehicles, helicopters, boats, engines, microcontrollers, weapons, undead, survival, bunkers, multiplayer, sandbox and base building.",
  summary:
    "Anymaker is a detailed, technical vehicle-building and open-world survival game on Steam, developed and published by Geometa.",
  hero: {
    eyebrow: "Steam guide hub",
    subtitle:
      "Walkthroughs for Anymaker vehicles, survival systems, underground bunkers, and 6-player co-op, written for new and returning players.",
    ctas: [
      { label: "Open the beginner guide", href: "/guides/getting-started/" },
      { label: "Browse all guides", href: "/guides/vehicle-building/" },
    ],
  },
  quickAnswer:
    "Anymaker is a detailed, technical vehicle-building and open-world survival game on Steam, developed and published by Geometa, the studio behind Stormworks: Build and Rescue. Players design vehicles from the chassis up — building engines, wiring components, and programming microcontrollers — and then drive, fly, or sail them across a post-apocalyptic open world while scavenging parts, food, clothes, weapons, and building materials.",
  quickAnswerContext:
    "Survival hinges on hunger, wounds, weather, and the day-night cycle, while bunkers and a 6-player co-op mode sit on top of the engineering sandbox. This hub collects Anymaker guides written for new players getting started and for returning players looking for specific answers.",
  keyFacts: [
    { label: "Game type", value: "Vehicle engineering + open-world survival on Steam" },
    { label: "Player count", value: "Single-player and 6-player online co-op" },
    { label: "Guide coverage", value: "14 guides across 7 player task clusters" },
  ],
  modules: [
    {
      id: "where-to-start",
      type: "guide-index",
      heading: "Where to start in Anymaker",
      columns: 1,
      groups: [
        {
          title: "Begin the engineering loop",
          items: [
            {
              label: "Anymaker beginner guide",
              href: "/guides/getting-started/",
              description:
                "Begin with the Sandbox-first learning loop that the developer sets up through Early Access guidance.",
            },
            {
              label: "Anymaker sandbox mode guide",
              href: "/guides/sandbox-mode/",
              description:
                "Sandbox unlocks every part and tool with free flight, no-clip and permanent daylight.",
            },
            {
              label: "Anymaker vehicle building guide",
              href: "/guides/vehicle-building/",
              description:
                "Lay the grid-based chassis, mechanical parts, fluid and electrical wiring before adding a microcontroller.",
            },
            {
              label: "Anymaker engine wiring guide",
              href: "/guides/engine-wiring/",
              description:
                "Plumb the four manifolds, wire from the main battery, and find the common start-die causes.",
            },
          ],
        },
        {
          title: "Jump straight into multiplayer",
          items: [
            {
              label: "Anymaker multiplayer guide",
              href: "/guides/multiplayer/",
              description:
                "Set up 6-player co-op for Survival and Sandbox with a host session ID and voice chat.",
            },
          ],
        },
      ],
    },
    {
      id: "vehicle-engineering",
      type: "guide-index",
      heading: "Vehicle building and engineering",
      columns: 1,
      groups: [
        {
          title: "Chassis, drivetrain and engineering",
          items: [
            {
              label: "Anymaker vehicle building guide",
              href: "/guides/vehicle-building/",
              description:
                "Grid-based chassis, mechanical parts, fluid and electrical wiring, build order and testing workflow.",
            },
            {
              label: "Anymaker helicopter guide",
              href: "/guides/helicopter-guide/",
              description:
                "Rotor parts, blade pitch, anti-torque tail rotor, balance, weather impact and Sandbox practice.",
            },
            {
              label: "Anymaker boat building guide",
              href: "/guides/boat-building/",
              description:
                "Watertight hull layout, propellers, jet engines, marine parts, exhaust above the waterline.",
            },
            {
              label: "Anymaker engine wiring guide",
              href: "/guides/engine-wiring/",
              description:
                "Manifolds for air, fuel, exhaust and coolant, electrical wiring from the main battery.",
            },
            {
              label: "Anymaker microcontroller programming guide",
              href: "/guides/microcontroller-programming/",
              description:
                "Drag-and-drop blocks and text editing, sensor inputs, outputs and the baseline throttle logic.",
            },
          ],
        },
      ],
    },
    {
      id: "combat-and-enemies",
      type: "guide-index",
      heading: "Combat and enemies",
      columns: 1,
      groups: [
        {
          title: "Weapons and undead",
          items: [
            {
              label: "Anymaker weapons and ammo guide",
              href: "/guides/weapons-and-ammo/",
              description:
                "Melee and firearms, attachments, tier 1 to 3 loot drops, bunker escalation.",
            },
            {
              label: "Anymaker undead enemy guide",
              href: "/guides/undead-enemies/",
              description:
                "Zombie factions, dangerous area density, gunshot detection at longer range, tier variants.",
            },
          ],
        },
      ],
    },
    {
      id: "survival-and-open-world",
      type: "guide-index",
      heading: "Survival and the open world",
      columns: 1,
      groups: [
        {
          title: "Stay alive and find places",
          items: [
            {
              label: "Anymaker survival tips",
              href: "/guides/survival-tips/",
              description:
                "Hunger, wounds, weather, day-night cycle, four threat factions, Sandbox-first practice.",
            },
            {
              label: "Anymaker map guide",
              href: "/guides/map-and-biomes/",
              description:
                "Surface biomes, abandoned towns, industrial complexes, underground bunkers, direction finders.",
            },
            {
              label: "Anymaker bunker guide",
              href: "/guides/bunkers-and-progression/",
              description:
                "Loot tier 1 to 2 to 3 ladder, what each completion unlocks, world difficulty scaling.",
            },
          ],
        },
      ],
    },
    {
      id: "coop-sandbox-bases",
      type: "guide-index",
      heading: "Co-op, sandbox and bases",
      columns: 1,
      groups: [
        {
          title: "Play with friends and build bases",
          items: [
            {
              label: "Anymaker multiplayer guide",
              href: "/guides/multiplayer/",
              description:
                "6-player co-op in Survival and Sandbox, hosting with a session ID, voice chat and radio.",
            },
            {
              label: "Anymaker sandbox mode guide",
              href: "/guides/sandbox-mode/",
              description:
                "Every unlocked part, unlimited resources, free flight, no-clip, permanent daylight.",
            },
            {
              label: "Anymaker base building guide",
              href: "/guides/base-building/",
              description:
                "Grid-based building system, locations in mountains, towns, forests and shorelines, fortification.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "guide-getting-started",
    "guide-vehicle-building",
    "guide-multiplayer",
    "guide-base-building",
    "guide-sandbox-mode",
    "guide-survival-tips",
  ],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-09",
};
