'use strict';

module.exports = {
  env: {
    node: true,
  },
  rules: {
    // require `return` statements after callbacks
    'callback-return': ['error', ['callback', 'cb', 'next']],

    // require `require()` calls to be placed at top-level module scope
    'global-require': 'error',

    // require error handling in callbacks
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],

    // disallow use of the `Buffer()` constructor
    'no-buffer-constructor': 'error',

    // disallow `new` operators with calls to `require`
    'no-new-require': 'error',

    // disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': 'error',
  },
};
