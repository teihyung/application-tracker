import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config: any , context: any) => {
        // Enable polling based on env variable being set
        if(process.env.NEXT_WEBPACK_USEPOLLING) {
            config.watchOptions = {
                poll: 500,
                aggregateTimeout: 300
            }
        }
        return config
    },
}

module.exports = nextConfig;