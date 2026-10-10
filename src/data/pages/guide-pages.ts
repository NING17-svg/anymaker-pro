import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-10-09";
const RELATED_VEHICLE = [
  "guide-helicopter-guide",
  "guide-boat-building",
  "guide-engine-wiring",
  "guide-microcontroller-programming",
];
const RELATED_COMBAT = ["guide-undead-enemies"];
const RELATED_SURVIVAL = ["guide-map-and-biomes", "guide-bunkers-and-progression"];
const RELATED_MODES = ["guide-vehicle-building", "guide-sandbox-mode", "guide-base-building"];

export const guidePages: PageContent[] = [
  // 1. getting-started
  {
    id: "guide-getting-started",
    translationKey: "guide-getting-started",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/getting-started",
    url: "/guides/getting-started",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker tutorial path: first steps and the beginner guide",
    seoTitle: "Anymaker Tutorial Path: First Steps and the Beginner Guide",
    metaDescription:
      "Anymaker tutorial path covering the Sandbox-first learning loop, the 3 or 4-cylinder starter engine, vehicle systems basics, and Early Access feedback.",
    summary:
      "Anymaker does not publish a separate in-game tutorial mode, so the Anymaker tutorial is the Sandbox-first learning loop that the developer sets up through Early Access guidance.",
    hero: {
      eyebrow: "Beginner guide",
      subtitle:
        "Start with the Sandbox-first learning loop, then work through chassis, manifolds, microcontroller logic and Survival pressure in order.",
      ctas: []
    },
    quickAnswer:
      "Anymaker does not publish a separate in-game tutorial mode, so the Anymaker tutorial is the Sandbox-first learning loop that the developer sets up through Early Access guidance. The intended onboarding path is to launch Sandbox mode first, where every part and tool is unlocked and there are no threats, and use that mode to learn the grid-based chassis building, modular engine assembly, manifold plumbing, electrical wiring, and microcontroller programming (drag-and-drop or text editing) before tackling Survival.",
    keyFacts: [
      { label: "Tutorial mode", value: "Sandbox acts as the developer’s onboarding classroom" },
      { label: "Starter build", value: "3- or 4-cylinder inline engine with clutched testing" },
      { label: "Onboarding order", value: "Chassis → wiring → microcontroller → specialty → Survival" },
    ],
    modules: [
      {
        id: "why-sandbox-first",
        type: "prose",
        heading: "Why the Anymaker tutorial starts in Sandbox",
        body: "Sandbox has every part and tool unlocked, unlimited resources, free flight, no-clip, and disabled threats. That combination turns the entire Sandbox session into a quiet classroom: a player can place blocks, plumb manifolds, wire a battery, and program a microcontroller without any pressure from the four threat factions or the Survival status systems. Mistakes do not punish here the way they do in Survival, and crashes only damage vehicle components rather than the player.",
      },
      {
        id: "starter-engine",
        type: "prose",
        heading: "The 3 or 4-cylinder starter engine",
        body: "A 3- or 4-cylinder inline engine is the recommended starter build because it is small enough to debug and inexpensive to repair. Start with the chassis, drop the engine in, plumb the four manifolds (air, fuel, exhaust, coolant), and run the electrical wiring from the main battery to the starter, the coolant pump, the fan, and the cabin instruments. Mount an RPS gauge tied to engine output and a temperature sensor on the coolant loop before the first start, then hold the clutch engaged during testing to simplify troubleshooting.",
      },
      {
        id: "learning-order",
        type: "steps",
        heading: "Anymaker tutorial systems to learn in order",
        items: [
          {
            title: "Chassis and mechanical parts",
            body: "Lay the grid-based chassis, place mechanical parts, and attach drivetrain pieces. See the Anymaker vehicle building guide.",
          },
          {
            title: "Manifolds, fuel, exhaust, coolant, and electrical wiring",
            body: "Plumb the four manifolds and run the main battery to active components. See the Anymaker engine wiring guide.",
          },
          {
            title: "Microcontroller logic",
            body: "Wire sensor inputs and outputs in the drag-and-drop or text editor. See the Anymaker microcontroller programming guide.",
          },
          {
            title: "A specialty vehicle type — helicopter, boat, or a base",
            body: "Pick one specialty after the basics work end to end. See the helicopter guide, boat guide, and base building guide for each path.",
          },
          {
            title: "The Survival side of the game",
            body: "Add survival pressure, weather, threat factions, and bunkers one piece at a time. See the Anymaker survival tips, map, and bunker guides.",
          },
        ],
      },
      {
        id: "feedback",
        type: "prose",
        heading: "Feedback channels and Early Access",
        body: "During Early Access the developer actively seeks player feedback through in-game buttons and an Alpha community on Discord with an invite code for earlier testing. Sharing reproduction steps, screenshots, and short video clips of build problems speeds up fixes. The Anymaker multiplayer guide covers co-op options for a group that wants to learn the systems together in a Sandbox session before a Survival push.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_MODES.concat(["guide-vehicle-building", "guide-engine-wiring", "guide-microcontroller-programming"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 2. vehicle-building
  {
    id: "guide-vehicle-building",
    translationKey: "guide-vehicle-building",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/vehicle-building",
    url: "/guides/vehicle-building",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker vehicle building guide: chassis, parts and first-build workflow",
    seoTitle: "Anymaker Vehicle Building Guide: Chassis Parts and Workflow",
    metaDescription:
      "Anymaker vehicle building guide covering the grid-based chassis, mechanical parts, fluid and electrical wiring, vehicle types, build order and testing workflow.",
    summary:
      "Anymaker vehicle building runs on a single grid-based chassis system the player lays block by block, then fills with mechanical parts, fluid piping, electrical wiring, and an optional microcontroller.",
    hero: {
      eyebrow: "Vehicle building",
      subtitle:
        "Lay the grid-based chassis, drop in mechanical parts, plumb the manifolds, wire the battery, then test the result.",
      ctas: []
    },
    quickAnswer:
      "Anymaker vehicle building runs on a single grid-based chassis system the player lays block by block, then fills with mechanical parts, fluid piping, electrical wiring, and an optional microcontroller before driving, flying, or sailing the result. The same grid works for cars, trucks, boats, helicopters, and buildings, so the build order learned here transfers to every vehicle type in the game and to base construction.",
    keyFacts: [
      { label: "Chassis", value: "Single grid system shared by every vehicle type" },
      { label: "Drivetrain", value: "Crankshaft → clutch → transmission → differential" },
      { label: "Vehicle types", value: "Cars, trucks, boats, helicopters, buildings" },
    ],
    modules: [
      {
        id: "chassis-grid",
        type: "prose",
        heading: "The Anymaker vehicle building guide to the chassis grid",
        body: "Every vehicle starts as a chassis of grid blocks. Treat the chassis as the skeleton: structural blocks first, then attachment points for mechanical parts and the cabin. A short, low chassis is easier to balance on early wheels; a long flat chassis suits boats; a wide chassis gives helicopters room to put the rotor directly above the center of mass. Crashes physically damage components, so a stout chassis matters more than it looks on paper.",
      },
      {
        id: "drivetrain",
        type: "prose",
        heading: "Mechanical parts and drivetrain",
        body: "With the chassis in place, mechanical parts come next. Crankshafts, pistons and manifolds turn fuel and air into rotation, then the rotation goes through a clutch, a transmission, and a differential before reaching the wheels or propellers. Marine parts, jet engines, rotors and propellers share the same attachment system, so the same drivetrain pattern works for land, sea and air once the engine itself is built.",
      },
      {
        id: "fluid-electrical",
        type: "prose",
        heading: "Fluid and electrical wiring",
        body: "Vehicles are not just metal: fluid and electrical wiring carry the working bits. Fluid piping connects the fuel tank to the fuel manifold, the exhaust manifold to the outside, and a closed coolant loop with a radiator. Electrical wiring runs from a main battery to the starter motor, then to active components such as coolant pumps, fans, controls and instruments. Microcontrollers can be wired in as well to drive outputs from sensor inputs.",
      },
      {
        id: "vehicle-types",
        type: "prose",
        heading: "Buildable vehicle types",
        body: "Five official vehicle types share the chassis system: cars, trucks, boats, helicopters, and buildings. Vehicles and structures are built on the same grid, and a workshop integration is supported on Steam for transferring designs in and out. Items, parts and even full craft are placeable in-world and testable by hand using the included tools.",
      },
      {
        id: "build-order",
        type: "steps",
        heading: "Build order and testing workflow",
        items: [
          { title: "Lay a short chassis", body: "Wide enough for the cabin and the drivetrain." },
          { title: "Drop in a 3- or 4-cylinder inline engine", body: "Small enough to debug." },
          { title: "Wire the four manifolds", body: "Air, fuel, exhaust, coolant with their pipes." },
          { title: "Run battery wiring", body: "Starter, coolant pump, fan, and cabin instruments." },
          { title: "Add clutch, transmission and wheels", body: "Sizing for the chassis you chose." },
          { title: "Mount the RPS gauge and a temperature sensor", body: "Live readouts for debugging." },
          { title: "Hold the clutch engaged during the first start", body: "Removes drivetrain load from the troubleshooting list." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_VEHICLE.concat(["guide-getting-started"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "drivetrain", slot: "guide-section-break" },
    ],
  },
  // 3. helicopter-guide
  {
    id: "guide-helicopter-guide",
    translationKey: "guide-helicopter-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/helicopter-guide",
    url: "/guides/helicopter-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker helicopter guide: rotors, balance and how to fly one",
    seoTitle: "Anymaker Helicopter Guide: Build, Balance and Fly Rotorcraft",
    metaDescription:
      "Anymaker helicopter guide on rotor parts, blade pitch, anti-torque tail rotor, weight balance, weather impact, Sandbox practice and common crash causes.",
    summary:
      "Helicopters are one of the buildable vehicle types in Anymaker, and the Anymaker helicopter guide is widely treated as the toughest first engineering challenge in the game.",
    hero: {
      eyebrow: "Helicopter guide",
      subtitle:
        "Rotor parts, blade pitch, anti-torque tail rotor, center of mass, weather effects, and Sandbox practice before any Survival flight.",
      ctas: []
    },
    quickAnswer:
      "Helicopters are one of the buildable vehicle types in Anymaker, and the Anymaker helicopter guide is widely treated as the toughest first engineering challenge in the game. They use a Stormworks-style physics model, so realistic blade pitch, cyclic and collective pitch controls, an anti-torque tail rotor, and a center of mass placed close to the main rotor all matter for a stable hover. Mishandled balance turns the craft into a heavy lawn dart on impact.",
    keyFacts: [
      { label: "Propulsion", value: "Rotor-based, sharing the chassis system" },
      { label: "Build order", value: "Center of mass close to the main rotor shaft" },
      { label: "Weather", value: "Wind, rain, fog and lightning each change flight physics" },
    ],
    modules: [
      {
        id: "rotor-parts",
        type: "prose",
        heading: "Anymaker helicopter guide to rotor parts",
        body: "Helicopters share the chassis system with every other vehicle, but the propulsion is rotor-based. Main rotor parts produce lift and require pitch control; tail rotor parts cancel torque and need their own anti-torque setup. Marine parts and jet engines are also available as components, but most first helicopter builds stick to piston engines driving the rotors until the build works.",
      },
      {
        id: "balance",
        type: "prose",
        heading: "Balance and center of mass",
        body: "Keep the center of mass as close to the main rotor shaft as possible. Heavy loads strapped to the nose or tail pull the craft sideways; the further the load sits from the rotor, the harder the cyclic has to compensate and the more likely the helicopter ends up tilted past recovery. A short, stubby fuselage with the cabin directly under the rotor is a forgiving starter layout.",
      },
      {
        id: "weather",
        type: "prose",
        heading: "Weather and flight physics",
        body: "The weather simulation affects flight physics as well as visibility. Wind pushes light helicopters sideways, rain reduces visibility, fog hides landmarks, and lightning is a real hazard around exposed rotor blades. Plan for crosswind landings, expect reduced lift in thinner air at altitude, and treat the cockpit instruments as the truth rather than the visual horizon when the weather is bad.",
      },
      {
        id: "sandbox-practice",
        type: "callout",
        tone: "tip",
        title: "Practice in Sandbox before any Survival flight",
        body: "Sandbox mode is the right place to learn to fly, because threats are disabled and free flight is enabled. Build the helicopter there, lift off gently, hover to test balance, then advance to forward flight and finally to autorotation scenarios.",
      },
      {
        id: "crash-causes",
        type: "prose",
        heading: "Sandbox practice and common crash causes",
        body: "The most common crash causes mirror what real rotorcraft pilots see: hard collective inputs at low altitude, torque imbalance from a too-weak tail rotor, and weight distribution that puts the center of mass off the rotor shaft. Once a helicopter hovers, drifts predictably, and lands cleanly inside the no-threat Sandbox, the same build carries cleanly into Survival or co-op, where the engineering investment pays off against wildlife, undead, hostile survivors, and remaining military forces.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_VEHICLE.concat(["guide-vehicle-building"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
    adAnchors: [
      { after: "balance", slot: "guide-section-break" },
    ],
  },
  // 4. boat-building
  {
    id: "guide-boat-building",
    translationKey: "guide-boat-building",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/boat-building",
    url: "/guides/boat-building",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker boat building guide: hulls, marine parts and buoyancy",
    seoTitle: "Anymaker Boat Building Guide: Marine Hulls and Buoyancy",
    metaDescription:
      "Anymaker boat building guide on watertight hull layout, propellers, jet engines, marine parts, exhaust routing above the waterline, and coastal build locations.",
    summary:
      "Anymaker boat building uses the same grid chassis, modular engine, wiring, and microcontroller systems as land vehicles, with a buoyancy simulation added on top.",
    hero: {
      eyebrow: "Boat building",
      subtitle:
        "Watertight hull layout, marine parts, propellers and jet engines, exhaust above the waterline, coastal build locations.",
      ctas: []
    },
    quickAnswer:
      "Anymaker boat building uses the same grid chassis, modular engine, wiring, and microcontroller systems as land vehicles, with a buoyancy simulation added on top. Boats sit alongside cars, trucks, helicopters, and buildings as an official buildable vehicle type, and coastal shorelines are valid base locations in the open world for both the craft itself and the workshop that supports it.",
    keyFacts: [
      { label: "Hull", value: "Closed grid of hull blocks with no gaps" },
      { label: "Propulsion", value: "Propellers, jet engines, pumps for bilge and cooling" },
      { label: "Build location", value: "Coastal shorelines and shore-based bases" },
    ],
    modules: [
      {
        id: "hull-layout",
        type: "prose",
        heading: "Anymaker boat building guide to hull layout",
        body: "A watertight hull is the foundation of any boat. Lay a closed grid of hull blocks with no gaps, sized for the cabin, the engine bay, and any cargo or weapons platforms. A wider, flatter hull is more stable at low speeds; a narrower, deeper hull cuts through waves better but punishes sloppy weight placement. The chassis blocks used here are the same ones used in cars and trucks, so the build shares muscle memory with the rest of the Anymaker vehicle building guide.",
      },
      {
        id: "marine-parts",
        type: "prose",
        heading: "Marine parts and propulsion",
        body: "Once the hull is sealed, propulsion comes from marine parts: propellers for most boats, jet engines for faster craft, and pumps for bilge and cooling. Position propellers below the waterline and keep them clear of hull blocks to avoid cavitation damage; jet intakes want clear water in front of them and outlets clear of obstacles behind. Speed and direction are tuned in the same way as land drivetrains — through the engine, transmission and propeller or jet setup, plus the trim and rudder controls wired into the cabin.",
      },
      {
        id: "engine-wiring",
        type: "prose",
        heading: "Engine, wiring, and exhaust routing",
        body: "The same modular engine and manifolds from the Anymaker engine wiring guide apply on a boat. The big difference is exhaust routing: route exhaust manifolds above the waterline, ideally aft and to the side, so backpressure does not stall a running engine. Wire the main battery to the starter, the bilge pump, the cabin instruments, and any fish-finder electronics through the same electrical wiring system used elsewhere, and consider adding a microcontroller to automate bilge pump power on water ingress.",
      },
      {
        id: "build-locations",
        type: "prose",
        heading: "Where to build boats",
        body: "Coastal shorelines and shore-based base locations are the natural places to build a boat — water is right there, the engine can be tested immediately, and a workshop can be built next to the slip for repair work. Marine craft also pair well with bunker runs along rivers and coastal towns, since the boat can be parked out of sight while the squad clears loot inside.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_VEHICLE.concat(["guide-vehicle-building", "guide-base-building"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 5. engine-wiring
  {
    id: "guide-engine-wiring",
    translationKey: "guide-engine-wiring",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/engine-wiring",
    url: "/guides/engine-wiring",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker engine wiring guide: fuel, air, exhaust and cooling",
    seoTitle: "Anymaker Engine Wiring Guide: Plumb and Tune a Modular Motor",
    metaDescription:
      "Anymaker engine wiring guide covering crankshafts, pistons, manifolds, fuel, exhaust, coolant loops, wiring from the main battery, and common start-die causes.",
    summary:
      "An Anymaker engine is a network of subsystems, not a single block. The mechanical core is a crankshaft driving pistons through cylinders.",
    hero: {
      eyebrow: "Engine wiring",
      subtitle:
        "Crankshaft and pistons, the four manifolds, electrical wiring from the main battery, and the common reasons a small engine starts then dies.",
      ctas: []
    },
    quickAnswer:
      "An Anymaker engine is a network of subsystems, not a single block. The mechanical core is a crankshaft driving pistons through cylinders, paired with a starter motor, a clutch, and the rest of the drivetrain (transmission, differential, wheels or propellers). Four manifolds route intake air, fuel, exhaust gas, and coolant between the cylinders and the rest of the vehicle. A working engine is one where all four manifold loops are plumbed, electrical wiring is in place from the main battery, and the trim levels let the engine keep running at idle and under load.",
    keyFacts: [
      { label: "Manifolds", value: "Air, fuel, exhaust, coolant — each on its own loop" },
      { label: "Power source", value: "Main battery to starter, pumps, fan, instruments" },
      { label: "Common failure", value: "Engine starts and dies within seconds" },
    ],
    modules: [
      {
        id: "manifolds",
        type: "data-table",
        heading: "The Anymaker engine wiring guide to manifolds",
        columns: [
          { key: "loop", label: "Manifold" },
          { key: "purpose", label: "Function" },
          { key: "components", label: "Anchors and routing" },
        ],
        rows: [
          { loop: "Air", purpose: "Pulls intake air in from outside the vehicle.", components: "Open grille → cylinders" },
          { loop: "Fuel", purpose: "Pulls liquid fuel from the fuel tank.", components: "Tank → manifold → cylinders" },
          { loop: "Exhaust", purpose: "Collects exhaust gas and routes it out of the vehicle.", components: "Cylinders → manifold → muffler (optional)" },
          { loop: "Coolant", purpose: "Circulates coolant around the cylinders to a radiator.", components: "Cylinders → radiator + electric fan" },
        ],
      },
      {
        id: "crankshaft",
        type: "prose",
        heading: "Crankshaft, pistons, starter and drivetrain",
        body: "Mechanical parts must be assembled in the right order, or the engine does not turn over. Crankshaft blocks need to be aligned with the pistons and cylinders. The starter motor engages the engine through a clutch that should be held engaged during early testing to remove one variable from the troubleshooting list. The drivetrain — transmission, differential, then wheels, propellers, or rotors — receives rotation once the engine runs. A 3- or 4-cylinder inline configuration is the recommended beginner engine. Smaller engines are easier to debug and less expensive to repair after a crash, which matters because vehicle components take physical damage.",
      },
      {
        id: "battery-wiring",
        type: "prose",
        heading: "Electrical wiring from the main battery",
        body: "Electrical wiring runs from the main battery outward to the active components. The starter motor needs power to crank. Coolant pumps, electric fans, fuel pumps and cabin controls also need battery power to function. Wiring is run as segments between components; an unpowered pump or fan in the cooling loop is the same problem as no pump or fan at all. Live instruments make debugging much easier. Mount an RPS gauge tied to engine output and a temperature sensor on the coolant loop before the first start, so a misbehaving engine produces real numbers instead of guesses.",
      },
      {
        id: "start-die",
        type: "data-table",
        heading: "Common start-die causes and fixes",
        columns: [
          { key: "cause", label: "Symptom" },
          { key: "fix", label: "Check first" },
        ],
        rows: [
          { cause: "Blocked exhaust manifold or muffler creating backpressure.", fix: "Inspect exhaust routing and the muffler for obstructions." },
          { cause: "Fuel-to-air ratio far from the starting baseline.", fix: "Re-baseline fuel and air inputs on the manifold." },
          { cause: "Coolant pump or fan running unpowered, so the engine overheats within seconds.", fix: "Confirm battery wiring is reaching the pump and the fan." },
          { cause: "Clutch misrouted or stuck, so the drivetrain is loaded before the engine settles.", fix: "Hold the clutch engaged during testing to remove that variable." },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_VEHICLE.concat(["guide-vehicle-building"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 6. microcontroller-programming
  {
    id: "guide-microcontroller-programming",
    translationKey: "guide-microcontroller-programming",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/microcontroller-programming",
    url: "/guides/microcontroller-programming",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker microcontroller programming guide: blocks, text and logic",
    seoTitle: "Anymaker Microcontroller Programming Guide for Vehicle Logic",
    metaDescription:
      "Anymaker microcontroller programming guide on drag-and-drop blocks and text editing, sensor inputs, outputs, throttle splitting, and startup sequences.",
    summary:
      "Anymaker microcontrollers are first-class components inside vehicles, and the Anymaker microcontroller programming guide is the place to start when a craft needs automated startup, mixed-mode throttle logic, or a custom flight controller for a helicopter.",
    hero: {
      eyebrow: "Microcontroller programming",
      subtitle:
        "Drag-and-drop blocks or text editing, sensor inputs, outputs, the baseline throttle-splitting logic, and full startup sequences.",
      ctas: []
    },
    quickAnswer:
      "Anymaker microcontrollers are first-class components inside vehicles, and the Anymaker microcontroller programming guide is the place to start when a craft needs automated startup, mixed-mode throttle logic, or a custom flight controller for a helicopter. Microcontrollers take sensor inputs (throttle, switches, RPS, temperature) and drive outputs (manifolds, pumps, instruments, automated startup sequences), which is what lets a single engine behave well across idle, cruise, and wide-open throttle rather than stalling or running lean at one extreme.",
    keyFacts: [
      { label: "Editor modes", value: "Drag-and-drop blocks or text editing on the same component" },
      { label: "Inputs", value: "Throttle, starter switch, RPS, temperature" },
      { label: "Baseline", value: "Throttle-split: air to fuel, x / 2" },
    ],
    modules: [
      {
        id: "editor-modes",
        type: "data-table",
        heading: "Anymaker microcontroller programming guide to editor modes",
        columns: [
          { key: "mode", label: "Mode" },
          { key: "use", label: "Best for" },
          { key: "tradeoff", label: "Note" },
        ],
        rows: [
          {
            mode: "Drag-and-drop logic blocks",
            use: "Visual editor wiring inputs through condition blocks, math blocks, and outputs without typing code.",
            tradeoff: "Best for prototyping and players who do not want to write anything.",
          },
          {
            mode: "Text editing",
            use: "Text-based editor for the same logic, suited to compact logic when the visual flow gets busy.",
            tradeoff: "Handy for refining a block-built draft once the system gets dense.",
          },
        ],
      },
      {
        id: "inputs-outputs",
        type: "prose",
        heading: "Inputs and outputs in practice",
        body: "A practical controller has clear inputs on one side and clear outputs on the other. Typical inputs are a throttle lever, a starter switch, an RPS sensor, and a temperature sensor. Typical outputs are the fuel manifold, the air manifold, an electric fuel pump, and a dashboard LED or gauge. Naming each input and output makes the rest of the logic easier to follow, especially for helicopter flight controllers where several rotor heads and a tail rotor each want their own control signals.",
      },
      {
        id: "throttle-baseline",
        type: "steps",
        heading: "The baseline throttle-splitting logic",
        items: [
          { title: "Connect the throttle lever directly to the air manifold", body: "Start with the air path as the master signal." },
          { title: "Split the signal so the same value reaches two branches", body: "One branch is for the air side, one is for the fuel side." },
          { title: "Route one branch through a function block set to divide by two (x / 2)", body: "Use a math block to scale the signal." },
          { title: "Send the function block output to the fuel manifold", body: "This produces a clean starting fuel-to-air ratio." },
        ],
      },
      {
        id: "startup-sequences",
        type: "prose",
        heading: "Startup sequences and scaling logic",
        body: "For anything more than a basic engine, use the microcontroller for the full startup sequence: prime the fuel pump, engage the starter until RPS climbs above a threshold, release the clutch, idle down to a target RPM, then enable a fan and a coolant pump when engine temperature crosses a setpoint. Once the engine is running, the same microcontroller can throttle based on a pedal, drive a turbo wastegate, or coordinate anti-torque on a helicopter tail rotor. Move from baseline logic to layered logic in small steps. Build, run, log the sensors, change one block or one line, build and run again. The Anymaker engine wiring guide pairs with this guide because the wiring tells the microcontroller which inputs are real and which outputs the engine actually listens to.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_VEHICLE.concat(["guide-vehicle-building", "guide-engine-wiring"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 7. weapons-and-ammo
  {
    id: "guide-weapons-and-ammo",
    translationKey: "guide-weapons-and-ammo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/weapons-and-ammo",
    url: "/guides/weapons-and-ammo",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker weapons and ammo guide: categories, attachments and tiers",
    seoTitle: "Anymaker Weapons and Ammo Guide: Melee, Firearms, and Tiers",
    metaDescription:
      "Anymaker weapons and ammo guide covering melee and firearms, attachments, tier 1 to 3 loot drops, bunker escalation, and how gunshots change engagement range.",
    summary:
      "Anymaker weapons split into melee and firearms, supported by an ammunition and attachments system. Weapons are scavenged from the open world or earned through bunker completions.",
    hero: {
      eyebrow: "Weapons and ammo",
      subtitle:
        "Melee and firearm categories, attachments, loot tier 1 to 3 escalation, and how gunshots change engagement range.",
      ctas: []
    },
    quickAnswer:
      "Anymaker weapons split into melee and firearms, supported by an ammunition and attachments system. Weapons are scavenged from the open world or earned through bunker completions, and loot drops come in three tiers — a sling appears in tier 1, while higher tiers include better firearms and attachments as well as stronger threats. The Anymaker weapons and ammo guide covers both halves: what is in each category and how tier escalation reshapes the threat side of every encounter.",
    keyFacts: [
      { label: "Categories", value: "Melee + firearms (handguns, SMGs, MGs, auto/bolt rifles)" },
      { label: "Loot tiers", value: "Tier 1 starter → Tier 2 mid → Tier 3 end-game" },
      { label: "Tactical note", value: "Gunshots pull extra threats at a longer range" },
    ],
    modules: [
      {
        id: "categories",
        type: "data-table",
        heading: "Anymaker weapons and ammo guide to melee and firearm categories",
        columns: [
          { key: "kind", label: "Category" },
          { key: "use", label: "When to reach for it" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          {
            kind: "Melee weapons",
            use: "Close range and silent — useful when wildlife, undead, hostile NPC survivors, or military patrols are nearby and a gunshot would pull in more of them.",
            notes: "Damage has been progressively raised across updates.",
          },
          {
            kind: "Handguns (including suppressed variants)",
            use: "Quiet sidearms for closer work and stealthy disengages.",
            notes: "Suppressors cut long-range gunshot detection.",
          },
          {
            kind: "Submachine guns",
            use: "Mid-range crowd control inside towns and bunker approaches.",
            notes: "Higher rate of fire increases noise at distance.",
          },
          {
            kind: "Machine guns",
            use: "Suppressive fire and sustained clearing of compound-sized threats.",
            notes: "Pair with a vehicle for sustained engagements.",
          },
          {
            kind: "Auto rifles",
            use: "General-purpose mid-range combat for the standard four-faction pressure.",
            notes: "Favored default once tier 2 unlocks are in hand.",
          },
          {
            kind: "Bolt-action rifles",
            use: "Long-range precision and scout work before committing to a route.",
            notes: "Quietest long-range option when paired with a suppressor.",
          },
        ],
      },
      {
        id: "attachments-ammo",
        type: "prose",
        heading: "Attachments and ammo",
        body: "Ammunition is per-category: the gun takes its matching ammo type, and attachments such as suppressors, extended magazines, sights, and grips are slotted per weapon. Loot of all kinds — weapons, ammo, attachments, and armor — comes from world scavenging and from bunker runs. Quantity and quality both rise with the loot tier of the area, which is in turn driven by completed bunkers.",
      },
      {
        id: "loot-tiers",
        type: "data-table",
        heading: "Loot tiers 1 to 3 and bunker escalation",
        columns: [
          { key: "tier", label: "Loot tier" },
          { key: "unlocks", label: "What's available" },
          { key: "threat", label: "Difficulty scaling" },
        ],
        rows: [
          {
            tier: "Tier 1",
            unlocks: "Starter loot. A sling appears here; firearms are basic and attachments are scarce.",
            threat: "Standard enemies, wildlife, undead, hostile NPC survivors, military forces.",
          },
          {
            tier: "Tier 2",
            unlocks: "Middle tier after completing the first set of bunkers — better mid-range firearms and more useful attachments.",
            threat: "Tougher undead, denser patrols, and better-armed survivors.",
          },
          {
            tier: "Tier 3",
            unlocks: "End-game tier after completing harder bunkers — strongest firearms, top-tier attachments, and the strongest enemies alongside them.",
            threat: "Plan a stockpile of food, clothes, building materials, and repair parts when pushing for tier 3.",
          },
        ],
      },
      {
        id: "gunshot-range",
        type: "callout",
        tone: "caution",
        title: "Loud weapons are a tactical choice, not a default",
        body: "NPCs, animals, and zombies react to gunshots at a longer range than they react to melee. Firing a gun nearby can pull in additional undead, animals, and survivors from further away than a melee swing would, which makes loud weapons a tactical choice rather than a default. Suppressors and melee are the right tools when staying quiet matters; open firearms are the right tool when the goal is to clear out a wide area or push a bunker.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_COMBAT.concat(["guide-bunkers-and-progression", "guide-survival-tips"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 8. undead-enemies
  {
    id: "guide-undead-enemies",
    translationKey: "guide-undead-enemies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/undead-enemies",
    url: "/guides/undead-enemies",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker undead enemy guide: factions, range and tier unlocks",
    seoTitle: "Anymaker Undead Enemy Guide: Threats, Range and Tier Unlocks",
    metaDescription:
      "Anymaker undead enemy guide on zombie factions, dangerous area density, gunshot detection at longer range, and new variants unlocked by bunker loot tiers.",
    summary:
      "Anymaker undead (zombies) are one of the four enemy factions in the game, alongside wildlife, hostile NPC survivors, and remaining military forces.",
    hero: {
      eyebrow: "Undead enemies",
      subtitle:
        "Where undead spawn, how they react to noise, and how new variants unlock as bunker loot tiers push the world from tier 1 to tier 3.",
      ctas: []
    },
    quickAnswer:
      "Anymaker undead (zombies) are one of the four enemy factions in the game, alongside wildlife, hostile NPC survivors, and remaining military forces. The Anymaker undead enemy guide covers where undead spawn, how they react to noise, and how new variants become available as bunker loot tiers push the world from tier 1 to tier 3.",
    keyFacts: [
      { label: "Faction", value: "Undead alongside wildlife, hostile survivors, military" },
      { label: "Density", value: "Wilderness → towns → industrial bunkers (low → high)" },
      { label: "Detection", value: "Gunshots pull extra undead at longer range than melee" },
    ],
    modules: [
      {
        id: "undead-faction",
        type: "prose",
        heading: "Anymaker undead enemy guide to undead as a faction",
        body: "The undead are present from the start of a Survival session and serve as a melee-friendly close-range threat. They patrol the wilderness and the edges of built-up areas, with higher concentrations in dangerous areas where loot is also better. A routine scavenging run can turn into a panicked escape if a player is caught out of position, so scouting at distance — binoculars, a slow vehicle, or a microphone-equipped teammate — pays off before committing to a route.",
      },
      {
        id: "where-they-spawn",
        type: "data-table",
        heading: "Where they show up",
        columns: [
          { key: "area", label: "Location" },
          { key: "density", label: "Density" },
          { key: "tactic", label: "Field tactic" },
        ],
        rows: [
          {
            area: "Wilderness and forests",
            density: "Scattered patrols, fewer in number and easier to slip past.",
            tactic: "Favorable wind, weather, and time of day help avoid them.",
          },
          {
            area: "Town edges and abandoned settlements",
            density: "Medium density, with pathways through the rubble but louder fights when engaged.",
            tactic: "Lighter and quieter builds stay on the player's side.",
          },
          {
            area: "Industrial complexes and bunker approaches",
            density: "Highest density and the strongest individual variants, especially at higher loot tiers.",
            tactic: "Coordinate with a squad or a fortified base before pushing.",
          },
        ],
      },
      {
        id: "gunshot-detection",
        type: "prose",
        heading: "Gunshot detection at longer range",
        body: "Undead react to gunshots at a longer range than to melee. Firing a gun nearby can pull in additional undead from further away, which means louder weapons often turn a one-on-one into a multi-on-one engagement. Suppressor-equipped firearms and melee weapons keep engagements quiet; loud firearms are reserved for when the player is ready to clear an area or push a stronghold.",
      },
      {
        id: "tier-variants",
        type: "data-table",
        heading: "Tier variants unlocked by bunkers",
        columns: [
          { key: "tier", label: "Loot tier" },
          { key: "variants", label: "Undead variants" },
          { key: "pressure", label: "What the player faces" },
        ],
        rows: [
          {
            tier: "Tier 1",
            variants: "Starter variants in light densities.",
            pressure: "Standard undead patrols close to towns and roads.",
          },
          {
            tier: "Tier 2",
            variants: "Tougher variants, denser patrols, and more ambush-prone setups after the first bunker completions.",
            pressure: "Frequent ambushes near industrial and abandoned settlements.",
          },
          {
            tier: "Tier 3",
            variants: "The toughest variants, denser concentrations, and the strongest gear drops alongside them.",
            pressure: "A fortified base, a working vehicle, and a coordinated 6-player squad all matter more once the world is at tier 3.",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_COMBAT.concat(["guide-weapons-and-ammo", "guide-bunkers-and-progression"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 9. survival-tips
  {
    id: "guide-survival-tips",
    translationKey: "guide-survival-tips",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/survival-tips",
    url: "/guides/survival-tips",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker survival tips: hunger, wounds, weather and threats",
    seoTitle: "Anymaker Survival Tips: Hunger, Wounds, Weather and Threats",
    metaDescription:
      "Anymaker survival tips on hunger and wounds, weather effects including wind and lightning, threat factions, gunshot range, and Sandbox practice first.",
    summary:
      "Anymaker Survival mode stacks environmental, biological, and combat pressure on the player at the same time.",
    hero: {
      eyebrow: "Survival tips",
      subtitle:
        "Hunger and wounds, weather and the day-night cycle, four threat factions, and the vehicle-first mindset that keeps a run alive.",
      ctas: []
    },
    quickAnswer:
      "Anymaker Survival mode stacks environmental, biological, and combat pressure on the player at the same time. The two status systems are hunger and wounds; the environmental systems are a day-night cycle and a full weather simulation that includes wind, rain, fog, temperature changes, and lightning storms, which is why clothing and shelter matter as much as weapons. The threat systems are four factions: wildlife, undead, hostile NPC survivors, and remaining military forces. The Anymaker survival tips below are what consistently keeps a long Survival run moving when all four pressure systems are active.",
    keyFacts: [
      { label: "Status systems", value: "Hunger + wounds" },
      { label: "Weather", value: "Wind, rain, fog, temperature, lightning, day-night cycle" },
      { label: "Mindset", value: "Build the small reliable engine first, then push further" },
    ],
    modules: [
      {
        id: "hunger-wounds",
        type: "prose",
        heading: "Anymaker survival tips for hunger and wounds",
        body: "Hunger is the slow clock that drives the day: keep it topped up by scavenging food wherever it spawns — abandoned houses, towns, vehicle trunks, and bunker caches are all reliable sources. Wounds heal on their own time but get dragged out by extreme weather or by fighting while already injured, so a small retreat to shelter usually beats a third straight fight. Combined, hunger and wounds decide whether the next exploration push is reasonable or reckless.",
      },
      {
        id: "weather-day-night",
        type: "callout",
        tone: "tip",
        title: "Pack for two seasons at once",
        body: "Wind pushes light vehicles sideways, rain reduces visibility, fog hides landmarks, lightning is a real hazard around exposed equipment, and temperature swings change what clothes are worth wearing. Plan for cold nights at altitude and storms when crossing open plains; carry both a warm layer and a dry layer even at temperate biomes, because weather shifts faster than a player can re-equip.",
      },
      {
        id: "threat-factions",
        type: "prose",
        heading: "Threat factions and noise",
        body: "Four factions share the world: wildlife, undead, hostile NPC survivors, and remaining military forces. Gunshots pull NPCs, animals, and undead in at a longer range than melee does, so loud weapons are a tactical choice. Travel by vehicle whenever possible — physics-driven vehicles are faster, safer, and a working 3- or 4-cylinder inline car is a recommended starting rig — and use scoped or suppressed engagements when noise is a problem.",
      },
      {
        id: "vehicles-survival",
        type: "prose",
        heading: "Vehicles as part of survival",
        body: "Because components take physical damage in crashes, the player who builds a small reliable engine first stays alive longer. Follow the Anymaker vehicle building guide for the chassis system, then the Anymaker engine wiring guide for the manifolds and the main battery wiring, and only after that push into helicopters or boats. Sandbox mode is the best place to learn this before Survival, because threats are disabled and every part and tool is unlocked from the start. The official pitch notes that \"the only safe places are those you make,\" which means base building is the long-term survival answer — see the Anymaker base building guide for grid layout and fortification.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_SURVIVAL.concat(["guide-vehicle-building", "guide-base-building", "guide-undead-enemies"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 10. map-and-biomes
  {
    id: "guide-map-and-biomes",
    translationKey: "guide-map-and-biomes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/map-and-biomes",
    url: "/guides/map-and-biomes",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker map: biomes, towns, bunkers and exploration",
    seoTitle: "Anymaker Map Guide: Biomes, Towns, Bunkers and Exploration",
    metaDescription:
      "Anymaker map guide covering biomes like mountains and shorelines, abandoned towns, industrial complexes, underground bunkers, weather and direction finders.",
    summary:
      "The Anymaker open world is a large map built from several biome types: mountains, plains, forests, shorelines and coasts, abandoned towns, and industrial complexes.",
    hero: {
      eyebrow: "Map and biomes",
      subtitle:
        "Surface biomes, abandoned towns and patrols, industrial complexes, underground bunkers, and the direction finder tool for cross-biome exploration.",
      ctas: []
    },
    quickAnswer:
      "The Anymaker open world is a large map built from several biome types: mountains, plains, forests, shorelines and coasts, abandoned towns, and industrial complexes. Underground military and research complexes (the bunkers) sit beneath this surface and form the game's main story hook, with weather and a day-night cycle active across the entire world. The Anymaker map guide below summarizes what players find in each biome, where enemy activity tends to concentrate, and what tools help with navigation.",
    keyFacts: [
      { label: "Surface biomes", value: "Mountains, plains, forests, shorelines, towns, industrial" },
      { label: "Bunker hook", value: "Underground bunkers drive loot tier progression" },
      { label: "Navigation", value: "Direction finder with frequency cartridges" },
    ],
    modules: [
      {
        id: "surface-biomes",
        type: "data-table",
        heading: "Anymaker map surface biomes and locations",
        columns: [
          { key: "biome", label: "Biome" },
          { key: "feel", label: "Terrain, weather, build potential" },
        ],
        rows: [
          {
            biome: "Mountains",
            feel: "Rough terrain, longer routes, exposed to wind and lightning, but good sightlines and hidden bunker approaches.",
          },
          {
            biome: "Plains",
            feel: "Fast driving, moderate visibility, average loot density, and good open areas for base expansion.",
          },
          {
            biome: "Forests",
            feel: "Low visibility, dense foliage, quieter patrols, and useful cover for cautious scavenging runs.",
          },
          {
            biome: "Shorelines and coasts",
            feel: "Ocean access for boats, exposed to weather rolling in from the water, and direct access to marine parts testing.",
          },
          {
            biome: "Industrial complexes and abandoned towns",
            feel: "Highest loot density, highest undead density, and the best places to find bunker entrances.",
          },
        ],
      },
      {
        id: "towns-patrols",
        type: "prose",
        heading: "Towns, patrols, and NPCs",
        body: "Abandoned towns have been expanded with roaming NPC survivors who follow roads and patrol built-up areas. Larger patrols in bigger settlements mean loud fights are common here, and gunshots at longer range pull in extra NPCs from neighboring streets. Suppressed firearms and melee stay effective; open firearms only fit when the goal is to clear the area. Industrial complexes carry the same density with more vertical terrain and bunker connections.",
      },
      {
        id: "bunkers-surface",
        type: "prose",
        heading: "Underground bunkers on the surface",
        body: "A map's surface hides underground military and research complexes below it. These bunkers are the main story hook and the source of the loot tier progression. Finding bunker entrances is one of the main reasons to carry a direction finder while exploring — the Anymaker bunker guide covers what finishing one unlocks.",
      },
      {
        id: "navigation-tools",
        type: "prose",
        heading: "Tools for navigation",
        body: "Direction finders require frequency cartridges to locate valuable points of interest, including bunker entrances and other rare sites. Pair a direction finder with the weather forecast (wind, rain, fog) and the day-night cycle to plan cross-biome runs that avoid the worst storms. Detailed coordinates, named map regions, and a step-by-step route between zones are not part of the early-access map data the developer has published, so players should expect more surface locations to be added during Early Access rather than rely on a fixed atlas.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_SURVIVAL.concat(["guide-survival-tips"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 11. bunkers-and-progression
  {
    id: "guide-bunkers-and-progression",
    translationKey: "guide-bunkers-and-progression",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/bunkers-and-progression",
    url: "/guides/bunkers-and-progression",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker bunker walkthrough: tier progression and unlocks",
    seoTitle: "Anymaker Bunker Walkthrough: Tier Progression and Unlocks",
    metaDescription:
      "Anymaker bunker walkthrough covering loot tier 1 to 3 escalation, parts and enemy unlocks per completion, and the world's rising difficulty after each run.",
    summary:
      "Anymaker bunkers are the sprawling underground military and research complexes that sit beneath the open world.",
    hero: {
      eyebrow: "Bunkers and progression",
      subtitle:
        "Loot tier 1 to 2 to 3 escalation, parts and enemy unlocks per completion, and the world's rising difficulty after each run.",
      ctas: []
    },
    quickAnswer:
      "Anymaker bunkers are the sprawling underground military and research complexes that sit beneath the open world. The Anymaker bunker walkthrough stays focused on what each completion does to the surrounding world: room-by-room walkthroughs, named bunker counts, and exact loot tables are not part of the published materials, but the loot tier ladder and the unlocks per completion are well documented and form the core of the bunker experience.",
    keyFacts: [
      { label: "Bunker types", value: "Government bunkers and research bunkers" },
      { label: "Tier ladder", value: "Tier 1 starter → Tier 2 mid → Tier 3 end-game" },
      { label: "Unlocks", value: "Parts, items, weapons, and tougher enemies" },
    ],
    modules: [
      {
        id: "what-this-covers",
        type: "prose",
        heading: "What this Anymaker bunker walkthrough covers",
        body: "Bunkers are both lore locations and loot locations. Their stated purpose is to explain the events and mistakes that led to the disaster, and the bunker layout mixes military and research themes. Two named variants appear in the materials: government bunkers and research bunkers. Each variant spawns thematic loot — gear matching the bunker type — and the entrance can be found via the direction finder described in the Anymaker map guide.",
      },
      {
        id: "tier-escalation",
        type: "data-table",
        heading: "Loot tier 1 to 3 escalation",
        columns: [
          { key: "tier", label: "Tier" },
          { key: "trigger", label: "Trigger" },
          { key: "effect", label: "Effect on the world" },
        ],
        rows: [
          {
            tier: "Tier 1",
            trigger: "Starter world state.",
            effect: "A sling and other basic loot. Wildlife, undead, hostile NPC survivors, and remaining military forces are the standard enemies.",
          },
          {
            tier: "Tier 2",
            trigger: "After first bunker completions.",
            effect: "Better firearms, more useful attachments, denser patrols, and tougher undead.",
          },
          {
            tier: "Tier 3",
            trigger: "After harder bunker completions.",
            effect: "The strongest firearms, top-tier attachments, the toughest variants of undead and military forces, and the densest concentrations.",
          },
        ],
      },
      {
        id: "unlocks",
        type: "prose",
        heading: "Anymaker bunker walkthrough unlocks per completion",
        body: "Each completion of a bunker unlocks more advanced parts, items, weapons, and enemies. Parts unlocked here feed back into the Anymaker vehicle building guide, the Anymaker engine wiring guide, and the Anymaker weapons and ammo guide — better parts mean better chassis rigs, better engines, and better firearms. Items include armor, clothing, food caches, and building materials that support longer Survival runs. Enemies unlocked here are also stronger, which is why having a fortified base and a working vehicle matters more at higher tiers.",
      },
      {
        id: "world-scaling",
        type: "callout",
        tone: "caution",
        title: "Scale your preparation alongside the world",
        body: "Because loot tier pushes difficulty as well as gear, players approaching a new bunker tier should expect stronger patrols around the bunker entrance, denser undead spawns in nearby biomes, heavier military presence on the routes between bunkers, and more damage per fight from NPCs and from wildlife. Plan with the Anymaker survival tips, not against them: stockpile food, repair parts, fuel, and ammunition; pick a defensible base of operations; coordinate with up to five other players via the Anymaker multiplayer guide if the bunker feels heavier than a solo run can handle.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_SURVIVAL.concat(["guide-multiplayer", "guide-weapons-and-ammo"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 12. multiplayer
  {
    id: "guide-multiplayer",
    translationKey: "guide-multiplayer",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/multiplayer",
    url: "/guides/multiplayer",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker multiplayer guide: 6-player co-op and how to host or join",
    seoTitle: "Anymaker Multiplayer Guide: 6-Player Co-op and How to Host",
    metaDescription:
      "Anymaker multiplayer guide for 6-player co-op in Survival and Sandbox, hosting with a session ID, joining via the multiplayer menu, voice chat and radio.",
    summary:
      "Anymaker multiplayer is online co-op for up to 6 players, supported in both Survival and Sandbox modes.",
    hero: {
      eyebrow: "Multiplayer",
      subtitle:
        "6-player co-op in Survival and Sandbox, hosting with a session ID, joining via the multiplayer menu, voice chat and radio.",
      ctas: []
    },
    quickAnswer:
      "Anymaker multiplayer is online co-op for up to 6 players, supported in both Survival and Sandbox modes. The Anymaker multiplayer guide below covers the three things every group needs to start: confirming 6-player co-op is the right size, knowing who hosts and how the session ID flows, and using voice chat and radio to coordinate while building and driving.",
    keyFacts: [
      { label: "Capacity", value: "Up to 6 players online" },
      { label: "Modes", value: "Survival and Sandbox both support co-op" },
      { label: "Joining", value: "Host's session ID via the multiplayer menu" },
    ],
    modules: [
      {
        id: "six-player-coop",
        type: "prose",
        heading: "Anymaker multiplayer guide to 6-player co-op",
        body: "Co-op carries every game feature into the squad. Multiple players can work on the same vehicle at the same time, share inventory, scavenge, and explore together. The same world, weather, day-night cycle, threat factions, and bunkers are present, and progress carries for the host's world. Both Survival and Sandbox run on this multi-player setup; Sandbox co-op is a low-pressure way to learn the building systems together before a Survival run.",
      },
      {
        id: "hosting",
        type: "prose",
        heading: "Hosting with a session ID",
        body: "A host creates a multiplayer session and receives a session ID. The host is the one who decides world settings — Survival or Sandbox, difficulty, and any host-side options — and is the reference point for the shared world. Other players join by entering that session ID through the multiplayer menu. Keep the session ID inside the squad; it is the only credential needed to enter.",
      },
      {
        id: "joining-voice",
        type: "steps",
        heading: "Joining, voice chat and radio",
        items: [
          { title: "Open the multiplayer menu", body: "Pick 'Join' from the multiplayer screen." },
          { title: "Enter the host's session ID", body: "The ID is the only credential needed to enter." },
          { title: "Confirm the squad is in the same world", body: "Check the multiplayer status indicator or in-game menu." },
          { title: "Use voice chat and radio for coordination", body: "Useful for threats, bunker approaches, and part swaps mid-build." },
          { title: "Assign squad roles for the run", body: "Driver, gunner, builder, scout — get the most out of the 6-player ceiling." },
        ],
      },
      {
        id: "coop-vehicle-building",
        type: "prose",
        heading: "Co-op vehicle building",
        body: "Co-op vehicle building is one of the strongest reasons to play multiplayer. One player can lay the chassis, another can assemble the engine, a third can wire the manifolds and battery, a fourth can program the microcontroller, and the rest can scavenge parts or man defenses. The chassis system itself is the same one introduced in the Anymaker vehicle building guide; the only change is that multiple players can place blocks and parts on the same vehicle at once. Plan roles before a big build so each squad member is doing the part of the build they are best at.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_MODES.concat(["guide-vehicle-building", "guide-base-building"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 13. sandbox-mode
  {
    id: "guide-sandbox-mode",
    translationKey: "guide-sandbox-mode",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/sandbox-mode",
    url: "/guides/sandbox-mode",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker sandbox mode guide: free flight, every part, no threats",
    seoTitle: "Anymaker Sandbox Mode Guide: Free Flight, Parts, No Threats",
    metaDescription:
      "Anymaker sandbox mode guide on every unlocked part, unlimited resources, free flight, no-clip, permanent daylight, disabled threats, and co-op practice.",
    summary:
      "Anymaker Sandbox mode is the unrestricted creative counterpart to Survival. Every part and tool is unlocked from the start, unlimited resources are available, free flight is enabled, no-clip and permanent daylight options are present, and threats are disabled.",
    hero: {
      eyebrow: "Sandbox mode",
      subtitle:
        "Every unlocked part, unlimited resources, free flight, no-clip and permanent daylight — and Sandbox co-op for first-session practice.",
      ctas: []
    },
    quickAnswer:
      "Anymaker Sandbox mode is the unrestricted creative counterpart to Survival. Every part and tool is unlocked from the start, unlimited resources are available, free flight is enabled, no-clip and permanent daylight options are present, and threats (wildlife, undead, hostile survivors, military forces) are disabled so the focus is purely on engineering and experimentation. The Anymaker sandbox mode guide below explains what each Sandbox option unlocks, what changes in the world when threats are off, and why Sandbox co-op is a recommended first session for groups.",
    keyFacts: [
      { label: "Parts", value: "Entire part catalog unlocked from the start" },
      { label: "Creative tools", value: "Free flight, no-clip, permanent daylight" },
      { label: "Threats", value: "Disabled by default" },
    ],
    modules: [
      {
        id: "what-is-unlocked",
        type: "prose",
        heading: "Anymaker sandbox mode guide to what is unlocked",
        body: "From the moment a Sandbox session starts, the entire part catalog is available without unlocking. Tools needed for layout — chassis placement, manifold plumbing, battery wiring, microcontroller programming — are also unlocked. Combined, this means a player can start with a finished helicopter, a complete boat, or a full base layout and have every component available to iterate with. Resources are unlimited, so the constraint shifts from \"do I have this part\" to \"is this the best layout for the part.\"",
      },
      {
        id: "creative-tools",
        type: "data-table",
        heading: "Creative tools: free flight, no-clip, daylight",
        columns: [
          { key: "tool", label: "Tool" },
          { key: "use", label: "What it does" },
          { key: "note", label: "Note" },
        ],
        rows: [
          {
            tool: "Free flight",
            use: "The player can fly the camera anywhere in the world without a vehicle, useful for inspecting a build from above, around, and below.",
            note: "Always available in Sandbox.",
          },
          {
            tool: "No-clip",
            use: "The camera moves through solid objects, useful for checking what is inside a chassis or for stepping through a partially built structure.",
            note: "Toggleable per session.",
          },
          {
            tool: "Permanent daylight",
            use: "The day-night cycle is paused at a fixed lighting level, useful for recording or for color-checking paint and material choices.",
            note: "Toggleable per session.",
          },
        ],
      },
      {
        id: "no-threats",
        type: "prose",
        heading: "No threats — what changes",
        body: "Wildlife, undead, hostile NPC survivors, and remaining military forces are all disabled in Sandbox. Hunger, wounds, and weather still function if the player toggles them on, but the default Sandbox world has no combat pressure. Crashes still damage components, so testing matters even in Sandbox, but the player is not threatened while doing so. There is no loot tier progression in Sandbox; all tiers exist from the start.",
      },
      {
        id: "sandbox-coop",
        type: "prose",
        heading: "Sandbox co-op for practice",
        body: "Sandbox supports 6-player co-op and is a recommended first session for groups that want to learn the building, microcontroller, and vehicle engineering systems together before attempting Survival. Roles established in Sandbox — driver, gunner, builder, programmer, scavenger — carry directly into Survival runs. The same chassis, engine, wiring, microcontroller, and weapon knowledge practiced in Sandbox apply on the Survival side of the mode switch, with threats, hunger, and weather switched back on.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_MODES.concat(["guide-getting-started", "guide-multiplayer"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  // 14. base-building
  {
    id: "guide-base-building",
    translationKey: "guide-base-building",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/base-building",
    url: "/guides/base-building",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anymaker base building guide: grid, locations and fortification",
    seoTitle: "Anymaker Base Building Guide: Grid, Locations and Defense",
    metaDescription:
      "Anymaker base building guide on the shared grid, building in mountains, towns, forests and shorelines, fortifying against threats, and co-op base defense.",
    summary:
      "Anymaker base building uses the same grid system as vehicles, so walls, doors, defenses, generators, and machine blocks are placed on the grid that chassis parts use.",
    hero: {
      eyebrow: "Base building",
      subtitle:
        "Grid-based building in mountains, towns, forests and shorelines, fortifying against the four threat factions, and co-op base defense.",
      ctas: []
    },
    quickAnswer:
      "Anymaker base building uses the same grid system as vehicles, so walls, doors, defenses, generators, and machine blocks are placed on the grid that chassis parts use. Bases can be built across the open world in mountains, towns, forests, or on shorelines, and the official pitch is that \"the only safe places are those you make,\" meaning bases are the main way to create a safe zone against wildlife, undead, hostile NPC survivors, and remaining military forces. The Anymaker base building guide below covers the shared grid, where to place a base, how to fortify it, and how a 6-player squad can split base work.",
    keyFacts: [
      { label: "Grid", value: "Same grid as chassis — walls snap to vehicle blocks" },
      { label: "Locations", value: "Mountains, towns, forests, shorelines" },
      { label: "Co-op", value: "Up to 6 players can share base work" },
    ],
    modules: [
      {
        id: "shared-grid",
        type: "prose",
        heading: "Anymaker base building guide to the shared grid",
        body: "The base grid is the same grid the Anymaker vehicle building guide uses for chassis, so the placement rules, the orientation, and the part-count budget are familiar from vehicle work. Walls snap onto the grid, doors and windows snap onto wall segments, and defenses (turrets, traps, walls) snap onto the same grid cells as chassis blocks. Generators and machine blocks anchor the same way engines do in a vehicle, and the same battery-to-component wiring carries over for any powered defenses or lights.",
      },
      {
        id: "where-to-build",
        type: "data-table",
        heading: "Where to build a base",
        columns: [
          { key: "location", label: "Location" },
          { key: "pros", label: "Advantages" },
          { key: "tradeoffs", label: "Tradeoffs" },
        ],
        rows: [
          {
            location: "Mountains",
            pros: "Defensible high ground, good sightlines for spotting patrols.",
            tradeoffs: "Exposed to wind and lightning, longer supply lines.",
          },
          {
            location: "Towns",
            pros: "Close to scavenging, easiest access to bunkers.",
            tradeoffs: "Riskiest base to defend against undead and dense patrols.",
          },
          {
            location: "Forests",
            pros: "Low visibility, easier to hide a base from patrols, quieter surroundings.",
            tradeoffs: "Slower resupply.",
          },
          {
            location: "Shorelines",
            pros: "Water access for boats, natural choke point for inland hostiles.",
            tradeoffs: "Exposed to weather rolling in from the water.",
          },
        ],
      },
      {
        id: "fortification",
        type: "prose",
        heading: "Fortifying against threats",
        body: "Fortification layers are what turn a base into a safe place. Typical layers are: an outer wall as a closed grid wall around the perimeter, with one or two controlled entry points; an inner perimeter as a second wall or set of chokepoints around the buildings and storage; defenses such as turrets, traps, and powered lights covering the approaches; and finally power and storage — generators, batteries, food stores, repair parts, and ammunition — kept well inside the inner perimeter. Threats attack the closest weak point, so a closed outer wall with limited entrances is usually more effective than a sprawling open layout with many access points.",
      },
      {
        id: "coop-base",
        type: "prose",
        heading: "Co-op base work",
        body: "Base building is fully supported in 6-player co-op, so a squad can split roles between fortifying (walls, doors, defenses), scavenging (food, building parts, weapons), and manning defenses during attacks. Multiple players can place blocks on the same base, share inventory through the same co-op rules as the Anymaker multiplayer guide, and bring vehicles into the base perimeter for repairs. Sandbags, minefields, and powered turrets are common additions when the squad expects a serious assault, especially as the world moves from loot tier 1 to tier 3.",
      },
    ],
    faqIds: [],
    relatedPageIds: RELATED_MODES.concat(["guide-multiplayer", "guide-vehicle-building", "guide-survival-tips"]),
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];
