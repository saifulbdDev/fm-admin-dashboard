import { defineConfig } from 'vite'
import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );
import react from '@vitejs/plugin-react'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),   ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  preview: {
    port: 3001,
  },
  server: {
    host: true,
    port: 3001,
    // proxy: {
    //   // with options:  PUBLIC_BACKEND_URL
    //   "/v3": {
    //     target: env.VITE_APP_API,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    //   "/broadcasting": {
    //     target: env.VITE_APP_API,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    //   "/sanctum": {
    //     target: env.VITE_APP_API,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  

  // build: {
  //   target: 'esnext',
  //   rollupOptions: {
  //       output:{
  //           manualChunks(id) {
  //               if (id.includes('node_modules')) {
  //                   return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //               }
  //           }
  //       }
  //   }

 

})