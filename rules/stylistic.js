'use strict';

module.exports = {
  rules: {
    // enforce consistent comma style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        NewExpression: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
      },
    }],

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'consistent'],

    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'error',

    // enforce consistent indentation
    'indent': ['error', 2, {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      FunctionDeclaration: { body: 1, parameters: 1 },
      FunctionExpression: { body: 1, parameters: 1 },
      ImportDeclaration: 1,
      // MemberExpression: null,
      ObjectExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      outerIIFEBody: 1,
    }],

    // require or disallow an empty line between class members
    'lines-between-class-members': 'error',

    // disallow mixed binary operators
    'no-mixed-operators': ['error', {
      allowSamePrecedence: false,
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    }],

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'error',

    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      ExportDeclaration: { consistent: true, minProperties: 4, multiline: true },
      ImportDeclaration: { consistent: true, minProperties: 4, multiline: true },
      ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
      ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
    }],

    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
  },
};
