'use strict';

module.exports = {
  rules: {
    // enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],

    // enforce position of line comments
    'line-comment-position': [
      'error',
      {
        applyDefaultPatterns: true,
        ignorePattern: '',
        position: 'above',
      },
    ],

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',
  },
};
