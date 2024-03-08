/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = [];

  for (let i = 0; i < names.length; i++) {
    const person = {
      name: names[i],
      height: heights[i],
    };

    people.push(person);
  }

  const sortByHeight = people.sort((a, b) => b.height - a.height);
  const mapByName = sortByHeight.map((person) => person.name);

  return mapByName;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], (heights = [155, 185, 150])));
