module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.js', '.eslintrc.cjs'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser        : '@typescript-eslint/parser', // Specify the parser for TypeScript files
	parserOptions : {
		ecmaVersion : 'latest',
		sourceType  : 'module'
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins        : ['@typescript-eslint', 'react'],
	ignorePatterns : ['dist/**/*', 'sample.stylelintrc.js'],
	rules: {
		indent: ['warn', 'tab'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'@typescript-eslint/no-explicit-any': ['warn']
	}
};
