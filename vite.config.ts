import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: ['vue'],
            dts: 'src/auto-import/auto-imports.d.ts',
            resolvers: [
                TDesignResolver({
                    library: 'vue-next',
                }),
            ],
            eslintrc: {
                enabled: false,
                filepath: './.eslintrc-auto-import.json',
                globalsPropValue: true,
            },
        }),
        Components({
            dirs: ['src/components'],
            dts: 'src/auto-import/components.d.ts',
            resolvers: [
                TDesignResolver({
                    library: 'vue-next',
                }),
            ],
        }),
    ],
    server: {
        port: 4526,
        host: '0.0.0.0',
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
