/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const newArr = words.slice(left, right + 1);
  const vowels = ["a", "i", "u", "e", "o"];

  let count = 0;

  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];

    if (vowels.includes(element[0]) && vowels.includes(element.slice(-1))) {
      count++;
    }
  }

  return count;
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
