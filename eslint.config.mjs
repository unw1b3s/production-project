import {defineConfig} from 'eslint/config';
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
      globals: globals.browser,
    },
    plugins: {js},
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'warn',
    }
  }
]);
