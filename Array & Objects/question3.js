const student = { name: "John", age: 20 };

// a) Prevent further additions to the student object
Object.preventExtensions(student);

// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher
const teacher = { subject: "Math" };

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log({ extensibleStatus, sealedStatus });
