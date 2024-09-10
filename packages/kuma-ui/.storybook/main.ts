import path from 'node:path'

import KumaUI from '@kuma-ui/vite'
import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react-swc'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    stories: ['../../../packages/kuma-ui/src/**/*.stories.*', '../../../packages/kuma-ui/src/**/*.mdx'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-console',
        '@whitespace/storybook-addon-html'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    viteFinal: (config) => {
        return mergeConfig(config, {
            plugins: [react(), KumaUI()],
            resolve: {
                alias: {
                    '@repo/kuma-ui': path.resolve(__dirname, '../../../packages/kuma-ui/src'),
                    '@repo/panda-css': path.resolve(__dirname, '../../../packages/panda-css/src'),
                    '@repo/vanilla-extract': path.resolve(__dirname, '../../../packages/vanilla-extract/src'),
                    '@repo/ui': path.resolve(__dirname, '../../../packages/ui/src')
                }
            }
        })
    }
}

export default config
