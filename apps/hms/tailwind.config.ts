const base = require("@merohms/config/tailwind/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [...base.content],
  plugins: [...base.plugins],
}