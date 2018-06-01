'use strict';

module.exports = {
  extends: 'airbnb',
  rules: {
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
};
