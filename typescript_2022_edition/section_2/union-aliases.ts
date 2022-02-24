/**
 * Union types
 * We can have different types, to achieve that, we use the pipe (|) to separate the types that we want.
 * Example of a variable that can be a number or a string: number | string
 */

type CustomType = number | string; // This is a custom type/ Type aliases

function combine(input1: CustomType, input2: CustomType) {
  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(12, 23);
console.log(combineAges);

const combineNames = combine('Angel', 'Adrian');
console.log(combineNames);
// ----------------------------------------------------------------

// We can use custom types with more complex types, for example

type User = {
  name: string,
  age: number,
};

function greetings(user: User) {
  console.log(`Hi my name is ${user.name} and I'm ${user.age} years old`);
}

const user = {
  name: 'Angel',
  age: 28,
}

greetings(user);
