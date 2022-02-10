var MAINAPP = (function(nsp) {
  "use strict";

  let url = 'https://jsonplaceholder.typicode.com/';

  /*
  Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

  Which pattern do you prefer for this application? promises or async await?
  */

  (async function() {
    try {
      const posts = fetch(`${url}posts/`).then(response => response.json());
      const comments = fetch(`${url}comments/`).then(response => response.json());
      const todos = fetch(`${url}todos/`).then(response => response.json());


      const data = await Promise.all([posts, comments, todos]);

      nsp.posts = data[0];
      nsp.comments = data[1];
      nsp.todos = data[2];
    } catch (error) {
      console.error(`There is a problem to fetch: ${error}`);
    }
  })();

  console.log("Remaining Code.")

  //public
  return nsp;
})(MAINAPP || {});

