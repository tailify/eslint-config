'use strict';

module.exports = {
  rules: {
    // enforce `return` statements in callbacks of array methods
    'array-callback-return': 'error',

    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // enforce that class methods utilize `this`
    'class-methods-use-this': 'error',

    // require `return` statements to always specify values
    'consistent-return': 'error',

    // require `default` cases in `switch` statements
    'default-case': 'error',

    // enforce dot notation whenever possible
    'dot-notation': 'error',

    // require the use of `===` and `!==`
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // require `for-in` loops to include an `if` statement
    'guard-for-in': 'error',

    // enforce a maximum number of classes per file
    'max-classes-per-file': 'error',

    // report the use of `alert`, `confirm`, and `prompt`
    'no-alert': 'warn',

    // disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 'error',

    // disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty functions
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],

    // disallow the use of `eval()`
    'no-eval': 'error',

    // disallow extending native types
    'no-extend-native': 'error',

    // disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow shorthand type conversions
    'no-implicit-coercion': 'error',

    // disallow variable and `function` declarations in the global scope
    'no-implicit-globals': 'error',

    // disallow the use of `eval()`-like methods
    'no-implied-eval': 'error',

    // disallow the use of the `__iterator__` property
    'no-iterator': 'error',

    // disallow labeled statements
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'error',

    // disallow multiline strings
    'no-multi-str': 'error',

    // disallow `new` operators outside of assignments or comparisons
    'no-new': 'error',

    // disallow `new` operators with the `Function` object
    'no-new-func': 'error',

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'error',

    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // disallow reassigning `function` parameters
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          // for reduce accumulators
          'acc',
          'accumulator',
          // for e.returnValue
          'e',
          // for Express requests
          'req',
          'request',
          // for Express responses
          'res',
          'response',
        ],
        props: true,
      },
    ],

    // disallow the use of the `__proto__` property
    'no-proto': 'error',

    // disallow certain properties on certain objects
    'no-restricted-properties': [
      'error',
      {
        message: 'arguments.callee is deprecated',
        object: 'arguments',
        property: 'callee',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineGetter__',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineSetter__',
      },
      {
        message: 'Use the exponentiation operator (**) instead.',
        object: 'Math',
        property: 'pow',
      },
    ],

    // disallow assignment operators in `return` statements
    'no-return-assign': ['error', 'always'],

    // disallow unnecessary `return await`
    'no-return-await': 'error',

    // disallow `javascript:` urls
    'no-script-url': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow comma operators
    'no-sequences': 'error',

    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',

    // disallow unused expressions
    'no-unused-expressions': 'error',

    // disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'error',

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow redundant return statements
    'no-useless-return': 'error',

    // disallow `void` operators
    'no-void': 'error',

    // report the use of specified warning terms in comments
    'no-warning-comments': 'warn',

    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'error',

    // disallow async functions which have no `await` expression
    'require-await': 'error',

    // require `var` declarations be placed at the top of their containing scope
    'vars-on-top': 'error',

    // require parentheses around immediate `function` invocations
    'wrap-iife': 'error',

    // disallow “Yoda” conditions
    yoda: 'error',
  },
};
