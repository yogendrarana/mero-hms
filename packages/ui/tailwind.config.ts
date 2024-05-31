const { tailwindConfig } = require("@merohms/config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig,
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./custom/**/*.{js,jsx,ts,tsx}"],
}
