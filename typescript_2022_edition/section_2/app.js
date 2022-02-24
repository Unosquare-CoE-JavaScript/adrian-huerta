/**
 * Function return types
 * We can tell TS a return type of a function.
 * When a function doesn't return anything, it has de return type: void.
 * When a function has de return keyword but it doesn't return anything, it has de return type: undefined.
 */
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log("Result is: ".concat(result));
}
printResult(add(3, 5));
// ----------------------------------------------------------------
/**
 * Function types
 * Allow us to describe which type of function specifically we want
 */
// We tell TS that combineValues is a variable of type function, and this function has two parameters, both numbers and returns a number
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
