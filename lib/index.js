'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/import',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
};
