const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 92 },
  { name: 'Charlie', age: 23, grade: 78 },      
];

console.log(`Students: ${JSON.stringify(students)}`);
students.forEach((student,index) => {
    console.log(`Student ${index + 1}: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});
 
