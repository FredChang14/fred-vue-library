import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'FredVueLibrary',
      fileName: (format) => `fred-vue-library.${format}.js`
    },
    rollupOptions: {
      // 確保外部化處理那些你的庫中不需要打包的依賴
      external: ['vue'],
      output: {
        // 為全局變量提供一個名稱
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
