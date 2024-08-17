function findMatches(pattern, str) {
  const regex = new RegExp(pattern, "g");

  const matches = str.match(regex);

  return matches || [];
}

console.log(findMatches("\\d", "My phone number is 123-456-7890."));
console.log(findMatches("[A-Z]", "Hello World! JS is Great."));
console.log(findMatches("[a-z]", "Hello World! JS is Great."));

console.log(findMatches("[^a-zA-Z0-9\\s]", "Hello, World! @JS#2024$"));
