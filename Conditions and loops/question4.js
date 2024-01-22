const num1 = 10;
const num2 = 25;

if (num1 <= num2) {
  for (let i = num1 + 1; i <= num2; i++) {
    console.log(i);
  }
} else {
  console.error("Invalid input: num1 should be less than or equal to num2");
}
