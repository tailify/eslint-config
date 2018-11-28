'use strict';

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
  ],
};
