import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: `${command === "serve" ? "/" : "/todo-react/"}`,
  };

  // if (command !== "serve") {
  //   config.base = "/todo-react/";
  // }

  return config;
});