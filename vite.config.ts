import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import rune from "vite-plugin-rune";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [svelte(), rune({ logicPath: path.resolve("./src/logic.ts") })],
});
