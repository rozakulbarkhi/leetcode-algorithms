/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const dict = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const result = new Set();

  for (const word of words) {
    let letter = "";

    for (const char of word) {
      letter += dict[char];
    }

    result.add(letter);
  }

  return result.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a"]));
