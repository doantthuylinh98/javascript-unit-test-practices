import { displayUserAddress } from './11-string-06-displayUserAddress';

describe('displayUserAddress(address) return a string which contain all key inside address object', () => {
  it('should return "Not a valid input. Please add an address object." if the input is empty or it just an empty object {}', () => {
    expect(displayUserAddress()).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress({})).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress('123 Main Street')).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress(289)).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress([])).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress(null)).toBe(
      'Not a valid input. Please add an address object.'
    );
    expect(displayUserAddress(true)).toBe(
      'Not a valid input. Please add an address object.'
    );
  });

  it('should return a string which contains all address info from address object', () => {
    [
      {
        number: 77,
        street: 'Nghia Dung',
        ward: 'Phuc Xa',
        district: 'Ba Dinh',
        city: 'Hanoi',
      },
      {
        ward: 'Phu Thuong',
        district: 'Tay Ho',
        city: 'Hanoi',
      },
      {
        street: 'Dang Thai Mai',
        ward: 'Tay Ho',
      },
    ].forEach((address) => {
      expect(displayUserAddress(address)).toBe(
        `${address.number}, ${address.street}, ${address.ward}, ${address.district}, ${address.city}.`
      );
    });
  });
});
