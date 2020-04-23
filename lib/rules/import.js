'use strict';

module.exports = {
  extends: ['plugin:import/recommended'],
  overrides: [
    {
      files: ['**/__mocks__/**', '**/__tests__/**', '*.{config,spec,test}.js'],
      rules: {
        // disallow the use of extraneous packages
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
  rules: {
    // ensure all exports appear after other statements
    'import/exports-last': 'error',

    // ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages', { js: 'never', mjs: 'never' }],

    // ensure all imports appear before other statements
    'import/first': 'error',

    // enforce a newline after import statements
    'import/newline-after-import': 'error',

    // disallow import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // dusallow AMD `require` and `define` calls
    'import/no-amd': 'error',

    // disallow anonymous values as default exports
    'import/no-anonymous-default-export': 'off',

    // disallow a module from importing a module with a dependency path back to itself
    'import/no-cycle': 'error',

    // disallow imported names marked with `@deprecated` documentation tag
    'import/no-deprecated': 'error',

    // disallow repeated import of the same module in multiple places
    'import/no-duplicates': 'error',

    // disallow `require()` calls with expressions
    'import/no-dynamic-require': 'error',

    // disallow the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
      },
    ],

    // disallow the use of mutable exports with `var` or `let`
    'import/no-mutable-exports': 'error',

    // disallow use of exported name as identifier of default export
    'import/no-named-as-default': 'error',

    // disallow use of exported name as property of default export
    'import/no-named-as-default-member': 'error',

    // disallow named default exports
    'import/no-named-default': 'error',

    // disallow namespace imports
    'import/no-namespace': 'error',

    // disallow a module from importing itself
    'import/no-self-import': 'error',

    // disallow modules without any export, and exports not imported by any modules
    'import/no-unused-modules': 'error',

    // disallow unnecessary path segments in import and require statements
    'import/no-useless-path-segments': 'error',

    // disallow webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // enforce a convention in module import order
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],

    // require a default export if module exports a single name
    'import/prefer-default-export': 'error',
  },
};
