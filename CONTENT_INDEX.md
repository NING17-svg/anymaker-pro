# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for `anymaker.pro`. The site is single-locale (en-US); no secondary locale is currently configured.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Anymaker guides | Find the best entry point on the Anymaker guide hub | Open beginner guide / Browse guides | Hub | First module exposes the four player-task entries (Getting started, Sandbox, Vehicle building, Multiplayer). |
| `/guides/getting-started/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker beginner guide | Learn the Sandbox-first loop and first-session tasks | Open vehicle building guide | Answer hub | Steps module + prose, no images. |
| `/guides/vehicle-building/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker vehicle building guide | Build a drivable car from the chassis up | Open engine wiring guide | Answer hub | 5 H2 modules: chassis, mechanical, fluid/electrical, vehicle types, build order. |
| `/guides/helicopter-guide/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker helicopter guide | Build and fly a working helicopter | Open vehicle building guide | Answer hub | 5 H2 modules, prose + callout. |
| `/guides/boat-building/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker boat building guide | Build and sail a working boat | Open vehicle building guide | Answer hub | Prose-led explainer. |
| `/guides/engine-wiring/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker engine wiring guide | Wire manifolds, battery, common start/die causes | Open microcontroller programming guide | Answer hub | Troubleshooting + steps. |
| `/guides/microcontroller-programming/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker microcontroller programming guide | Program throttle and auto-start logic | Open vehicle building guide | Answer hub | Steps module. |
| `/guides/weapons-and-ammo/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker weapons and ammo | Find what to loot and how to use it | Open undead enemies guide | Answer hub | Data-table tier comparison. |
| `/guides/undead-enemies/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker undead enemies | Identify and survive zombie encounters | Open survival tips guide | Answer hub | Prose + entity-grid. |
| `/guides/survival-tips/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker survival tips | Avoid hunger, wounds, weather, day-night death | Open map and biomes guide | Answer hub | Data-table + callout. |
| `/guides/map-and-biomes/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker map and biomes | Locate resources and biomes on the open world map | Open bunkers and progression guide | Answer hub | Entity-grid + prose. |
| `/guides/bunkers-and-progression/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker bunkers and progression | Reach and clear bunkers; unlock next tier | Open multiplayer guide | Answer hub | Data-table tier comparison. |
| `/guides/multiplayer/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker multiplayer guide | Host or join 6-player co-op sessions | Open sandbox mode guide | Answer hub | Steps module. |
| `/guides/sandbox-mode/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker sandbox mode guide | Use unlimited parts, free flight, no-clip and permanent daylight | Open base building guide | Answer hub | Prose explainer. |
| `/guides/base-building/` | `src/app/guides/[slug]/page.tsx` | Guide | Anymaker base building guide | Build a safe home base in the open world | Open vehicle building guide | Answer hub | Prose + bulleted list. |

## Generated Route Families

- Fixed landing page: `src/data/pages/home.ts`.
- Dynamic guide routes: `src/app/guides/[slug]/page.tsx` driven by `src/data/pages/guide-pages.ts` and `src/data/navigation.ts`.
- Tool / entity-Hub / entity-detail routes are not enabled in this single-game guide.
- Final route inventory: `npm run routes:manifest` (`out/sitemap.xml` is the public source of truth).

## Content Clusters

- Beginner on-ramp: `/guides/getting-started/`
- Vehicle engineering cluster: `/guides/vehicle-building/`, `/guides/helicopter-guide/`, `/guides/boat-building/`, `/guides/engine-wiring/`, `/guides/microcontroller-programming/`
- Combat & enemies cluster: `/guides/weapons-and-ammo/`, `/guides/undead-enemies/`
- Survival & open-world cluster: `/guides/survival-tips/`, `/guides/map-and-biomes/`, `/guides/bunkers-and-progression/`
- Multiplayer, sandbox & base cluster: `/guides/multiplayer/`, `/guides/sandbox-mode/`, `/guides/base-building/`
- Hub: `/`

## Internal Linking Map

- Homepage lists the four player-task entries (`Getting started`, `Sandbox`, `Vehicle building`, `Multiplayer`) and a full guide-index grouped by cluster.
- Vehicle-engineering guides cross-link chassis / engine / microcontroller.
- Combat guides cross-link weapons ↔ undead enemies ↔ survival tips.
- Survival guides cross-link map/biomes ↔ bunkers and progression.
- Multiplayer and sandbox mode link to vehicle-building as the prerequisite.

## Open Questions

- None at launch. Future content updates should add a new row above before changing any URL, metadata, or schema.