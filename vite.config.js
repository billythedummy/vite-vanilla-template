import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  appType: "mpa",
  build: {
    // include source maps if env var set to true
    sourcemap: process.env.SOURCE_MAP === 'true',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        "404": path.resolve(__dirname, "404.html"),
      }
    }
  },
  resolve: {
    alias: [
      // to allow `import a from "@/js/a"` to work in prod
      { find: '@', replacement: __dirname },
    ],
  }
})
