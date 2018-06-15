'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/best-practices',
    './rules/import',
    './rules/react',
    './rules/stylistic',
  ].map(require.resolve),
};
