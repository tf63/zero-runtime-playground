import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Config = {
    content: ['../../packages/*/src/**/*.{jsx,tsx,mdx}'],
    theme: {
        extend: {}
    },
    plugins: []
}
export default config
