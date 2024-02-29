/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const arr = [];

  for (let i = 0; i < accounts.length; i++) {
    x = accounts[i].reduce((acc, sum) => acc + sum, 0);
    arr.push(x);
  }

  return Math.max(...arr);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
