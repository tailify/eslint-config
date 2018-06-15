'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/import',
    './rules/react',
  ].map(require.resolve),
};
