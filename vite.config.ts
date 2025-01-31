import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() 
  ],
  base: '/tpFinalTS/',
  resolve: {
    alias: {
      "@pages": "/src/components/pages",
      "@molecules": "/src/components/molecules",
      "@organisms": "/src/components/organisms",
      "@atoms": "/src/components/atoms",
      "@store": "/src/store",
      "@api": "/src/api",
      "@types": "/src/types",
    },
  },
});
