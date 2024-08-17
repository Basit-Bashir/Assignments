function testRegex(pattern, str) {
  const regex = new RegExp(pattern);

  return regex.test(str);
}

console.log(testRegex("hello", "hello world")); // true
h;
console.log(testRegex("hello", "Hello world")); // false
console.log(testRegex("hello", "Hello world", "i")); // true

console.log(testRegex("\\d+", "There are 123 apples")); // true

console.log(
  testRegex("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "example@mail.com")
); // true
console.log(testRegex("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "example@mail")); // false

console.log(testRegex("^hello", "hello world")); // true
console.log(testRegex("^hello", "well, hello world")); // false

console.log(testRegex("world$", "hello world")); // true
console.log(testRegex("world$", "hello, world!")); // false

console.log(testRegex("\\b\\w+\\b", "A single word")); // true

console.log(testRegex("\\W+", "Special!@# characters")); // true

console.log(testRegex("\\s+", "Multiple    spaces")); // true

console.log(testRegex("dog|cat", "I have a dog and a cat")); // true
