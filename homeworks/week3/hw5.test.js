const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
});

describe('hw5', () => {
  it('should return correct answer', () => {
    expect(add('46999', '4787164')).toBe('4834163');
  });
});

describe('hw5', () => {
  it('should return correct answer', () => {
    expect(add('5678', '9876')).toBe('15554');
  });
});

describe('hw5', () => {
  it('should return correct answer', () => {
    expect(add('8567', '92888')).toBe('101455');
  });
});

describe('hw5', () => {
  it('should return correct answer', () => {
    expect(add('99873', '200')).toBe('100073');
  });
});

describe('hw5', () => {
  it('should return correct answer', () => {
    expect(add('464561234897877', '1231567897854634')).toBe('1696129132752511');
  });
});
