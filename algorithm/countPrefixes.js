/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      count++;
    }
  }

  return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));
