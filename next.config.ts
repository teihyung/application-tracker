// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     experimental: {
//         turbo: false, // Force disable Turbopack
//     },
//     webpack: (config:any, { isServer }:any) => {
//         if (process.env.NEXT_WEBPACK_USEPOLLING) {
//             config.watchOptions = {
//                 poll: 500,
//                 aggregateTimeout: 300,
//             };
//         }
//         return config;
//     },
// };
//
// module.exports = nextConfig;