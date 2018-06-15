'use strict';

module.exports = {
  rules: {
    // enforces `return` statements in callbacks of array's methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow reassigning `function` parameters
    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
      ],
      props: true,
    }],
  },
};
