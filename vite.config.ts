import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import unpluginFavicons from '@anolilab/unplugin-favicons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    unpluginFavicons({
      logo: './public/logo.png',
      icons: {
        favicons: {
          source: './public/logo.png',
        },
      },
    }),
  ],
  base: '/',
})
