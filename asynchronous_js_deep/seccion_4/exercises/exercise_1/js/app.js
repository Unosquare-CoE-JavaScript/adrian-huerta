var MAINAPP = MAINAPP || {};

(function(nsp) {
  "use strict";

  let BASE_URL = "https://api.wordnik.com/v4/word.json/"
  let apiKey = "?api_key=qaw1kbd6x5nq4y1amh3lc1omcx37qdlebij6286dr5yq8qdwy"
  let field = document.querySelector('#word')
  let btn = document.querySelector('#submitBtn')
  let results = document.querySelector('#results')
  let word
  let scrabbleVal = 0;

  const getValue = function(word) {
    let url = `${BASE_URL}${word}/scrabbleScore${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => scrabbleVal = data.value)
      .catch(err => console.error(err));
  };

  const printScore = function() {
    results.innerHTML = `The scrabble score for the word ${word} is: ${scrabbleVal}`;
  }

  btn.addEventListener('click', function(e) {
    let myPromise = Promise.resolve();
    word = field.value;

    myPromise
      .then(() => getValue(word))
      .then(printScore)
      .catch(err => console.error(err));
  });

  nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);
