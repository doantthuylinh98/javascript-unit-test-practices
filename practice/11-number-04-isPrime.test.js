import { isPrime } from './11-number-04-isPrime';
describe('isPrime(n) check if a number is a product of itself.', () => {
  it('should return "Please type in a number." when there is no n', () => {
    expect(isPrime()).toBe('Please type in a number.');
  });
  it('should return "Not a valid number." when n is <= 1 or n > 1e5 or typeof n is not number.', () => {
    [0, 1, 100001].forEach((n) =>
      expect(isPrime(n)).toBe('Not a valid number.')
    );
  });
  it('should return false when n is not a prime number', () => {
    [8, 25, 36, 1788].forEach((n) => expect(isPrime(n)).toBe(false));
  });
  it('should return true when n = 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return "True" when n is a prime number', () => {
    [3, 5, 37, 97].forEach((n) => expect(isPrime(n)).toBe(true));
  });
});
