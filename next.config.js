/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/accueil',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
            // {
            //     source: '/',
            //     destination: '/accueil',
            // },
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
