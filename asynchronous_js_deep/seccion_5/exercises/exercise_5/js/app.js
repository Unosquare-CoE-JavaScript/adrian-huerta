//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPostsById = async function(id) {
  let url = `${BASE_URL}/posts/`;
  let userPosts = [];
  id = Number(id);

  const data = await fetch(url).then(response => response.json());
  userPosts = data.filter(post => post.userId === id);

  console.log(userPosts);
};

getPostsById(6);
