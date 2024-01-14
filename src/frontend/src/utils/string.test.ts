import { capitalize } from './string';

describe(capitalize.name, () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
