/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const arr1 = nums.slice(0, n);
  const arr2 = nums.slice(n, nums.length);

  const combinedArr = arr1.map((item, index) => [item, arr2[index]]);

  return [].concat(...combinedArr);
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
