'use strict';

module.exports = {
  extends: ['plugin:promise/recommended'],
  overrides: [
    {
      files: ['**/*.config.js', '**/plopfile.js'],
      rules: {
        // prefer async/await to the callback pattern
        'promise/prefer-await-to-callbacks': 'off',

        // prefer await to .then() for reading Promise values
        'promise/prefer-await-to-then': 'off',
      },
    },
  ],
  plugins: ['promise'],
  rules: {
    // avoid calling cb() inside of a .then() (use nodeify instead)
    'promise/no-callback-in-promise': 'error',

    // avoid nested .then() or .catch() statements
    'promise/no-nesting': 'error',

    // avoid using promises inside of callbacks
    'promise/no-promise-in-callback': 'error',

    // disallow return statements in .finally()
    'promise/no-return-in-finally': 'error',

    // prefer async/await to the callback pattern
    'promise/prefer-await-to-callbacks': 'error',

    // prefer await to .then() for reading Promise values
    'promise/prefer-await-to-then': 'error',

    // ensure the proper number of arguments are passed to Promise functions
    'promise/valid-params': 'error',
  },
};
