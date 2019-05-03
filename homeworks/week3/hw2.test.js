const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
});

describe('hw2', () => {
  it('should return correct answer when str = Nick', () => {
    expect(alphaSwap('Nick')).toBe('nICK');
  });
});

describe('hw2', () => {
  it('should return correct answer when str = ,hEllO122', () => {
    expect(alphaSwap(',hEllO122')).toBe(',HeLLo122');
  });
});

describe('hw2', () => {
  it('should return correct answer when str = rChinnnn', () => {
    expect(alphaSwap('rChinnnn')).toBe('RcHINNNN');
  });
});
