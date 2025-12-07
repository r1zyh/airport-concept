import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source: string, filename: string) => {
          const variablesPath = path.resolve(__dirname, './src/app/styles/variables.scss');
          const fileDir = path.dirname(filename);
          const relativePath = path.relative(fileDir, variablesPath)
            .replace(/\\/g, '/');
          return `@use "${relativePath}" as *;\n${source}`;
        }
      }
    }
  }
});
