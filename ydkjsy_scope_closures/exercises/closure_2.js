'use strict';

function toggle(...vals) {
  var unset = {};
  var cur = unset;

  return function next() {
    if (cur !== unset) {
      vals.push(cur);
    }

    cur = vals.shift();
    return cur;
  };
}

let hello = toggle('Hello');
let onOff = toggle('on', 'off');
let speed = toggle('slow', 'medium', 'fast');

console.log(hello());
console.log(hello());

console.log(onOff());
console.log(onOff());
console.log(onOff());

console.log(speed());
console.log(speed());
console.log(speed());
console.log(speed());
