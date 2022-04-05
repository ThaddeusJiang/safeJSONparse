import { safeJSONparse } from '../src';

describe('safeJSONparse', () => {
  it('work', () => {
    expect(safeJSONparse('')).toBeUndefined();
    expect(safeJSONparse('{ "value": wrong JSON }')).toBeUndefined();
    expect(safeJSONparse('{ "value": "string" }')).toEqual({ value: 'string' });
    expect(safeJSONparse('[1,2,3]')).toEqual([1, 2, 3]);
  });
});
