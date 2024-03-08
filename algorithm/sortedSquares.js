/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];

  // square
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);
  }

  // sort
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
