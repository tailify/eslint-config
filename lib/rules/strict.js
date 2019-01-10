'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.config.js', '**/plopfile.js'],
      rules: {
        // require or disallow strict mode directives
        strict: ['error', 'safe'],
      },
    },
  ],
};
