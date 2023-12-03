// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.

function generateGreeting(string) {
  return `Hi ${string} how are you!`;
}
const person1 = generateGreeting("Basit");
const person2 = generateGreeting("Haris");
const person3 = generateGreeting("Aadil");
console.log(person1);
console.log(person2);
console.log(person3);
