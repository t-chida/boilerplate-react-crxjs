/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.config';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
    reactClickToComponent(),
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./config/vitest-setup.ts'],
  },
  server: {
    hmr: {
      host: 'localhost',
      port: 8084,
      protocol: 'ws',
    },
  },
});
