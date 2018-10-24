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
