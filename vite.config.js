import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'strip-html-extension',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url && req.url.endsWith('.html') && !req.url.endsWith('/index.html')) {
            req.url = req.url.slice(0, -5);
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
