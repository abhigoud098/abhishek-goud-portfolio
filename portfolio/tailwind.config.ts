import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        surface: "#0A0A0D",
        "surface-2": "#101014",
        line: "rgba(255,255,255,0.08)",
        "line-soft": "rgba(255,255,255,0.05)",
        ink: "#F2F2F5",
        "ink-dim": "#9A9AA5",
        "ink-faint": "#5C5C66",
        electric: "#4F7CFF",
        violet: "#9B5CFF",
        magenta: "#C24FFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-signal":
          "linear-gradient(135deg, #4F7CFF 0%, #9B5CFF 55%, #C24FFF 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at center, rgba(79,124,255,0.18) 0%, rgba(155,92,255,0.08) 40%, transparent 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(79,124,255,0.25)",
        "glow-violet": "0 0 40px rgba(155,92,255,0.25)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
    },
  },
  plugins: [],
};
export default config;
