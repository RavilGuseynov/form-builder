module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/prop-types': 'off',
    indent: 'off',
    semi: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-empty-function': 'error',
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    'no-multi-spaces': 'error',
    'brace-style': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/indent': ['error', 2],
    'no-console': ['warn', { allow: ['error'] }],
  },
};
