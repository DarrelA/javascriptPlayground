const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

document.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// getPuzzleAsync((error, puzzle) => {
//   if (error) return console.log({ error });
//   else console.log('Asynchronous getPuzzle: ', puzzle);
// });

// console.log('Synchronous getPuzzle:', getPuzzleSync());

getCountryName('AU', (error, countryName) => {
  if (error) return console.log({ error });
  else console.log(countryName);
});
