// Prime is a number which is
// - Is a natural number greater than 1 that is not a product of two smaller natural numbers.
// 0 < n < 100000
export function isPrime(n) {
  if (n === undefined) return 'Please type in a number.';

  if (n <= 1 || n > 1e5 || typeof n !== 'number') return 'Not a valid number.';

  if (n === 2) return true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(null));
