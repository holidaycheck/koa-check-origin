import test from 'tape';
import sinon, { SinonStub } from 'sinon';
import { Context } from 'koa';
import { createCheckOriginMiddleware } from '../../src/index';

test('call next() when origin was found', async t => {
  t.plan(1);
  const mockContext: Partial<Context> = {
    origin: 'http://example.com',
    throw: sinon.stub().throws() as never,
  };
  const next = sinon.stub();
  const middleware = createCheckOriginMiddleware('http://example.com');
  await middleware(mockContext as Context, next);

  t.is(next.callCount, 1);
});

test('throw HTTP 403 when origin was not found', async t => {
  t.plan(1);
  const mockContext: Partial<Context> = {
    origin: 'http://foo.com',
    throw: sinon.stub() as never,
  };
  const next = sinon.stub();
  const middleware = createCheckOriginMiddleware('http://example.com');
  await middleware(mockContext as Context, next);

  const mockThrow = (mockContext.throw as unknown) as SinonStub;
  t.true(mockThrow.calledOnceWith(403, 'Origin http://foo.com not allowed!'));
});
