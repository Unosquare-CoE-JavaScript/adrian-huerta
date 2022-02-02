'use_strict';

/**
 * Creates an array with the given values.
 *
 * @param {Number} start The start of the range.
 * @param {Number} end The end of the range.
 * @returns {Array} range between start and end.
 */
function range(start, end) {
  let arr = [];

  for (i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

/**
 * Ensure the attributes to Number and check if the end range is defined.
 *
 * @param {Number} start The start of the range.
 * @param {Number} end The end of the range.
 * @returns {Function} Executes the function to obtain the range.
 */
function checkRange(start, end) {
  start = Number(start);

  if (end === undefined) {
    return function getEnd(end) {
      return range(start, end);
    }
  }

  end = Number(end);
  return range(start, end);
}

console.log(checkRange(3,3));
console.log(checkRange(3,8));
console.log(checkRange(3,0));

let start3 = checkRange(3);
let start4 = checkRange(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));
console.log(start4(6));
