import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  define: {
    'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
  },
  plugins: [sveltekit()],
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
};

export default config;
