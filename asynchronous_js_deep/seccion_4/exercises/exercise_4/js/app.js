var MAINAPP = (function(nsp) {
  "use strict";

  let url = 'https://jsonplaceholder.typicode.com/';

  /*
  Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
  */

  const getPosts = function() {
    return fetch(url + 'posts/')
      .then(response1 => response1.json())
      .then(posts => nsp.posts = posts)
      .catch(err => console.log(`Problem retrieving posts: ${err}`));
  }

  const getComments = function() {
    return fetch(url + 'comments/')
      .then(response2 => response2.json())
      .then(comments => nsp.comments = comments)
      .catch(err => console.log(`Problem retrieving comments: ${err}`));
  }

  const getTodos = function() {
    return fetch(url + 'todos/')
      .then(response3 => response3.json())
      .then(todos => nsp.todos = todos)
      .catch(err => console.log(`Problem retrieving todos: ${err}`));
  }

  Promise.all([getPosts(), getComments(), getTodos()])
    .then(() => console.log('All the promises are resolved'))
    .catch(err => console.error(err));

  //public
  return nsp;
})(MAINAPP || {});
