"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

const postTodo = async function(todo) {
  let url = 'https://jsonplaceholder.typicode.com/todos/';
  let options = {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
  };

  try {
    const data = await fetch(url, options).then(data => data.json());
    console.log(data);
  } catch (error) {
    console.error(`Unable to create todo: ${error}`);
  }
}

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

postTodo(todo);

console.log('Other code');
