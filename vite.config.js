/* eslint-disable import/no-extraneous-dependencies */
// silence `'vite' should be listed in project's dependencies, not devDependencies`

import glob from "glob";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// import path from "path" causes eslint to crash for some reason
const path = require("path");

// TODO: this is to match github project pages being served under
// user.github.io/<repo-name/*
// delete when no longer using github pages
const GH_PAGES_BASE = "/vite-vanilla-template/";

export default defineConfig({
  // TODO: github pages shenanigans
  base: GH_PAGES_BASE,
  appType: "mpa",
  build: {
    // include source maps if env var set to true
    sourcemap: process.env.SOURCE_MAP === "true",
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(path.join(__dirname, "/**/*.html"))
          .filter((htmlFilePath) => !htmlFilePath.includes("dist/"))
          .map((htmlFilePath) => {
            const baseName = path.basename(htmlFilePath);
            return [
              baseName.slice(
                0,
                baseName.length - path.extname(baseName).length
              ),
              htmlFilePath,
            ];
          })
      ),
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
      // TODO: github pages shenanigans, vitePWA doesnt do base substitution
      includeAssets: [
        `${GH_PAGES_BASE}favicon.ico`,
        `${GH_PAGES_BASE}images/logo/apple-touch-icon.png`,
      ],
      manifest: {
        name: "My Web App",
        short_name: "mwa",
        description: "This is a test web app",
        //
        icons: [
          {
            src: `${GH_PAGES_BASE}images/logo/logo_512x512.png`,
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: `${GH_PAGES_BASE}images/logo/logo_192x192.png`,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: `${GH_PAGES_BASE}images/logo/logo_192x192.png`,
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        start_url: `${GH_PAGES_BASE}index.html`,
        display: "fullscreen",
        // TODO: USE ACTUAL THEME COLORS
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
      },
    }),
  ],
});
