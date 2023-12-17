import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactClickToComponent(), tsconfigPaths()],
});
