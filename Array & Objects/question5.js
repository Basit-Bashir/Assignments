const studentInfo = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 18,
  grade: "A",
};

function displayStudentInfo(student) {
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
}

// Example usage:
displayStudentInfo(studentInfo);
