const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;
  for (let char of game1.puzzle) {
    const charEl = document.createElement('span');
    charEl.textContent = char;
    puzzleEl.appendChild(charEl);
  }
};

const startGame = async () => {
  const puzzle = await getPuzzleAsync('4');
  game1 = new Hangman(puzzle, 5);
  render();
};

document.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  render();
});

document.querySelector('#reset').addEventListener('click', startGame);
startGame();

// getPuzzleAsync(4).then(
//   (puzzle) => console.log('Asynchronous getPuzzle: ', puzzle),
//   (err) => console.log({ err })
// );

// console.log('Synchronous getPuzzle:', getPuzzleSync());

// Turn off to save API calls.
// getCountryName('PS').then(
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
