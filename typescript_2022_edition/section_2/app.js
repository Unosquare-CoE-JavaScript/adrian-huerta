/**
 * Union types
 * We can have different types, to achieve that, we use the pipe (|) to separate the types that we want.
 * Example of a variable that can be a number or a string: number | string
 */
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(12, 23);
console.log(combineAges);
var combineNames = combine('Angel', 'Adrian');
console.log(combineNames);
function greetings(user) {
    console.log("Hi my name is ".concat(user.name, " and I'm ").concat(user.age, " years old"));
}
var user = {
    name: 'Angel',
    age: 28
};
greetings(user);
