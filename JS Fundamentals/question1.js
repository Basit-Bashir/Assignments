function outerFunction(outerParam) {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log("Outer Parameter:", outerParam); // Accessing the parameter of outerFunction
    console.log("Outer Variable:", outerVariable); // Accessing the variable declared in outerFunction
  }
  return innerFunction;
}

const myInnerFunction = outerFunction("Hello, World!");

myInnerFunction();
