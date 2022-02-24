var MAINAPP = (function(nsp) {
  "use strict";

  let url = 'https://jsonplaceholder.typicode.com/';

  /*
  The following promise code is inside a module pattern. Change the promise code so that it uses async await instead. You will want to use an IIFE for this. Make sure to catch any errors.
  */

  (async function() {
    try {
      const data = await fetch(`${url}posts/`).then(response => response.json());
      nsp.posts = data;
    } catch (error) {
      console.log(`Problem retrieving posts: ${error}`);
    }
  })();
  //public
  return nsp;
})(MAINAPP || {});


