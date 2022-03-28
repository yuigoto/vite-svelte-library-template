import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import sass from "sass";
import PackageData from "./package.json";

/**
 * Verifies if an included module is external or internal. Used to exclude
 * imports from "node_modules".
 *
 * @param {string} id
 *     Module name/path
 * @returns
 */
const isModuleExternal = (id) => {
  return !id.startsWith(".") && !path.isAbsolute(id);
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      fileName: (format) => {
        return `index.${format}.js`;
      },
      name: PackageData.name,
    },
    sourcemap: false,
    rollupOptions: {
      external: isModuleExternal,
      plugins: [],
    },
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      $app: path.resolve("./src"),
      $lib: path.resolve("./lib"),
    },
  },
});
