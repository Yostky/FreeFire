import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "src/assets/components/ui"),
    },
  },
  server: {
    host: '127.0.0.1',
    // ... other server configurations
  },
});
