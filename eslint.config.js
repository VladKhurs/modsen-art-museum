import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			globals: globals.browser,
			parser: tsParser,
		},
		plugins: {
			'@eslint/js': pluginJs,
			'@typescript-eslint': tseslint,
			react: pluginReact,
			prettier: prettier,
			import: pluginImport,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		ignores: [
			'__tests__/**',
			'dist/**', // Updated to dist/** for more precise exclusion
			'**/*.test.js',
			'**/*.test.ts',
			'**/*.test.tsx',
			'coverage',
		],
		rules: {
			'prettier/prettier': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-no-bind': 'off',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					'': 'never',
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
					mjs: 'never',
				},
			],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-empty-function': 'off',
		},
	},
	{
		files: ['__tests__/**'],
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
		},
	},
];
