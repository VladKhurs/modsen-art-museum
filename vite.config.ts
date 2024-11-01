import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@/*', replacement: '/src/' },
			{ find: '@/api', replacement: '/src/api' },
			{ find: '@/assets', replacement: '/src/assets' },
			{ find: '@/components', replacement: '/src/components' },
			{ find: '@/constants', replacement: '/src/constants' },
			{ find: '@/pages', replacement: '/src/pages' },
			{ find: '@/public', replacement: '/src/public' },
			{ find: '@/store', replacement: '/src/store' },
			{ find: '@/styles', replacement: '/src/styles' },
			{ find: '@/types', replacement: '/src/types' },
			{ find: '@/utils', replacement: '/src/utils' },
		],
	},
});
