/**
 * Rotate array values to the right
 * @param  {array} array
 * @param  {number} positions
 * @returns rotatedArray
 */
exports.rotateArray = (array, positions) => {
  var rotatedArray = [];
  var _positions = positions % array.length;
  var newPosition;
  for (var i = 0; i < array.length; i++) {
    newPosition = i + _positions;
    rotatedArray[
      newPosition < array.length
        ? newPosition
        : newPosition - array.length
    ] = array[i];
  }
  return rotatedArray;
}