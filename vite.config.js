import ts from 'rollup-plugin-ts'

export default {
    build: {
        lib: {
            entry: 'index.ts',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            plugins: [{enforce: 'post', ...ts()}]
        }
    },

}
