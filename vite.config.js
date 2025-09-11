import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         "http://978337test-env.eba-mz9qwfxb.us-west-2.elasticbeanstalk.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //     "/orders": {
  //       target:
  //         "http://978337-team2-orderservice-env.eba-ewnv3rxm.us-west-2.elasticbeanstalk.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/orders/, ""),
  //     },
  //   },
  // },
});
