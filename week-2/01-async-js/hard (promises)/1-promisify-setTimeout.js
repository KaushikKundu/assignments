/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
// promise is an object representing eventual completion of an async task
async function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

module.exports = wait;
