import ts from 'rollup-plugin-ts'

/** @returns {import('rollup').RollupOptions} */
export default {
    input: 'index.ts',
    output: [
        {
            format: 'cjs',
            dir: 'dist/rollup',
            entryFileNames: '[name].[format]'
        },
        {
            format: 'es',
            dir: 'dist/rollup',
            entryFileNames: '[name].[format]'

        }
    ],
    plugins: [ts()]
}
