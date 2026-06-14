// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // 部署后替换为你的真实域名
  site: "https://example.com",

  integrations: [mdx(), sitemap()],
  adapter: cloudflare()
});