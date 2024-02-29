/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let found = false;

    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        found = true;
        break;
      }
    }

    if (found) {
      result.push(i);
    }
  }

  return result;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
