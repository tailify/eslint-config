'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/import',
  ].map(require.resolve),
};
