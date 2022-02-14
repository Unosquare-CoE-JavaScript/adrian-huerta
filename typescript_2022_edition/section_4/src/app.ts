// const cannot be re declared even if it's the same type
const age = 12;
// age = 22;

// On the other hand, let can do
let otherAge = 30;
otherAge = 22;

// Default parameters
const add = (a: number, b: number = 5) => a + b;

console.log(add(4));

// spread operator
const person = {
  name: 'Angel',
  age: 28,
};

const copiedPerson = { ...person };

// rest parameter
const add2 = (...numbers: number[]): number => {
  return numbers.reduce((a,b) => {
    return a + b;
  });
}

console.log(add2(2,4,5,6,7));
