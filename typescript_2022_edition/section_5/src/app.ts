// An interface describe how do the object or class look like
// We can created a optional properties in interfaces and classes, adding a ?
interface Named {
  name: string;
  optional?: string;
}

interface Greetable extends Named {
  age: number;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user: Greetable = {
  name: 'Angel',
  age: 28,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
};

user.greet('Hi there!!');

const user2 = new Person('Angel', 28);
user2.greet('Hi there!!');
