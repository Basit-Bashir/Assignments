let students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 18, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 20, grade: "B" },
];

// a. Add a Student
function addStudent(student) {
  students.push(student);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
  const student = students.find((s) => s.id === id);
  if (student) {
    Object.assign(student, updatedInfo);
  }
}

// c. Delete a Student
function deleteStudent(id) {
  students = students.filter((s) => s.id !== id);
}

// d. List All Students
function listAllStudents() {
  console.log(students);
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter((s) => s.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length;
}

// Example usage:
addStudent({
  id: 3,
  firstName: "Sam",
  lastName: "Wilson",
  age: 19,
  grade: "A",
});
updateStudent(1, { lastName: "Doe-Smith" });
deleteStudent(2);
listAllStudents();
console.log("Students with grade A:", findStudentsByGrade("A"));
console.log("Average age:", calculateAverageAge());
