'use strict';

module.exports = {
  rules: {
    // enforce the consistent use of either function declarations or expressions
    'func-style': 'error',

    // enforce position of line comments
    'line-comment-position': 'error',

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    'prefer-object-spread': 'error',
  },
};
