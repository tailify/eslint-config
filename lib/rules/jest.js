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

        // disallow using `expect().resolves`
        'jest/no-expect-resolves': 'off',

        // disallow conditional logic
        'jest/no-if': 'error',

        // disallow Jasmine globals
        'jest/no-jasmine-globals': 'error',

        // disallow large snapshots
        'jest/no-large-snapshots': 'error',

        // disallow explicitly returning from tests
        'jest/no-test-return-statement': 'error',

        // disallow using `toBeTruthy()` & `toBeFalsy()`
        'jest/no-truthy-falsy': 'error',

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
        'jest/require-to-throw-message': 'error',

        // require a top-level `describe` block
        'jest/require-top-level-describe': 'error',

        // enforce valid titles for jest blocks
        'jest/valid-title': 'error',
      },
    },
  ],
};
