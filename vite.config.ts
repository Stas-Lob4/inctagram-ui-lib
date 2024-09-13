import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dependencies, devDependencies } from './package.json'

import * as path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/index.ts'),
        path.resolve(__dirname, 'src/components/index.ts'),
      ],
      fileName: 'index',
      formats: ['es'],
      name: 'ui-kit'
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies)
      ]
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
  },
})