/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const splitArr = [];
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    splitArr.push(nums.slice(i, i + 2));
  }

  for (let i = 0; i < splitArr.length; i++) {
    const freq = splitArr[i][0];
    const value = splitArr[i][1];

    result.push(new Array(freq).fill(value));
  }

  return [].concat(...result);
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([1, 1, 2, 3]));
