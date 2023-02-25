/* eslint-disable import/no-extraneous-dependencies */
// silence `'vite' should be listed in project's dependencies, not devDependencies`

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// import path from "path" causes eslint to crash for some reason
const path = require("path");

export default defineConfig({
  // TODO: this is to match github project pages being served under
  // user.github.io/<repo-name/*
  // delete when no longer using github pages
  base: "/vite-vanilla-template/",
  appType: "mpa",
  build: {
    // include source maps if env var set to true
    sourcemap: process.env.SOURCE_MAP === "true",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        404: path.resolve(__dirname, "404.html"),
      },
    },
  },
  resolve: {
    alias: [
      // to allow `import a from "@/js/a"` to work in prod
      { find: "@", replacement: __dirname },
    ],
  },
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "images/logo/apple-touch-icon.png"],
      manifest: {
        name: "My Web App",
        short_name: "mwa",
        description: "This is a test web app",
        icons: [
          {
            src: "/images/logo/logo_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/logo/logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/logo/logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        start_url: "index.html",
        display: "fullscreen",
        // TODO: USE ACTUAL THEME COLORS
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
      },
    }),
  ],
});
