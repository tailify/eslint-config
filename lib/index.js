'use strict';

module.exports = {
  // both web and api need this so just share it :)
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    './rules/best-practices.js',
    './rules/ecmascript-6.js',
    './rules/filenames.js',
    './rules/import.js',
    './rules/jest.js',
    './rules/possible-errors.js',
    './rules/promise.js',
    './rules/strict-mode.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
