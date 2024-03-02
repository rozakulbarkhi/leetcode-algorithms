/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const element = words[i];

    const reverseElement = element.split("").reverse().join("");

    if (reverseElement === words[i]) {
      result.push(words[i]);
    }
  }

  return result[0] || "";
};

console.log(firstPalindrome(["def", "ghi"]));
