import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@main', replacement: path.resolve(__dirname, 'src/main/') },
      { find: '@presentation', replacement: path.resolve(__dirname, 'src/presentation/') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data/') },
      { find: '@infra', replacement: path.resolve(__dirname, 'src/infra/') },
      { find: '@domain', replacement: path.resolve(__dirname, 'src/domain/') },
    ]
  }
})
