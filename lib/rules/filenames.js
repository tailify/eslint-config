'use strict';

module.exports = {
  plugins: ['filenames'],
  rules: {
    // match the file name against the default exported value in the module
    'filenames/match-exported': ['error', null, null],
  },
};
