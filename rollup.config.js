import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve'
// import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete'


const production = !process.env.ROLLUP_WATCH;
const wsUrl = process.env.WS_URL;

console.log('production: ', production)

if(!wsUrl) {
	console.log('\n No WS url provided!')
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife', // es, esm
		name: 'app',
		//dir: 'public/build',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		replace({
			// deep object should be stringify
			process: JSON.stringify({
			  env: {
				wsUrl,
				production
			  }
			}),
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		//!production && serve(),

		!production && serve({
			open: true,
			contentBase: 'public',
			port: 5000,
			historyApiFallback: true,
		}),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
		production && del({ targets: 'public/build/*' })
		// babel({
		// 	exclude: 'node_modules/**',
		// 	presets: ['module:@babel/plugin-proposal-optional-chaining']
		//   })
	],
	watch: {
		clearScreen: false
	}
};
