'use strict';

var restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow specified global variables
    'no-restricted-globals': ['error'].concat(restrictedGlobals),

    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // disallow initializing variables to `undefined`
    'no-undef-init': 'error',

    // disallow the use of `undefined` as an identifier
    'no-undefined': 'error',

    // disallow the use of variables before they are defined
    'no-use-before-define': ['error', { classes: true, functions: true, variables: true }],
  },
};
