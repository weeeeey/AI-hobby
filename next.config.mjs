/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'html5up.net',
            },
            {
                protocol: 'https',
                hostname: 'assets-global.website-files.com',
            },
        ],
    },
};

export default nextConfig;
