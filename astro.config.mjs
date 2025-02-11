// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

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
      useCdn: false,
    }),
    react(),
  ],
});

