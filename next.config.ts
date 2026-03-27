import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  logging: {
    browserToTerminal: true,
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
      // serverFunctions: false,
    },
    // 'error' — errors only (default)
    // 'warn'  — warnings and errors
    // true    — all console output
    // false   — disabled
  }, // 🆕comes wih 16.0

  experimental: {
    turbopackFileSystemCacheForDev: true, // 🆕comes wih 16.0
    turbopackFileSystemCacheForBuild: true, // 🆕comes wih 16.0
    viewTransition: true,
    cssChunking: true,

    authInterrupts: true,
    useLightningcss: true, // 🆕comes wih 16.2
    lightningCssFeatures: {
      include: ["light-dark", "oklab-colors"],
      exclude: ["nesting"],
    }, // 🆕comes wih 16.2
    prefetchInlining: true, // 🆕comes wih 16.2
    appNewScrollHandler: true, // 🆕 comes with  16.2
    sri: {
      algorithm: "sha256",
    }, // 🆕comes wih 16.2
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
