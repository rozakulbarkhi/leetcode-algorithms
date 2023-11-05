/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

console.log(
  map(
    (arr = [1, 2, 3]),
    (fn = function plusone(n) {
      return n + 1;
    })
  )
);
