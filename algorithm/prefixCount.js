/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const prefixWord = words[i];

    if (prefixWord.startsWith(pref)) {
      count++;
    }
  }

  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
