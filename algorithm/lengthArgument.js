/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  const arr = [];

  for (let i = 0; i < args.length; i++) {
    arr.push(args[i]);
  }

  return arr.length;
};

console.log(argumentsLength(1));

/**
 * argumentsLength(1, 2, 3); // 3
 */
