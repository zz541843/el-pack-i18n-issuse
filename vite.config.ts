import {fileURLToPath, URL} from "url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), ElementPlus()],
    build: {
        lib:{
            name: "xxx",
            entry: path.resolve(__dirname, './src/dabao/index.ts'),
            formats: ['es','umd' ],
        },
        rollupOptions: {
            external: ["vue"],
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
