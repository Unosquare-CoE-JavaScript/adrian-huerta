var MAINAPP = (function(nsp) {
  "use strict";

  let BASE_URL = 'https://jsonplaceholder.typicode.com/';

  fetch(`${BASE_URL}posts/`)
    .then(response => response.json())
    .then(data => nsp.posts = data)
    .catch(err => console.error(err));

  fetch(`${BASE_URL}comments/`)
    .then(response => response.json())
    .then(data => nsp.comments = data)
    .catch(err => console.error(err));

  fetch(`${BASE_URL}todos/`)
    .then(response => response.json())
    .then(data => nsp.todos = data)
    .catch(err => console.error(err));

  return nsp;
})(MAINAPP || {});
