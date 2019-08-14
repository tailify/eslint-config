'use strict';

module.exports = {
  rules: {
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // require `let` or `const` instead of `var`
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],

    // require `const` declarations for variables that are never reassigned after declared
    'prefer-const': 'error',

    // require destructuring from arrays and/or objects
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: true, object: true },
        VariableDeclarator: { array: false, object: true },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // require rest parameters instead of `arguments`
    'prefer-rest-params': 'error',

    // require spread operators instead of `.apply()`
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // require symbol descriptions
    'symbol-description': 'error',
  },
};
