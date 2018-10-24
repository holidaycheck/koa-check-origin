import { Context, Middleware } from 'koa';
import { URL } from 'url';

/**
 * Creates a new koa middleware that checks if the given URL matches the origin.
 * @param baseUrl the URL that should be checked on every request.
 */
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
