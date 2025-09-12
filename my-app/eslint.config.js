import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import { ESLint } from 'eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended', 'plugin:prettier/recommended'],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
