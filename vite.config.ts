import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'Al Quran er Bani',
        short_name: 'Al Quran er Bani',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4285f4',
        icons: [
          {
            src: 'images/logo_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/logo_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'images/logo_1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'images/thumbnail.png',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Al Quran er Bani',
          },
          {
            src: 'images/thumbnail.png',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Al Quran er Bani',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png}'],
      } as VitePWAOptions['workbox'],
    }),
  ],
});
