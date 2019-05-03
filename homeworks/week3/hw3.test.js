const isPrime = require('./hw3');

describe('hw3', () => {
  it('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });
});

describe('hw3', () => {
  it('should return correct answer when n = 2', () => {
    expect(isPrime(2)).toBe(true);
  });
});

describe('hw3', () => {
  it('should return correct answer when n = 3', () => {
    expect(isPrime(3)).toBe(true);
  });
});

describe('hw3', () => {
  it('should return correct answer when n = 10', () => {
    expect(isPrime(10)).toBe(false);
  });
});

describe('hw3', () => {
  it('should return correct answer when n = 37', () => {
    expect(isPrime(37)).toBe(true);
  });
});
