// Intersection types allows us to combine 1 or more custom types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection type
type User = Admin & Employee;


type unknownUser = Admin | Employee
let user1: unknownUser;

user1 = {
  name: 'Angel',
  startDate: new Date(),
  privileges: ['PUSH', 'PULL'],
};

// -------------------------------

// Type guards ensure that types and properties, etc exists
// the keyword "typeof" tell us if the val type are equal to an existing js type
// If we want to ensure a property in a object exists, we can use this form: if ('property' in desireObject) {}

function printInfo(user: unknownUser) {
  console.log(user.name,);

  if ('privileges' in user) {
    console.log(`privileges: ${user.privileges}`);
  }

  if ('startDate' in user) {
    console.log(`Start Date: ${user.startDate}`);
  }
}

printInfo(user1);

// ------------------------------

// Another type guard is instanceof, this is used when we work on classes and we need to ensure that

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v2);

// ------------------------------

// Type casting allows us to tell TS the type of element is in our DOM

// We can use these two different syntaxes
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;
userInput.value = 'Hi There!!';

// ------------------------------

// Index properties allows us when working with object and we don´t know exactly the properties names and how much of them are in this object

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
};
