// The comma operator in JavaScript allows you to evaluate multiple expressions sequentially and return the value of the last expression. It is often used to include multiple expressions within a single statement.
var a = 5,
  b = 10,
  c = 15;

var result = (a++, b++, c++);

console.log("Result: " + result);
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
