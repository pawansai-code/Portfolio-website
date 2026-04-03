import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
// base: "/" → Vercel (root deployment)
// base: "/portfolio-website" → GitHub Pages (subdirectory deployment)
export default defineConfig({
  plugins: [react()],
  base: "/",
});
