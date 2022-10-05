// n = 321;

// V1: compare digit to digit, start from the right:
// 1. remaining = n;
// 2. prevDigit = -1;
// 3. lastDigit = remaining % 10;
// 4. prevDigit = lastDigit > prevDigit? lastDigit : return false;

export function isDecreasingNumberV1(n) {
  if (typeof n !== 'number' || !n) return false;

  if (n < 10) return false;

  let remaining = n;
  let prevDigit = -1;

  while (remaining > 0) {
    // n = 321
    let lastDigit = remaining % 10;
    if (lastDigit <= prevDigit) return false;
    // update prevDigit:
    prevDigit = lastDigit;
    // update remaining:
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

// V2: n -> string; use for loop; start from the left;
export function isDecreasingNumberV2(n) {
  if (typeof n !== 'number' || !n) return false;
  if (n < 10) return false;

  let numString = n.toString();
  for (let i = 1; i < numString.length; i++) {
    if (numString[i] >= numString[i - 1]) return false;
  }
  return true;
}
