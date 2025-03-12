import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/kakao-login': {
  //       target: 'https://kauth.kakao.com/oauth/token',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/kakao-login/, '')
  //     },
  //   }
  // },
  plugins: [TanStackRouterVite(), react(), tsconfigPaths()],
})
