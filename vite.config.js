import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/kanji_handloom/', // <-- Add this line with your repo name
  plugins: [react()],
  server: {
    port: 5134, // Keep your custom dev port
  },
});
