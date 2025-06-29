import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Determine environment
const isDev = process.env.NODE_ENV === "development";

console.log("🔧 Vite build mode:", process.env.NODE_ENV);

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    isDev && componentTagger(), // Only use in development
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
