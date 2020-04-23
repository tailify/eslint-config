'use strict';

module.exports = {
  rules: {
    // enforce camelcase naming convention
    camelcase: 'error',

    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'self'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'error',

    // report the use of anonymous function expressions
    'func-names': 'warn',

    // enforce the consistent use of either function expressions
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],

    // enforce minimum and maximum identifier lengths
    'id-length': [
      'error',
      {
        exceptions: ['x', 'y', 'i', 'j', 't', '_', '$'],
        min: 2,
        properties: 'always',
      },
    ],

    // enforce position of line comments
    'line-comment-position': 'error',

    // enforce an empty line between class members
    'lines-between-class-members': 'error',

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', { max: 2 }],

    // require constructor names to begin with a capital letter
    'new-cap': ['error', { capIsNew: false, newIsCap: true }],

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'error',

    // disallow continue statements
    'no-continue': 'error',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow negated conditions
    'no-negated-condition': 'error',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': 'error',

    // disallow specified syntax
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        selector: 'ForOfStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],

    // disallow dangling underscores in identifiers
    // we need __typename for all our repos allowed so share it here
    'no-underscore-dangle': ['error', { allow: ['__typename'], enforceInMethodNames: true }],

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // enforce variables to be declared separately in functions
    'one-var': ['error', 'never'],

    // require assignment operator shorthand where possible
    'operator-assignment': 'error',

    // require padding lines between statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'any', next: 'directive', prev: 'directive' },
    ],

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always', { markers: ['='] }],
  },
};
