// Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.

function curry(func) {
  const arity = func.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return func(...args);
    }
    return function (...moreArgs) {
      return curried(...args.concat(moreArgs));
    };
  };
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);

const result1 = curriedAdd(2)(3);
const result2 = curriedAdd(5, 7);

console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);
