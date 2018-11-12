const {rotateArray} = require('../index.js');
const {getPeriod} = require('../index.js');

describe('rotateArray', () => {
  it('should work', () => {
    expect(
      rotateArray([1, 2, 3, 4, 5], 10000000000000002)
    ).toEqual(
      [4, 5, 1, 2, 3]
    );
  });
});

describe('getPeriod', () => {
  it('should find n = 3 and P = "ab" for "ababab"', () => {
    expect(
      getPeriod('ababab')
    ).toEqual({
      'n': 3,
      'P': 'ab'
    });
  });

  it('should find n = 1 and P = "x" for "xxxxxx"', () => {
    expect(
      getPeriod('xxxxxx')
    ).toEqual({
      'n': 6,
      'P': 'x'
    });
  });

  it('should find n = 2 and P = "aabba" for "aabbaaabba"', () => {
    expect(
      getPeriod('aabbaaabba')
    ).toEqual({
      'n': 2,
      'P': 'aabba'
    });
  });
  it('should not find n and P for "aabbaaabbab"', () => {
    expect(
      getPeriod('aabbaaabbab')
    ).toEqual({
      'n': 0,
      'P': ''
    });
  });
});