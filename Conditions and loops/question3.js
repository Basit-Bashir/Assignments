// Loops are control flow structures in programming that allow you to repeatedly execute a block of code until a certain condition is met. They are used to efficiently iterate over a set of values, perform a task multiple times, or iterate through elements in a collection. There are several types of loops in JavaScript, which is a programming language commonly used in conjunction with HTML for web development. Let's discuss three main types of loops: for, while, and do-while.

// 1. for Loop: The for loop is used when you know in advance how many times you want to execute the block of code.
// syntax
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while Loop: The while loop is used when the number of iterations is not known in advance, and the loop continues as long as a specified condition is true.
// Syntax
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 3. do-while Loop: The do-while loop is similar to the while loop, but it guarantees that the code inside the loop will execute at least once, even if the condition is initially false.

// Syntax
let u = 1;
do {
  console.log(u);
  u++;
} while (u <= 5);
