import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });
  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      search: 'value',
    });

    expect(params).toBe('?test=value&search=value');
  });
  test('test with undefined param', () => {
    const params = getQueryParams({
      test: 'value',
      search: undefined,
    });

    expect(params).toBe('?test=value');
  });
});
