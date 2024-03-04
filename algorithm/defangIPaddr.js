/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  const addressArr = address.split("");

  return addressArr.map((address) => address.replace(".", "[.]")).join("");
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
