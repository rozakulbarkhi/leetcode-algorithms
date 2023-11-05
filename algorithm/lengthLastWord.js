/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const convertToArray = s.trim().split(" ");
  const lastWord = convertToArray[convertToArray.length - 1];
  const lengthLastWord = lastWord.length;

  return lengthLastWord;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
