/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['assets.tina.io', 'www.bedejiel.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.tina.io',
                // pathname: '/uploads/',
            },
        ],
    },
}

module.exports = nextConfig
