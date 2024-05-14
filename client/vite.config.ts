import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5600,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 5600,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5600",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})