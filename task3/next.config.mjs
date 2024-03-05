/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_API: process.env.NEXT_API,
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'd2norla3tyc4cn.cloudfront.net' },
        ],
    },
};

export default nextConfig;
