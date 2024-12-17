import type { Config } from "tailwindcss";
import {
  animation,
  colors,
  fontFamily,
  zIndex,
} from "tailwindcss/defaultTheme";

export default {
  important: "#app",
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  content: [
    "node_modules/@boostxyz/boost-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  mode: "jit",
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        "15": "60px",
      },
      colors: {
        ...colors,
        info: {
          DEFAULT: "var(--info)",
          muted: "var(--info-muted)",
          strong: "var(--info-strong)",
          foreground: "var(--slate-50)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        background: "var(--background)",
        border: "var(--border)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        code: {
          blue: "var(--code-blue)",
          green: "var(--code-green)",
          purple: "var(--code-purple)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
          strong: "var(--destructive-strong)",
        },
        elevated: {
          DEFAULT: "var(--elevated)",
          border: "var(--elevated-border)",
        },
        foreground: "var(--foreground)",
        input: "var(--input)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        ring: "var(--ring)",
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          muted: "var(--success-muted)",
          strong: "var(--success-strong)",
          foreground: "var(--slate-50)",
        },
        warning: "var(--warning)",
        dialog: {
          overlay: "var(--dialog-overlay)",
        },
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },
      lineHeight: {
        xs: "16px",
        sm: "20px",
        base: "24px",
        lg: "30px",
        xl: "32px",
        "2xl": "38px",
        "3xl": "42px",
        "4xl": "52px",
        "5xl": "72px",
        "6xl": "86px",
        "7xl": "108px",
        "8xl": "144px",
        "9xl": "192px",
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        ctas: "600",
        heading: "600",
      },
      letterSpacing: {
        xs: "0.6px", //
        sm: "0.56px", // 4% in figma
        base: "0.32px", // 2% in figma
        "3xl": "0.3px", // 1% in figma
        null: "NaNem",
        normal: "0em",
        wider: "0.04em",
        wide: "0.02em",
      },
      boxShadow: {
        DEFAULT:
          " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1)",
        sm: " 0px 1px 2px rgba(0, 0, 0, 0.05)",
        md: " 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
        lg: " 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)",
        xl: " 0px 8px 10px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        "2xl": " 0px 25px 50px rgba(0, 0, 0, 0.25)",
        dialog: "0px 10px 15px -3px #0000001a, 0px 4px 6px 0px #0000000d",
        button: "0px 1px 2px 0px var(--shadow-color)",
        select: "0px 1px 2px 0px var(--shadow-color)",
        "sm-strong": "0px 1px 3px 0px #1018281A, 0px 1px 2px -1px #0000001A",
      },
      borderRadius: {
        DEFAULT: "6px",
        input: "6px",
        none: "0px",
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
      fontFamily: {
        DEFAULT: ["var(--font-duplet)"],
        duplet: ["var(--font-duplet)"],
        graphik: ["var(--font-graphik)"],
        "dm-mono": ["var(--font-dm-mono)", ...fontFamily.mono],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        heading: ["var(--font-duplet)", ...fontFamily.sans],
        body: ["var(--font-duplet)", ...fontFamily.sans],
        ctas: ["var(--font-duplet)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "animate-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        shimmer: {
          from: {
            backgroundPosition: "100%",
          },
          to: {
            backgroundPosition: "0%",
          },
        },
      },
      zIndex: {
        ...zIndex,
        "10": "10",
        "15": "15",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "100": "100",
      },
      animation: {
        ...animation,
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite ease-in-out",
      },
    },
  },
} satisfies Config;
