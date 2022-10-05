'use strict';

export function sumPlusArrV1(n) {
  if (n <= 0 || typeof n !== 'number' || !n) return 0;
  if ((typeof n === 'number') & Number.isNaN(n)) return 0;
  if (Math.round(n) !== n)
    return 'Not a cardinal number. n should be: 1, 2, 3,... 1000,....';

  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}
// -------------------------------
// -------------------------------
// -------------------------------
export function sumPlusArrV2(n) {
  if (n <= 0 || typeof n !== 'number' || !n) return 0;
  if ((typeof n === 'number') & Number.isNaN(n)) return 0;
  if (Math.round(n) !== n)
    return 'Not a cardinal number. n should be: 1, 2, 3,... 1000,....';

  return (n * (n + 1)) / 2;
}
