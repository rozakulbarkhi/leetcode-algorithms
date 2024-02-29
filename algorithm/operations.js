/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;

  for (let i = 0; i < operations.length; i++) {
    const inc = operations[i].includes("++");

    if (inc) {
      X++;
    } else {
      X--;
    }
  }

  return X;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
