import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

const isDev = () => process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: isDev() ? [] : [
					'svelte-hmr'
				]
			}
		}
	}
}

export default config
