/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let sum = 0;
  let digitSum = 0;

  let digit = nums.join("").split("").map(Number);

  for (let i = 0; i < digit.length; i++) {
    const element = digit[i];

    digitSum += element;
  }

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    sum += element;
  }

  return sum - digitSum;
};

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
