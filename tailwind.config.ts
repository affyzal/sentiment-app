/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        darkBg: "var(--dark-bg)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        accentLight: "var(--accent-light)",
        accentGlow: "var(--accent-glow)",
        accentGlowStrong: "var(--accent-glow-strong)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textMuted: "var(--text-muted)",
        linkedin: "var(--linkedin)",
        darkSecondary: "var(--dark-secondary)",
        border: "var(--border)",
        borderDark: "var(--border-dark)",
      },
    },
  },
  darkMode: "media", // uses prefers-color-scheme
  plugins: [],
};
