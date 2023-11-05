/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return (
    promise1.then((resolve) => resolve) + promise2.then((resolve) => resolve)
  );
};

console.log(
  addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    new Promise((resolve) => setTimeout(() => resolve(5), 60))
  )
);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
