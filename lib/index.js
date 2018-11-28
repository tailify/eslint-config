'use strict';

const { configs: jestConfig } = require('eslint-plugin-jest');
const { configs: nodeConfig } = require('eslint-plugin-node');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/import',
  ].map(require.resolve),
  overrides: [
    {
      files: ['**/*.config.js'],
      ...nodeConfig.recommended,
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
      rules: {
        // require or disallow strict mode directives
        strict: ['error', 'safe'],
      },
    },
    {
      files: ['**/__{mocks,tests}__/**', '**/*.{mock,test}.js'],
      ...jestConfig.recommended,
      env: {
        jest: true,
      },
    },
  ],
  parser: 'babel-eslint',
};
