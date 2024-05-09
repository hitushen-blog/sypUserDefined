import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";
import { qrcode } from 'vite-plugin-qrcode'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), qrcode()],
    resolve: {
        alias: {
            '@': join(__dirname, "src"),
        }
    },
    server: {
        host: '0.0.0.0',
    },
    preview: {
        open: true
    },
    css: {
        //配置了对 SCSS 的处理选项
        preprocessorOptions: {
            scss: {
                //引入了全局的 SCSS 文件 global.scss
                additionalData: `@import "./src/assets/reset.scss";@import "./src/assets/minxin.scss";`,
            },
        },
        // 可以查看 CSS 的源码
        devSourcemap: true
    },

})
