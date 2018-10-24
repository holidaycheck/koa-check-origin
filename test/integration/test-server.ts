import Koa from 'koa';
import listen from 'test-listen';
import { createOriginWhitelistMiddleware } from '../../src/index';

export async function withServer(
  testFn: (url: string) => Promise<void>,
  baseUrl = 'http://localhost',
) {
  const app = new Koa();
  app.use(createOriginWhitelistMiddleware(baseUrl));
  const server = app.listen();
  const url = await listen(server);
  try {
    await testFn(url);
  } finally {
    server.close();
  }
}
