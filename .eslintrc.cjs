module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended-type-checked',
	  'plugin:@typescript-eslint/stylistic-type-checked',
	  'plugin:react-hooks/recommended',
	  'plugin:react/recommended',
	  'plugin:react/jsx-runtime',
	  'prettier',
	],
	settings: {
	  react: {
		version: 'detect',
	  },
	},
	ignorePatterns: ['dist', '.eslintrc.cjs', "**/*.test.tsx" , "**/*.test.ts" , "coverage"], 
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 'latest',
	  sourceType: 'module',
	  project: ['./tsconfig.json', './tsconfig.node.json'],
	  tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
	  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	  'simple-import-sort/imports': 'error',
	  'simple-import-sort/exports': 'error',
	  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	  '@typescript-eslint/no-empty-function': 'off',
	},
	overrides: [
	  {
		files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
		extends: ['plugin:testing-library/react'],
	  },

	  {
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		rules: {
		  'simple-import-sort/imports': [
			'error',
			{
			  groups: [
				['^react$', '^http', '^next', '^[a-z]'],
				['^@'],
				['^~'],
				['^\\.\\.(?!/?$)', '^\\.\\./?$'],
				['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
				['^.+\\.s?css$'],
				['^\\u0000'],
			  ],
			},
		  ],
		},
	  },
	],
  };
  