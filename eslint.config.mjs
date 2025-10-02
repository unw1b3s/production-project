import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import json from '@eslint/json';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  { ignores: ['dist/**','build/**','.next/**','coverage/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  json.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        '__IS_DEV__': true,
        '__dirname': true
      },
    },
    plugins: {js},
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': 'warn', // «неиспользуемые переменные»
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'warn', // об использовании переменных, которые нигде не объявлены
			'eqeqeq': 'error', // Требует использования строгого равенства === вместо ==
			'no-console': 'warn', // Предупреждение при использовании console.log
			'curly': 'error', // Обязывает использовать фигурные скобки для всех блоков
			'react/prop-types': 'off', // Отключает проверку типов props, если используешь TypeScript
		},
  }
]);
