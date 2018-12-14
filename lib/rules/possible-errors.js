'use strict';

module.exports = {
  rules: {
    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',

    // disallow assignments that can lead to race conditions due to usage of await or yield
    'require-atomic-updates': 'error',
  },
};
