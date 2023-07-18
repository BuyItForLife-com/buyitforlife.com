import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Buy It For Life',
    social: {
      github: 'https://github.com/BuyItForLife-com/buyitforlife.com'
    },
    sidebar: [{
      label: 'Categories',
      autogenerate: {
        directory: 'categories'
      }
    }]
  }), tailwind()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});