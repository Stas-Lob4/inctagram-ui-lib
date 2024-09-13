var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { dependencies, devDependencies } from './package.json';
import * as path from 'path';
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
            external: __spreadArray(__spreadArray([
                'react/jsx-runtime'
            ], Object.keys(dependencies), true), Object.keys(devDependencies), true)
        },
        sourcemap: true,
        target: 'esnext',
    },
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
});
