// Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.

(function () {
  const inputNumber = 7;

  const result = ((number) => number * number)(inputNumber);

  console.log(`The square of ${inputNumber} is: ${result}`);
})();
