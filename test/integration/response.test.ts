import test from 'tape';
import got from 'got';
import { withServer } from './test-server';

test('server responds with HTTP 404 when origin matches', t =>
  withServer(async url => {
    t.timeoutAfter(500);
    t.plan(1);
    try {
      await got(url, { method: 'GET' });
    } catch (e) {
      t.is(e.statusCode, 404);
    }
  }));

test('server responds with HTTP 403 when origin does not matches', t =>
  withServer(async url => {
    t.timeoutAfter(500);
    t.plan(1);
    try {
      await got(url, { method: 'GET' });
    } catch (e) {
      t.is(e.statusCode, 403);
    }
  }, 'http://example.com'));
