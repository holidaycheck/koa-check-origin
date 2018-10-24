import { Context, Middleware } from 'koa';

export function originWhitelist(
  allowedOrigins: ReadonlyArray<string>,
): Middleware {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { origin } = ctx;

    if (allowedOrigins.includes(origin)) {
      await next();
    } else {
      ctx.throw(403, `Origin ${origin} not allowed!`);
    }
  };
}
