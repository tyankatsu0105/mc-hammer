import { fn } from '../fn';

describe('fn', () => {
  it('will return 5', () => {
    const result = fn();
    expect(result).toBe(5);
  });
});
