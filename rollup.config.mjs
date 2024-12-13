import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // TypeScript yerine JavaScript kullan
  output: [
    {
      file: 'dist/my-vue-sdk.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/my-vue-sdk.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      preprocessStyles: true, // Vue dosyalarını işle
    }),
  ],
  external: ['vue'],
};
