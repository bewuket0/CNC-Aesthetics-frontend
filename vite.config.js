// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import "dotenv/config";
import envCompatible from "vite-plugin-env-compatible";

// require("dotenv").config();

// require("dotenv").config();

export default defineConfig({
  plugins: [react(), envCompatible()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
