'use strict';

module.exports = {
  rules: {
    // ensure all exports appear after other statements
    'import/exports-last': 'error',

    // report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'error',

    // forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.{config,mock,spec,story,test}.js', '**/plopfile.js'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    // report namespace imports
    'import/no-namespace': 'error',

    // enforce a convention in module import order
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
  },
};
