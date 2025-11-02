import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.js',
      name: 'FluidDisrupt',
      fileName: () => 'main.js',
      formats: ['umd'],
    },
    outDir: 'dist-umd',
    emptyOutDir: true,
    minify: true,
  },
})
