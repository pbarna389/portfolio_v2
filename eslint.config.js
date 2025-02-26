import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintJs from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import * as importPlugin from 'eslint-plugin-import'

export default tseslint
	.config(
		{ ignores: ['dist'] },
		{
			extends: [
				js.configs.recommended,
				eslintJs.configs.recommended,
				eslintReact.configs.recommended,
				...tseslint.configs.recommended
			],
			files: ['**/*.{ts,tsx}'],
			languageOptions: {
				parser: tseslint.parser,
				parserOptions: {
					projectService: true
				},
				ecmaVersion: 2020,
				globals: globals.browser
			},
			plugins: {
				'react-hooks': reactHooks,
				'react-refresh': reactRefresh,
				import: importPlugin
			},
			rules: {
				...reactHooks.configs.recommended.rules,
				'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'no-multiple-empty-lines': 'error',
				'@typescript-eslint/no-throw-literal': 0,
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/no-unused-vars': 'warn',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase']
					}
				],
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/array-type': 'error',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/method-signature-style': 'error',
				'@typescript-eslint/max-params': 'error',
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/prefer-find': 'warn',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-literal-enum-member': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						prefer: 'type-imports'
					}
				],
				'@typescript-eslint/member-ordering': [
					'warn',
					{
						default: {
							memberTypes: ['field', 'signature', 'constructor', 'method'],
							order: 'alphabetically-case-insensitive',
							optionalityOrder: 'required-first'
						}
					}
				],
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksVoidReturn: {
							attributes: false
						}
					}
				],
				'react-hooks/exhaustive-deps': 'warn',
				'react-hooks/rules-of-hooks': 'error',
				'object-shorthand': 'error',
				'prefer-spread': 'error',
				'prefer-template': 'warn',
				'prefer-rest-params': 'error',
				'prefer-destructuring': [
					'error',
					{
						array: false,
						object: true
					}
				],
				'no-var': 'error',
				'no-eval': 'error',
				'no-implied-eval': 'error',
				'no-console': 'warn',
				'no-useless-return': 'error',
				'no-nested-ternary': 'error',
				'no-else-return': 'error',
				'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
				'default-case': 'error',
				'default-case-last': 'error',
				'default-param-last': 'error',
				'import/newline-after-import': [
					'error',
					{
						count: 1
					}
				],
				'@eslint-react/dom/no-unsafe-iframe-sandbox': 0,
				'import/order': [
					'error',
					{
						pathGroups: [
							{
								pattern: 'react',
								group: 'builtin'
							},
							{
								pattern: 'react-dom',
								group: 'builtin'
							},
							{
								pattern: 'react-dom/client',
								group: 'builtin'
							},
							{
								pattern: 'react-router',
								group: 'builtin'
							},
							{
								pattern: 'react-router-dom',
								group: 'builtin'
							},
							{
								pattern: '@reduxjs/toolkit*',
								group: 'builtin',
								position: 'after'
							},
							{
								pattern: '@tanstack/react-query*',
								group: 'builtin',
								position: 'after'
							},
							{
								pattern: 'styled-components',
								group: 'external',
								position: 'before'
							},
							{
								pattern: '@react-oauth/*',
								group: 'external'
							},
							{
								pattern: 'react-hook-form',
								group: 'external'
							},
							{
								pattern: 'formik',
								group: 'external'
							},
							{
								pattern: 'swiper/*',
								group: 'external'
							},
							{
								pattern: 'react-*',
								group: 'external',
								position: 'after'
							},
							{
								pattern: '@query*',
								group: 'internal',
								position: 'before'
							},
							{
								pattern: '@query/*',
								group: 'internal',
								position: 'before'
							},
							{
								pattern: '@store',
								group: 'internal',
								position: 'before'
							},
							{
								pattern: '@store/*',
								group: 'internal',
								position: 'before'
							},
							{
								pattern: '@slices',
								group: 'internal'
							},
							{
								pattern: '@slices/**',
								group: 'internal'
							},
							{
								pattern: '@context',
								group: 'internal'
							},
							{
								pattern: '@context/**',
								group: 'internal'
							},
							{
								pattern: '@reducers',
								group: 'internal'
							},
							{
								pattern: '@reducers/**',
								group: 'internal'
							},
							{
								pattern: '@components',
								group: 'internal'
							},
							{
								pattern: '@components/**',
								group: 'internal'
							},
							{
								pattern: '@/pages',
								group: 'internal'
							},
							{
								pattern: '@/pages/**',
								group: 'internal'
							},
							{
								pattern: '@hooks',
								group: 'internal'
							},
							{
								pattern: '@hooks/**',
								group: 'internal'
							},
							{
								pattern: '@helpers',
								group: 'internal'
							},
							{
								pattern: '@helpers/**',
								group: 'internal'
							},
							{
								pattern: '@utils',
								group: 'internal'
							},
							{
								pattern: '@utils/**',
								group: 'internal'
							},
							{
								pattern: '@constants',
								group: 'internal'
							},
							{
								pattern: '@constants/**',
								group: 'internal'
							},
							{
								pattern: './context',
								group: 'sibling',
								position: 'after'
							},
							{
								pattern: './context/**',
								group: 'sibling',
								position: 'after'
							},
							{
								pattern: './components/',
								group: 'sibling'
							},
							{
								pattern: './components/**',
								group: 'sibling'
							},
							{
								pattern: './hooks',
								group: 'sibling'
							},
							{
								pattern: './hooks/**',
								group: 'sibling'
							},
							{
								pattern: './helpers',
								group: 'sibling'
							},
							{
								pattern: './helpers/**',
								group: 'sibling'
							},
							{
								pattern: './utils',
								group: 'sibling'
							},
							{
								pattern: './utils/**',
								group: 'sibling'
							},
							{
								pattern: './types',
								group: 'type',
								position: 'after'
							},
							{
								pattern: '@types/**',
								group: 'type',
								position: 'before'
							},
							{
								pattern: 'react-icons/*',
								group: 'object',
								position: 'before'
							},
							{
								pattern: '@storybook',
								group: 'object',
								position: 'before'
							},
							{
								pattern: '@storybook/*',
								group: 'object',
								position: 'before'
							},
							{
								pattern: '@assets/*',
								group: 'object',
								position: 'before'
							},
							{
								pattern: '~/assets/*',
								group: 'object',
								position: 'before'
							},
							{
								pattern: '@/**/**.scss',
								group: 'object',
								position: 'after'
							},
							{
								pattern: '@/**/**.css',
								group: 'object',
								position: 'after'
							},
							{
								pattern: './**/**.scss',
								group: 'object',
								position: 'after'
							},
							{
								pattern: './**/**.css',
								group: 'object',
								position: 'after'
							},
							{
								pattern: '../**',
								group: 'unknown',
								position: 'after'
							}
						],
						'newlines-between': 'always-and-inside-groups',
						warnOnUnassignedImports: true,
						groups: [
							'builtin',
							'index',
							['internal', 'external'],
							['parent', 'sibling'],
							'type',
							'object',
							'unknown'
						]
					}
				]
			}
		}
	)
	.concat(eslintPluginPrettier)
