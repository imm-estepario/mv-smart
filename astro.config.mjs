import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://mv-smart.github.io',
  base: '/',

  integrations: [tailwind(), compress(),]
});