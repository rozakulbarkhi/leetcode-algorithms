/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  const arr = [];

  for (let i = 0; i < sentences.length; i++) {
    arr.push(sentences[i].trim().split(" ").length);
  }

  return Math.max(...arr);
};

console.log(
  mostWordsFound([
    "s mhz xh aygofowkxsmwxdxyjmouy",
    "gk sleryrqgx hzkxykxxh qi dkbltzvswwfco",
    "vq gthhjhtcasrwffu smegiabodi urthlt mg szlmkzmszphbaokroamxmybwtbk kdikv agdsmxxcgjvebhdgqbor",
    "ymvpdynitbxuykderjwsymqkqpjuvkwkmbtgvebukksfhukceuvtiiwjzcxipfjda pyslfxffm tb bl anlgavm ej",
    "td niqenztexqeeisknh",
    "vyujfuxnpldvwzlcvhhwprsfijlpyyozpjmwjxcsfitwkc",
    "ciuntyw sxxbsijdljdmvrxfcycltbdqsktqebtopnnrrorh",
    "lxtkeodgpqtsvuxwtehzvbnuinxmmsulojrtzkulqzawbxfhzbmycivlnmpyubmzaen ivwyccrfrkcvunavptf",
  ])
);
