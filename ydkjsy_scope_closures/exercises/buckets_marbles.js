'use strict';

// Color: RED
var students = [];

function addStudent(obj) {
  // Color: Blue
  if (!typeof obj === 'object') {
    // Color: Green
    let msg = 'Invalid data';
    return msg;
  }

  students.push(obj);
}

function createStudent(name, age, email) {
  // Color: Orange
  name = String(name);
  age = Number(age);
  email = String(email);
  return {
    name,
    age,
    email,
  };
}

function findStudentsByAge(studentAge) {
  // Color: Yellow
  let names = [];
  studentAge = Number(studentAge);

  // Inside students.filter there is a block scope with Color: Brown
  let filteredStudents = students.filter(student => student.age === studentAge);

  for (let studentName of filteredStudents) {
    // Color: Ice
    names.push(studentName.name);
  }

  return names.length !== 0 ? names : 'There´s no information to show';
}

let student1 = createStudent('Adrian', 28, 'adrian.huerta@unosquare.com');
addStudent(student1);

let student2 = createStudent('Angel', 25, 'angel@gmail.com');
addStudent(student2);

let student3 = createStudent('Erick', 17, 'erick@gmail.com');
addStudent(student3);

let student4 = createStudent('David', 25, 'david@gmail.com');
addStudent(student4);

let student5 = createStudent('Mario', 28, 'mario@gmail.com');
addStudent(student5);

let filteredData = findStudentsByAge(28);
console.log(filteredData);
