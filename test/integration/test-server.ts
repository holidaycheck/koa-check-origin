import { createServer } from 'http';
import Koa from 'koa';
import listen from 'test-listen';
import createCheckOriginMiddleware = require('../../src/index');

export async function withServer(
  testFn: (url: string) => Promise<void>,
  baseUrl = 'http://localhost',
) {
  const app = new Koa();
  app.use(createCheckOriginMiddleware(baseUrl));
  const server = createServer(app.callback());
  const url = await listen(server);
  try {
    await testFn(url);
  } finally {
    server.close();
  }
}
