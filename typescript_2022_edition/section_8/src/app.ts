// Decorators

// Decorator factory
function Logger(message: string) {
  return function(constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

@Logger('Login Person')
class Person {
  name = 'Adrian';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);

function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Employee {
  name = 'Adrian';

  constructor() {
    console.log('Creating employee object...');
  }
}

// ------------------------------

//Validation with decorators

interface ValidatorConfig {
  [property: string] : {
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['required']
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ['positive']
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) return true;

  for (let prop in objValidatorConfig) {
    for (let validator in objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          return !!obj[prop];
        case 'positive':
          return obj[prop] > 0;
      }
    }
  }
  return true;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();

  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = Number(priceEl.value);

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, try again later!');
    return;
  }

  console.log(createdCourse);
});
