module.exports = {
  extends: ['plugin:promise/recommended'],
  rules: {
    // disallow calling `cb()` inside of a `.then()` (use nodeify instead)
    'promise/no-callback-in-promise': 'error',

    // disallow nested `.then()` or `.catch()` statements
    'promise/no-nesting': 'error',

    // disallow using promises inside of callbacks
    'promise/no-promise-in-callback': 'error',

    // disallow return statements in `.finally()`
    'promise/no-return-in-finally': 'error',

    // require async/await instead of the callback pattern
    'promise/prefer-await-to-callbacks': 'error',

    // require `await` instead of `.then()` for reading Promise values
    'promise/prefer-await-to-then': 'error',

    // ensure the proper number of arguments are passed to Promise functions
    'promise/valid-params': 'error',
  },
};
