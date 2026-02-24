import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'react-slick',
      '@mui/material',
      '@mui/material/Tooltip',
      '@mui/material/Button',
      '@mui/material/Alert',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'react-icons/di',
      'react-icons/cg',
      'react-icons/si',
      '@emailjs/browser',
      'notistack',
      '@vercel/analytics/react',
      '@vercel/speed-insights/react',
    ],
  },
})
