// Generic types
const names: Array<string> = [];

// Custom generic types
// We can use the keyword "extends" to add constraints in the type of parameter
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log(mergedObj.age);

// ------------------------------

// Generic classes

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('Angel');
stringStorage.addItem('Adrian');
console.log(stringStorage.getItems());
stringStorage.removeItem('Angel');
console.log(stringStorage.getItems());
