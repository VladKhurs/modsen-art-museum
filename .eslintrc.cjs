module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'airbnb-typescript',
		'eslint-config-prettier',
		'prettier',
	],
	ignorePatterns: [
		'dist',
		'vite.config.ts',
		'vitest.config.ts',
		'tests',
		'*.cjs',
		'__tests__/**', // Add this line to ignore the __tests__ folder
		'**/*.test.tsx',
		'**/*.test.ts',
		'coverage',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-no-bind': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
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
	},
	overrides: [
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			rules: {
				'no-unused-vars': 'off',
				'no-undef': 'off',
			},
		},
	],
};
