[![Build Status](https://img.shields.io/travis/holidaycheck/koa-check-origin/master.svg?style=flat)](https://travis-ci.org/holidaycheck/koa-check-origin)
[![NPM Downloads](https://img.shields.io/npm/dm/koa-check-origin.svg?style=flat)](https://www.npmjs.org/package/koa-check-origin)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)](https://gitmoji.carloscuesta.me)
[![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-1f425f.svg?style=flat)](http://www.typescriptlang.org)

# koa-check-origin

A [koa](https://koajs.com) middleware that checks if the origin matches the given base URL. If not a [HTTP 403](https://http.cat/403) is thrown.

## Installation

`koa-check-origin` requires `Node.js >= v7.6.0` because Koa [needs that](https://github.com/koajs/koa#installation) as well.

```sh
$ npm install --save koa-check-origin
```

or if you use [Yarn](https://yarnpkg.com)

```sh
$ yarn add koa-check-origin
```

## Usage

```js
const app = new Koa();
app.use(createCheckOriginMiddleware('http://example.com'));
```
