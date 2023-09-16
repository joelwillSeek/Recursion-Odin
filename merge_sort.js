/**
 *
 * @param {Array<Number>} array
 */
let merge = (array) => {
  if (array.length < 2) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return sort_merge(merge(left), merge(right));
};

/**
 *
 * @param {Array<Number>} left_array
 * @param {Array<Number>} right_array
 */
let sort_merge = (left_array, right_array) => {
  let corrected_array = [];
  let left_index = 0;
  let right_index = 0;

  while (left_index < left_array.length && right_index < right_array.length) {
    if (left_array[left_index] <= right_array[right_index]) {
      corrected_array.push(left_array[left_index]);
      left_index++;
    } else {
      corrected_array.push(right_array[right_index]);
      right_index++;
    }
  }

  while (left_index < left_array.length) {
    corrected_array.push(left_array[left_index]);
    left_index++;
  }

  while (right_index < right_array.length) {
    corrected_array.push(right_array[right_index]);
    right_index++;
  }

  return corrected_array;
};

let arr = [5, 2, 6, 1, 3, 9, 4, 7, 8];
console.log("solution:", merge(arr));
