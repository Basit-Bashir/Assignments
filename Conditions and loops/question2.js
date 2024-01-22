// Function to determine the grade based on marks
function calculateGrade(marks) {
  let grade;

  if (marks > 90) {
    grade = "A";
  } else if (marks >= 70 && marks <= 90) {
    grade = "B";
  } else if (marks >= 50 && marks < 70) {
    grade = "C";
  } else {
    grade = "F";
  }

  return grade;
}

let student1Marks = 95;
let student2Marks = 82;
let student3Marks = 63;

console.log(`Student 1 Grade: ${calculateGrade(student1Marks)}`);
console.log(`Student 2 Grade: ${calculateGrade(student2Marks)}`);
console.log(`Student 3 Grade: ${calculateGrade(student3Marks)}`);
