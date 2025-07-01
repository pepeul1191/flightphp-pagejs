import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/dist/bundle.js',
    format: 'iife',
    name: 'app',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: true,       // Extrae a un archivo .css (por defecto con el mismo nombre que .js)
      minimize: true,      // Opcional: minifica CSS
      sourceMap: true
    })
  ]
};
