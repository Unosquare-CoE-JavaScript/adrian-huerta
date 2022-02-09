'use strict';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodo = function(id) {
  let url;

  if (typeof id === 'boolean' || typeof id === 'object') {
    id = NaN;
  }

  id = Number(id);

  if (Number.isNaN(id)) {
    url = `${BASE_URL}/todos/`;
  } else {
    url = `${BASE_URL}/todos/${id}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

const createTodo = function(todo) {
  let url = `${BASE_URL}/todos/`;
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(`Unable to create todo: ${err}`));
}

let todo = {
  completed: false,
  userId: 1,
  title: 'Learn Promises'
}

// createTodo(todo);
getTodo(4);
