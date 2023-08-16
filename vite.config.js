import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite-deploy-demo/',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/styles/variables.scss";`, // Adjust the path to your SCSS variables file
            },
        },
    },
})
