import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // Example: Allow remote image optimization from a single domain
    domains: ['astro.build'],
  }
});