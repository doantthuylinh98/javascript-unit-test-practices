'use strict';
// V1: extract digits and compare them to each other

// n = 123;
export function isIncreasingNumberV1(n) {
  if (typeof n !== 'number') return false;
  if (n < 10) return false;

  let remaining = n; // 123 && 43
  let prevDigit = 10;

  while (remaining > 0) {
    // if found an invalid case return false
    let lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;
    // update prevDigit
    prevDigit = lastDigit;
    // exit condition
    // remove the last digit from remaining
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

// V2: convert number to string and compare each digits from left to right

export function isIncreasingNumberV2(n) {
  if (typeof n !== 'number') return false;
  if (n < 10) return false;

  let numberString = n.toString();

  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}
