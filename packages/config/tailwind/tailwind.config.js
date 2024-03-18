module.exports = {
    darkMode: ['class'],
    mode: 'jit',
    content: [
        "../../apps/web/app/**/*.{js,jsx,ts,tsx}",
        "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1400px',
            },
            colors: {
                'primary': '#4A90E2',
                'secondary': '#FF6347',
                'grayish': '#A0AEC0',
            },
            fontFamily: {
                'sans': ['Helvetica', 'Arial', 'sans-serif'],
                'serif': ['Georgia', 'Cambria', 'serif'],
                'mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
        }
    },
    plugins: [],
}
