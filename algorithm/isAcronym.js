/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let arr = [];

  for (const word of words) {
    arr.push(word[0]);
  }

  return arr.join("") === s;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
