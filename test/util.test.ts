import { isPrime } from '../src/util';

describe('isPrime', () => {
  it('should return true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return false for numbers < 2', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  it('should return false for even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(20)).toBe(false);
    expect(isPrime(40)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  it('should return false for odd numbers which are not prime', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(27)).toBe(false);
    expect(isPrime(9523371)).toBe(false);
    expect(isPrime(89525673)).toBe(false);
  });

  it('should return true for prime numbers', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(89)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(6523757)).toBe(true);
    expect(isPrime(76521967)).toBe(true);
  });
});
