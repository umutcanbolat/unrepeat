import unrepeat from '../src';

describe('unrepeat', () => {
  it('should work with single character string', () => {
    let char = 'a';
    let repCount = 1;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with single character repeats', () => {
    let char = 'a';
    let repCount = 50;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with even number of characters', () => {
    let char = 'ab';
    let repCount = 5;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with no repeats', () => {
    let char = 'test';
    let repCount = 1;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with big number of repeats', () => {
    let char = 'test';
    let repCount = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19 * 23;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });

  it('should work with empty strings', () => {
    let char = '';
    let repCount = 1;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });
});
