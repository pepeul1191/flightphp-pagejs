import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terserPlugin from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

const isProd = process.env.BUILD === 'production';

const entries = [
  { input: 'src/entries/website.js', name: 'website' },
  { input: 'src/entries/vendor.js', name: 'vendor' },
];

export default entries.map(({ input, name }) => ({
  input,
  output: {
    file: isProd
      ? `public/dist/${name}.min.js`
      : `public/dist/${name}.js`,
    format: 'iife',
    name: name, // nombre global del objeto expuesto
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: true, // genera website.css, vendor.css
      minimize: isProd,
      sourceMap: true
    }),
    isProd && terserPlugin(),
    copy({
			hook: 'writeBundle',
			targets: [
				{
					src: 'node_modules/font-awesome/fonts/*',
					dest: 'public/fonts/'
				}
			]
		})
  ].filter(Boolean)
}));