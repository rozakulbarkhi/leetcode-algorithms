/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const buy = prices[1];
  const sell = prices[4];

  const result = sell - buy;

  if (result < 0) {
    return 0;
  }

  return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
