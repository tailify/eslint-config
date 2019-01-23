'use strict';

module.exports = {
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    // disallow unused eslint-disable comments
    'eslint-comments/no-unused-disable': 'error',
  },
};
