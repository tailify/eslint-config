'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  plugins: [
    'node',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'linebreak-style': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': 'error',
    'sort-keys': 'error',
  },
};
