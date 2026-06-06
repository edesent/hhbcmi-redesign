import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // node-ical pulls in Node-only deps that don't bundle cleanly; load it at runtime.
  serverExternalPackages: ["node-ical"],
};

export default nextConfig;
