import type { ThemeConfig } from "@/types/theme";

// Anymaker-specific visual configuration. Keep token names from the
// template interface so all V4 stylesheets render correctly. The chassis/engineering
// feel leans on a steel-blue accent and an amber warning color.
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "header",
  tokens: {
    pageBg: "#f4f6fa",
    surface1: "#ffffff",
    surface2: "#eef2f8",
    surface3: "#dde5f0",
    surfaceInverse: "#1f2933",
    textPrimary: "#1f2933",
    textMuted: "#4f5b6b",
    textInverse: "#ffffff",
    textOnAccentPrimary: "#ffffff",
    textLink: "#1f4f7a",
    focusRing: "#1f4f7a",
    line: "#d8dde3",
    lineStrong: "#a3acba",
    accentPrimary: "#1f4f7a",
    accentSecondary: "#c08a3e",
    accentBright: "#4f7ea8",
    statusConfirmed: "#1f4f7a",
    statusCaution: "#b85a2a",
    statusUnknown: "#666666",
  },
  typography: {
    headingFamily:
      "'Chakra Petch', 'Segoe UI', system-ui, -apple-system, sans-serif",
    bodyFamily:
      "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    headingWeight: 700,
  },
  shape: { radius: "6px", borderWidth: "1px", shadow: "0 2px 8px rgba(15, 23, 42, 0.06)", hoverLift: "2px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "guide-portal",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "none", intensity: "low" },
};
