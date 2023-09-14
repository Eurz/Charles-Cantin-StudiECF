/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ]
    },
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.tina.io',
            },
        ],
    },
}

module.exports = nextConfig
