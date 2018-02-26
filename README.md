# eslint-config

[![Build status][build-status-image]][build-status-url]

> Tailify's very own opinionated ESLint configuration.

## Installation

```
$ npm install --save-dev @tailify/eslint-config
```

## Usage

To get started, add this to your `.eslintrc.js` file:

```js
module.exports = {
  extends: '@tailify'
};
```

*Note: We can omit the `/eslint-config` suffix since it is automatically assumed by ESLint.*

[build-status-image]: https://api.travis-ci.org/tailify/eslint-config.svg?branch=master
[build-status-url]: https://travis-ci.org/tailify/eslint-config
