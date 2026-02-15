/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: 'oklch(var(--card))',
        'card-foreground': 'oklch(var(--card-foreground))',
        popover: 'oklch(var(--popover))',
        'popover-foreground': 'oklch(var(--popover-foreground))',
        primary: 'oklch(var(--primary))',
        'primary-foreground': 'oklch(var(--primary-foreground))',
        secondary: 'oklch(var(--secondary))',
        'secondary-foreground': 'oklch(var(--secondary-foreground))',
        muted: 'oklch(var(--muted))',
        'muted-foreground': 'oklch(var(--muted-foreground))',
        accent: 'oklch(var(--accent))',
        'accent-foreground': 'oklch(var(--accent-foreground))',
        destructive: 'oklch(var(--destructive))',
        'destructive-foreground': 'oklch(var(--destructive-foreground))',
        success: 'oklch(var(--success))',
        'success-foreground': 'oklch(var(--success-foreground))',
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
      },
      boxShadow: {
        'inner-top': '0 -1px 3px rgba(0,0,0,0.1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
