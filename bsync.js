import browserSync from 'browser-sync';

browserSync.init({
  proxy: 'http://localhost:5173', // Vite dev server
  files: ['src/**/*.*'],          // Watch these files for changes
  open: true,                     // Automatically open in browser
  notify: false,                  // No annoying "connected" overlay
  port: 3000,                     // Use port 3000 instead of 5173
});
