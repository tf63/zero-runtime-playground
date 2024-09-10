import bundleAnalyzer from '@next/bundle-analyzer'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
})

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    typescript: {
        tsconfigPath: 'tsconfig.build.json'
    }
}

export default withVanillaExtract(withBundleAnalyzer(nextConfig))
