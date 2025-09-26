// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-gold": "#c59d5f" // Warna emas premium
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
        // Anda bisa menambahkan font lain di sini
      }
    }
  },
  plugins: []
};
