# @tailify/eslint-config

[![Build status][build-status-image]][build-status-url]
[![Dependency status][dependency-status-image]][dependency-status-url]
[![Version][version-image]][version-url]

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

[build-status-image]: https://travis-ci.org/tailify/eslint-config.svg?branch=master
[build-status-url]: https://travis-ci.org/tailify/eslint-config

[dependency-status-image]: https://david-dm.org/tailify/eslint-config/master.svg
[dependency-status-url]: https://david-dm.org/tailify/eslint-config

[version-image]: https://img.shields.io/npm/v/@tailify/eslint-config.svg
[version-url]: https://www.npmjs.com/package/@tailify/eslint-config
