import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: process.env.STANDALONE_BUILD === "true" ? "standalone" : undefined,
  // turbopack: {
  //   root: path.resolve(__dirname),
  // },
};

export default nextConfig;
