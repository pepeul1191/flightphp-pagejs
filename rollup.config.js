import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terserPlugin from '@rollup/plugin-terser';

const isProd = process.env.BUILD === 'production';

export default {
  input: 'src/main.js',
  output: {
    file: isProd ? 'public/dist/bundle.min.js' : 'public/dist/bundle.js',
    format: 'iife',
    name: 'app',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: true,
      minimize: isProd,
      sourceMap: true
    }),
    isProd && terserPlugin()
  ].filter(Boolean) // <--- limpia falsos valores
};
