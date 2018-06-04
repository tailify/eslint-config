'use strict';

module.exports = {
  extends: 'airbnb',
  rules: {
    // ensure all exports appear after other statements
    'import/exports-last': 'error',

    // report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'error',

    // report namespace imports
    'import/no-namespace': 'error',

    // enforce a convention in module import order
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
};
