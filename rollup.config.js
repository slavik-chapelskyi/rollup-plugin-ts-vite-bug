import typescript from '@wessberg/rollup-plugin-ts'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import shim from 'rollup-plugin-shim'

export default {
    input: 'index.tsx',
    output: {
        file: 'index.js',
        format: 'iife',
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
    },
	external: ['react', 'react-dom'],
    plugins: [
        shim({os: 'export const type = () => ""'}),
        nodeResolve(),
        commonjs(),
        typescript(),
    ],
}
