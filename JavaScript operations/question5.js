function calculateSimpleInterest(principal, rate, time) {
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    return "Please enter valid numbers for principal, rate, and time.";
  }

  var simpleInterest = (principal * rate * time) / 100;

  return "Simple Interest: $" + simpleInterest.toFixed(2);
}

e;
var principal = 1000;
var rate = 5;
var time = 2;

var result = calculateSimpleInterest(principal, rate, time);
console.log(result);
