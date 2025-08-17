import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    const excludeSvgFromRule = (rule: any) => {
      if (!rule) return;
      if (rule.test && typeof rule.test.test === "function" && rule.test.test(".svg")) {
        if (Array.isArray(rule.exclude)) {
          rule.exclude.push(/\.svg$/i);
        } else if (rule.exclude) {
          rule.exclude = [rule.exclude, /\.svg$/i];
        } else {
          rule.exclude = [/\.svg$/i];
        }
      }
      if (Array.isArray(rule.oneOf)) rule.oneOf.forEach(excludeSvgFromRule);
      if (Array.isArray(rule.rules)) rule.rules.forEach(excludeSvgFromRule);
    };
    (config.module.rules as any[]).forEach(excludeSvgFromRule);

    // Prefer SVGR for any .svg import
    (config.module.rules as any[]).unshift({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                { name: "removeDimensions", active: true }
              ]
            }
          }
        }
      ]
    });
    return config;
  },
};

export default nextConfig;
