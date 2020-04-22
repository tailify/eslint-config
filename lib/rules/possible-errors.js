'use strict';

module.exports = {
  rules: {
    // enforce `return` statements in getters
    'getter-return': ['error', { allowImplicit: true }],

    // disallow `await` inside of loops
    'no-await-in-loop': 'error',

    // disallow the use of `console`
    'no-console': 'warn',

    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
  },
};
