/**
 Checks whether the given number is prime.
 @param n - The number to check.
 @returns Whether `n` is prime.
 */
export function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
