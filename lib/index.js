'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/import',
  ].map(require.resolve),
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['**/*.config.js'],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // require or disallow strict mode directives
        strict: ['error', 'safe'],
      }),
    },
  ],
};
