function calculateBMI(weight, height) {
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return "Please enter valid positive numbers for weight (kg) and height (m).";
  }

  var bmi = weight / (height * height);

  return "BMI: " + bmi.toFixed(2);
}

var weight = 70;
var height = 1.75;

var result = calculateBMI(weight, height);
console.log(result);
