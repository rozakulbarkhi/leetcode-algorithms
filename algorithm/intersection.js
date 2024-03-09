/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const x = new Set(nums1);
  const y = new Set(nums2);

  return [...x].filter((num) => y.has(num));
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
