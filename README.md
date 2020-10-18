Reproduction of [wessberg/rollup-plugin-ts#122](https://github.com/wessberg/rollup-plugin-ts/issues/122)

- `npx tsc` works fine without any message
- `npx rollup -c` fails with

  > [!] (plugin Typescript) TS6504: File '~/Dev/.../node_modules/react-did-catch/lib/index.js' is a JavaScript file. Did you mean to enable the 'allowJs' option?
