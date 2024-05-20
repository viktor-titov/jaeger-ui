import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    // поддержка синтаксиса React (JSX и прочее)
    react(),
    // генерация файла `index.d.ts`
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      // название библиотеки
      name: "ReactTSLib",
      // форматы генерируемых файлов
      formats: ["es"],
      // названия генерируемых файлов
      fileName: (format) => `react-ts-lib.${format}.js`,
    },
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});