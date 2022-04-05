import { safeJSONparse } from '../src';

describe('safeJSONparse', () => {
  it('work without handleError', () => {
    expect(safeJSONparse('')).toBeUndefined();
    expect(safeJSONparse('{ "value": wrong JSON }')).toBeUndefined();
    expect(safeJSONparse('{ "value": "string" }')).toEqual({ value: 'string' });
    expect(safeJSONparse('[1,2,3]')).toEqual([1, 2, 3]);
  });

  it('work with handleError', () => {
    const handleError = jest.fn();
    expect(safeJSONparse('', handleError)).toBeUndefined();
    expect(handleError).toHaveBeenCalledTimes(1);
  });
});
