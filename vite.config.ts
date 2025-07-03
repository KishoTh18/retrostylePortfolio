import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Set your GitHub repo name here
const repoName = "portfolio";

export default defineConfig({
  base: "/retrostylePortfolio/", // 👈 Important for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // 👈 Use standard dist/ for GitHub Pages
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
