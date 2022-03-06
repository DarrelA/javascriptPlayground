const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('pneumonoultramicroscopicsilicovolcanoconiosis', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

document.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// getPuzzleAsync().then(
//   (puzzle) => console.log('Asynchronous getPuzzle: ', puzzle),
//   (err) => console.log({ err })
// );

// console.log('Synchronous getPuzzle:', getPuzzleSync());

// Turn off to save API calls.
// getCountryName('LK').then(
//   (country) => console.log(country.name),
//   (err) => console.log({ err })
// );

// getLocation().then(
//   (location) =>
//     console.log(
//       `IP: ${location.ip}, City: ${location.city}, Region: ${location.region}, Coords: ${location.loc}`
//     ),
//   (err) => console.log({ err })
// );
