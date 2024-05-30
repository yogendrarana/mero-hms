const { tailwindConfig } = require('@merohms/config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...tailwindConfig,
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
}
