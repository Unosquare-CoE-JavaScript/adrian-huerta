/**
 * Tuple:
 * Is a type in TS that is similar to an array but it has some differences
 * 1. We declare a tuple inside of [], then declare the type(s) we want in this tuple [string, number, ...etc]
 * 2. Once we declare it, TS validate the values and the length of the tuple.
 */

// TypeScript inferred the type of object we working on
const person: {
  name: string; // inferred by TS
  age: number; // inferred by TS
  hobbies: string[] // Array of strings: inferred by TS
  role: [number, string]; // This is a tuple
} = {
  name: 'Angel',
  age: 28,
  hobbies: ['Videogames', 'Basketball'],
  role: [1, 'admin'],
};


// TypeScript know that the variable hobby is string because we iterate through an array of strings
for (let hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.name);

// -------------------------------------------------------

/**
 * Enums:
 * Is a type in TS, we help to define a set of named constants.
 * The default behavior of enums are:
 * 1: It starts in 0.
 * 2. It's commonly used enums in upper case.
 * 3. If we dont't want that enum starts in 0, we can assigned another value: enum Dummy {DUMMY1 = 'other value', etc...}
 */

enum Role {ADMIN, READ_ONLY, AUTHOR};

const permissions = {
  role: Role.ADMIN,
};
