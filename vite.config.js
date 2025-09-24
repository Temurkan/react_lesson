import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  rewrites: [{ source: "/(.*)", destination: "/" }],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    // это и есть fallback на index.html
    fs: {
      strict: true,
    },
  },
  build: {
    outDir: "dist",
  },
});
