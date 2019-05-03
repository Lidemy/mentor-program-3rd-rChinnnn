const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
});

describe('hw4', () => {
  it('should return correct answer when str = apple', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
});

describe('hw4', () => {
  it('should return correct answer when str = aaaaa', () => {
    expect(isPalindromes('aaaaa')).toBe(true);
  });
});

describe('hw4', () => {
  it('should return correct answer when str = applppa', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
});

describe('hw4', () => {
  it('should return correct answer when str = rChinihCr', () => {
    expect(isPalindromes('rChinihCr')).toBe(true);
  });
});

describe('hw4', () => {
  it('should return correct answer when str = aAaaa', () => {
    expect(isPalindromes('aAaaa')).toBe(false);
  });
});
