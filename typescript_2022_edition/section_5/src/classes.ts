class Department {
  name: string;
  private readonly id: string;
  private employees: string[] = [];
  // The static properties and methods on a class can access them without an instance.
  static dummyVar: string;
  // if we want to access to a static property or a method inside of the class, we can´t use the keyword "this".
  // Instead of that, we need to call the class an then the property or method ,for example: Department.dummyVar

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  // We gave a hint to TS that it can infer the keyword "this" as a property of department class
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  technology: string = '';

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  get lastTech() {
    if (this.technology) {
      return this.technology;
    }

    throw new Error('No technology is available');
  }

  set lastTech(value: string) {
    if (!value) return;

    this.technology = value;
  }
}

// the keyword "abstract" allows to enforce all the inherit classes to implement an abstract method describe in the class.
// Abstract classes cannot be instantiated
abstract class DummyClass {

  abstract sayHi(): void;
}

// Private constructor and static method getInstance to ensure we can only have one instance of the class
class SingletonPattern {
  private static instance: SingletonPattern;

  private constructor() {
    // code goes here
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new SingletonPattern();
    return this.instance;
  }
}

const accounting = new ITDepartment('d1',['Adrian']);
accounting.describe();

accounting.addEmployee('Angel');
accounting.addEmployee('Adrian');

accounting.printEmployeeInfo();

accounting.lastTech = 'JavaScript';
console.log(accounting.lastTech);

// accessing to the instance without the keyword "new"
const singleton = SingletonPattern.getInstance();
console.log(singleton);
