// The type unknown allows us to be flexible with types but it restricts us to assign to other variable with different type

let userInput: unknown;
let userName: string;

userInput= 5;
userInput = 'Angel';

if (typeof userInput === 'string') {
  userName = userInput;
}

// The type never only works with function, and it tell us that this function never return anything.

function generateError(message: string, code: number): never {
  throw { message: message, code: code };
}

generateError('An error occurred', 500);
