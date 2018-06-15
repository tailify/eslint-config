'use strict';

module.exports = {
  rules: {
    // ensure all exports appear after other statements
    'import/exports-last': 'error',

    // ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
    }],

    // ensure named imports correspond to a named export in the remote file
    'import/named': 'error',

    // forbid a module from importing a module with a dependency path back to itself
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'error',

    // report namespace imports
    'import/no-namespace': 'error',

    // forbid a module from importing itself
    'import/no-self-import': 'error',

    // prevent unnecessary path segments in import and require statements
    'import/no-useless-path-segments': 'error',

    // enforce a convention in module import order
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],
  },
  settings: {
    'import/extensions': ['.js', '.mjs'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.mjs'],
      },
    },
  },
};
