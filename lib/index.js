'use strict';

var jestConfig = require('eslint-plugin-jest').configs;
var nodeConfig = require('eslint-plugin-node').configs;

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/best-practices.js',
    './rules/eslint-comments.js',
    './rules/filenames.js',
    './rules/import.js',
    './rules/possible-errors.js',
    './rules/promise.js',
    './rules/strict.js',
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
    Object.assign({}, jestConfig.recommended, {
      env: {
        jest: true,
      },
      files: ['**/*.{spec,test}.js', '**/src/setupTests.js'],
    }),
  ],
  parser: 'babel-eslint',
};
