
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,astro}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#446084",
          100: "#EBF0F5",
          200: "#D7E1EB",
          300: "#A8BDD4",
          400: "#769BBD",
          500: "#446084",
          600: "#3A5170",
          700: "#2F425C",
          800: "#253448",
          900: "#1A2534",
          foreground: "#ffffff",
        },
        cta: {
          DEFAULT: "#FF6B35",
          50: "#FFF5F2",
          100: "#FFE8E0",
          200: "#FFD1C2",
          300: "#FFB49A",
          400: "#FF8F62",
          500: "#FF6B35",
          600: "#F75514",
          700: "#D4420A",
          800: "#B0370B",
          900: "#8F2F0C",
          foreground: "#ffffff",
        },
        action: {
          DEFAULT: "#EF4444",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          foreground: "#ffffff",
        },
        value: {
          DEFAULT: "#FFA500",
          50: "#FFF8E6",
          100: "#FFEDB3",
          200: "#FFE180",
          300: "#FFD54D",
          400: "#FFC01A",
          500: "#FFA500",
          600: "#E69500",
          700: "#CC8500",
          800: "#B37500",
          900: "#996500",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "widgetPulse": {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '1',
          },
          '70%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
        },
        "fade-in": {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        "ping": {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '75%, 100%': {
            opacity: '0',
            transform: 'scale(2)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "widgetPulse": "widgetPulse 1.5s infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        heading: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
