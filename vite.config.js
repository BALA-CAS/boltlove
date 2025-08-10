import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    icons: ['lucide-react']
                }
            }
        },
        target: 'es2015',
        minify: 'esbuild'
    },
    server: {
        port: 5173,
        host: true
    }
});
