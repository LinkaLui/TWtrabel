import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/TWtravel/' : './',
  plugins: [
    vue(),
    Components({
      resolvers: IconsResolver({
        prefix: 'icon' 
      }),
    }),
    Icons(),
    WindiCSS()
  ]
})