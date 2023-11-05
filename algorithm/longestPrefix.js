/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs.length - 1; i++) {
    for (let j = 0; j < strs.length - 1 - i; j++) {
      if (strs[j] < strs[j + 1]) {
        let temp = strs[j];
        strs[j] = strs[j + 1];
        strs[j + 1] = temp;
      }
    }
  }

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let longestPrefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== lastStr[i]) {
      break;
    }

    longestPrefix += firstStr[i];
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
