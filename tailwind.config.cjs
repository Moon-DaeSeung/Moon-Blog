/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/stwui/**/*.{svelte,js,ts,html}",
  ],
  daisyui: {
    //themes: [""],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
