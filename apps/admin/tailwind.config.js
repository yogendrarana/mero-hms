const base = require("@merohms/config/tailwind/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
}