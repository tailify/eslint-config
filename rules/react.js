'use strict';

module.exports = {
  rules: {
    // enforce that class methods utilize `this`
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
      ],
    }],

    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': ['error', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
    }],

    // prevent missing displayName in a React component definition
    'react/display-name': 'error',

    // forbid foreign `propTypes`
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // forbid certain `propTypes`
    'react/forbid-prop-types': ['error', {
      checkChildContextTypes: true,
      checkContextTypes: true,
      forbid: ['any', 'array', 'object'],
    }],

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs'] }],

    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // enforce props alphabetical sorting
    'react/jsx-sort-props': ['error', {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false,
    }],

    // validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': 'error',

    // prevent direct mutation of `this.state`
    'react/no-direct-mutation-state': 'error',

    // enforce component methods order
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^(handle|on).+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],

    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      sortShapeProp: true,
    }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
};
