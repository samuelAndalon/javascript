const { rotateArray } = require('../rotateArray');

describe('rotateArray', () => {
  it('should work', () => {
    let array = rotateArray([1, 2, 3, 4, 5], 10000000000000002);
    expect(
      array
    ).toEqual(
      [4, 5, 1, 2, 3]
    );
  });
});