/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #FFFFFF 10.72%, #F7F6FE 93.03%)",
        "hero-content-gradient":
          "radial-gradient(79% 79% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
        "home-feature-gradient-1":
          "linear-gradient(0deg, #FFFFFF -10.28%, #EFEDFD 63.13%, #FFFFFF 100%)",
        "home-feature-gradient-2":
          "linear-gradient(0deg, #FFFFFF 0%, #EFEDFD 46.09%)",
        "home-feature-gradient-4":
          "linear-gradient(180deg, #FFFFFF 10.72%, #F7F6FE 93.03%)",
        "home-qr-code": "linear-gradient(135deg, #DAF727 24.71%, #725AEC 100%)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: "hsl(var(--black))",
        white: "hsl(var(--white))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        neutral: {
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
        },
        secondary: {
          50: "hsl(var(--secondary-5))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        "display-lg": ["4rem", "4.4rem"],
        "display-md": ["2.5rem", "3.5rem"],
        "display-sm": ["2rem", "2.5rem"],
        "display-xs": ["1.5rem", "2.25rem"],
        xl: ["1.25rem", "2rem"],
        lg: ["1.125rem", "1.74rem"],
        md: ["1rem", "1.6rem"],
        sm: ["0.875rem", "1.27rem"],
        xs: ["0.75rem", "1.01rem"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
