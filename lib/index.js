'use strict';

var nodeConfig = require('eslint-plugin-node').configs;

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
  overrides: [
    Object.assign({}, nodeConfig['recommended-script'], {
      files: ['**/*.config.js', '**/plopfile.js'],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
    }),
  ],
  parser: 'babel-eslint',
};
