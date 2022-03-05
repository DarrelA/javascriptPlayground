const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) console.log('Something went wrong!');
});

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=9');
request.send();

const countryRequest = new XMLHttpRequest();
const countryCode = 'MX';

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find((country) => country.alpha2Code === countryCode);
    console.log(country.name);
  } else if (e.target.readyState === 4) console.log('Something went wrong!');
});

countryRequest.open(
  'GET',
  `http://api.countrylayer.com/v2/all?access_key=${API_KEY_COUNTRYLAYER}`
);
countryRequest.send();
