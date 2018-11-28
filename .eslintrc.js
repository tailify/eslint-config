'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['node'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'linebreak-style': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': 'error',
    'sort-keys': 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/**', '**/*.test.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
};
