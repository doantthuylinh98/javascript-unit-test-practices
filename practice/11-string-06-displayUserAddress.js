// Input an object address which contains: number, street, ward, district, city
// Return a string which display all of the key above, separate with a comma
export function displayUserAddress(address) {
  if (
    !address ||
    Object.keys(address).length === 0 ||
    Array.isArray(address) === true ||
    typeof address !== 'object'
  ) {
    return 'Not a valid input. Please add an address object.';
  }

  return `${address.number}, ${address.street}, ${address.ward}, ${address.district}, ${address.city}.`;
}

console.log(displayUserAddress());
console.log(displayUserAddress({}));
console.log(displayUserAddress(['Address']));
console.log(displayUserAddress(123));
console.log(displayUserAddress('123'));
