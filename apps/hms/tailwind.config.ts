const base = require("@merohms/styles/tailwind/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
}
