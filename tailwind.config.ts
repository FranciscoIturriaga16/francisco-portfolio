import type { Config } from "tailwindcss";

// Colors are defined as RGB channels in src/index.css so opacity modifiers (bg-background/85) work.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: token("background"),
        surface: token("surface"),
        raised: token("raised"),
        panel: token("panel"),
        border: token("border"),
        "border-strong": token("border-strong"),
        foreground: token("foreground"),
        secondary: token("secondary"),
        muted: token("muted"),
        label: token("label"),
        nav: token("nav"),
        accent: {
          DEFAULT: token("accent"),
          soft: token("accent-soft"),
          "soft-foreground": token("accent-soft-foreground"),
        },
        highlight: token("highlight"),
        frame: token("frame"),
        amber: token("amber"),
        green: token("green"),
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
