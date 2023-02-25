import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // include source maps if env var set to true
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  resolve: {
    alias: [
      // to allow `import a from "@/js/a"` to work in prod
      { find: '@', replacement: __dirname },
    ],
  }
})
