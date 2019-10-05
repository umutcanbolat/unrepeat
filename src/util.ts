/**
 * @Method Returns if provided number is prime or not.
 * @param n - The number to check.
 * @returns boolean
 */
export function isPrime(n: number): boolean {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
