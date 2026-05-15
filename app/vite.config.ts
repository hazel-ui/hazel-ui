import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "app",
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
});
