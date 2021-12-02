const evenOccurrence = require('./index');

describe('Test the implementation of even occurence', () => {
  it('should return 4 for [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]', () => {
    expect(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])).toBe(4);
  });

  it('should return 1 for [1, 7, 2, 4, 5, 4, 1]', () => {
    expect(evenOccurrence([1, 7, 2, 4, 5, 4, 1])).toBe(1);
  });

  it('should return 1 for [1, 1, 1, 1]', () => {
    expect(evenOccurrence([1, 1, 1, 1])).toBe(1);
  });

  it('should return null if there are no even-occurrence items', () => {
    expect(evenOccurrence([1, 7, 2])).toBeNull();
  });

  it('should return null if there are no even-occurrence items', () => {
    expect(evenOccurrence([1, 1, 1])).toBeNull();
  });
});
