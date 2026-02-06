import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Виправлення проблеми з Turbopack workspace root
  // Використовуємо require для отримання __dirname в CommonJS контексті
  experimental: {
    turbopack: {
      root: require('path').resolve(__dirname || process.cwd()),
    },
  },
};

export default withMDX(nextConfig);
