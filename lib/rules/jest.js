'use strict';

module.exports = {
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.{spec,test}.js', 'src/setupTests.js'],
      rules: {
        // enforce consistent `test` or `it` keyword
        'jest/consistent-test-it': 'error',

        // enforce that assertions are made in a test body
        'jest/expect-expect': 'error',

        // disallow capitalized test names
        'jest/lowercase-name': ['error', { ignore: ['describe'] }],

        // disallow alias methods
        'jest/no-alias-methods': 'error',

        // disallow commented out tests
        'jest/no-commented-out-tests': 'error',

        // disallow disabled tests
        'jest/no-disabled-tests': 'error',

        // disallow duplicate hooks within a `describe` block
        'jest/no-duplicate-hooks': 'error',

        // disallow empty titles
        'jest/no-empty-title': 'error',

        // disallow using `expect().resolves`
        'jest/no-expect-resolves': 'error',

        // disallow exporting from test files
        'jest/no-export': 'error',

        // disallow conditional logic
        'jest/no-if': 'error',

        // disallow Jasmine globals
        'jest/no-jasmine-globals': 'error',

        // disallow large snapshots
        'jest/no-large-snapshots': 'error',

        // disallow manually importing from `__mocks__`
        'jest/no-mocks-import': 'error',

        // disallow `expect` statements outside of `test` or `it` blocks
        'jest/no-standalone-expect': 'error',

        // disallow using callbacks in asynchronous tests
        'jest/no-test-callback': 'error',

        // disallow explicitly returning from tests
        'jest/no-test-return-statement': 'error',

        // disallow using `toBeTruthy()` & `toBeFalsy()`
        'jest/no-truthy-falsy': 'error',

        // disallow the use of `catch` assertions in tests
        'jest/no-try-expect': 'error',

        // require `toBeCalledWith()` or `toHaveBeenCalledWith()` when asserting a function has been called
        'jest/prefer-called-with': 'error',

        // require `jest.spyOn()` when mocking a function
        'jest/prefer-spy-on': 'error',

        // require `toStrictEqual()` when asserting equality
        'jest/prefer-strict-equal': 'error',

        // require `toBeNull()` when asserting expections on a null value
        'jest/prefer-to-be-null': 'error',

        // require `toBeUndefined()` when asserting expections on an undefined value
        'jest/prefer-to-be-undefined': 'error',

        // require `toContain()` when asserting expections on an array containing an object
        'jest/prefer-to-contain': 'error',

        // require `toHaveLength()` when asserting expections on an object's length property
        'jest/prefer-to-have-length': 'error',

        // enforce `test.todo()` instead of empty test cases
        'jest/prefer-todo': 'error',

        // require that `toThrow()` and `toThrowError` include a message
        'jest/require-tothrow-message': 'error',
      },
    },
  ],
};
