// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Specify MIME types for files served by Vite
    mimeTypes: {
      '.js': 'application/javascript'
    }
  }
});