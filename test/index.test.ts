import unrepeat from '../src';

describe('unrepeat', () => {
  it('should work with single character string', () => {
    const char = 'a';
    const repCount = 1;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with single character repeats', () => {
    const char = 'a';
    const repCount = 50;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with even number of characters', () => {
    const char = 'ab';
    const repCount = 5;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with no repeats', () => {
    const char = 'test';
    const repCount = 1;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with big number of repeats', () => {
    const char = 'test';
    const repCount = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19 * 23;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with empty strings', () => {
    const char = '';
    const repCount = 1;

    const result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  describe('chck for the strings whose length is a prime number', () => {
    it('should work for not repeated strings', () => {
      const prime = 76521967;
      const char = 'A';
      const text = char.repeat(prime - 1) + 'B';

      const result = unrepeat(text);

      expect(result.repeated).toEqual(text);
      expect(result.count).toEqual(1);
    });

    it('should work for repeated strings', () => {
      const prime = 76521967;
      const char = 'A';

      const result = unrepeat(char.repeat(prime));

      expect(result.repeated).toEqual(char);
      expect(result.count).toEqual(prime);
    });
  });
});
