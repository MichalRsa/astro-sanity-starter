// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "PUBLIC_SANITY_VISUAL_EDITING_ENABLED");

console.log(env);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap(),
    sanity({
      projectId: "0azllx90",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true",
      apiVersion: "2025-02-10",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],

  output:
    env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true" ? "server" : "static",
  adapter: netlify(),
});

