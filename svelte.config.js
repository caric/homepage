import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      routes: {
        include: ["/kausyd9asda9s8dsi94hf984"], // only include random url to prevent unneeded function invocation
        exclude: []
      }
    }),
  },

  version: {
    name: (await import('child_process'))
        .execSync('git rev-parse HEAD')
        .toString().trim()
  }
};

export default config;
