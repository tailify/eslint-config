'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');
const { configs: nodeConfig } = require('eslint-plugin-node');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/best-practices.js',
    './rules/import.js',
    './rules/possible-errors.js',
    './rules/promise.js',
    './rules/strict.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.config.js', '**/plopfile.js'],
      ...nodeConfig.recommended,
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.{spec,test}.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
  parser: 'babel-eslint',
};
