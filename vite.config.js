import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // your source folder
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./scss/variables.scss";` // optional
      }
    }
  }
});
