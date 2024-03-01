/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let result = 0;

  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case "type":
        if (items[i][0] === ruleValue) {
          result++;
        }
        break;
      case "color":
        if (items[i][1] === ruleValue) {
          result++;
        }
        break;
      case "name":
        if (items[i][2] === ruleValue) {
          result++;
        }
        break;
      default:
        break;
    }
  }

  return result;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
