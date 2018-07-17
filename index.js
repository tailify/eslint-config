'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/best-practices',
    './rules/import',
    './rules/react',
    './rules/react-a11y',
    './rules/stylistic',
  ].map(require.resolve),
};
