import { Context, Middleware } from 'koa';
import { URL } from 'url';

export function createCheckOriginMiddleware(baseUrl: string): Middleware {
  const { hostname: allowedHost } = new URL(baseUrl);
  return async (ctx: Context, next: () => Promise<any>) => {
    const { origin } = ctx;
    const { hostname: originHost } = new URL(origin);
    if (originHost === allowedHost) {
      await next();
    } else {
      ctx.throw(403, `Origin ${origin} not allowed!`);
    }
  };
}
