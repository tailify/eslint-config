'use strict';

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': ['error', { minItems: 3, multiline: true }],

    // enforce line breaks after each array element
    'array-element-newline': ['error', { minItems: 3, multiline: true }],

    // enforce the consistent use of either function declarations or expressions
    'func-style': 'error',

    // enforce position of line comments
    'line-comment-position': 'error',

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'never'],

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',

    // require quotes around object literal property names
    'quote-props': ['error', 'consistent-as-needed'],
  },
};
