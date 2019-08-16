'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    './rules/best-practices.js',
    './rules/ecmascript-6.js',
    './rules/filenames.js',
    './rules/import.js',
    './rules/jest.js',
    './rules/node.js',
    './rules/possible-errors.js',
    './rules/promise.js',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
};
