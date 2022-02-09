'use strict';

const BASE_URL = 'https://swapi.dev/api/';

const getHomeworldInfo = function(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

const getCharacterInfo = function (id) {
  id = Number(id);
  let url = `${BASE_URL}/people/${id}/`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return getHomeworldInfo(data.homeworld);
    })
    .catch(err => console.error(err));
};

getCharacterInfo(1);
