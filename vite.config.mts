import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [react(), svelte()],
});
