const getPuzzleAsync = () =>
  fetch('http://puzzle.mead.io/puzzle?wordCount=4', {})
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error('Unable to fetch the puzzle.');
    })
    .then((data) => data.puzzle)
    .catch((err) => err);

const getPuzzleSync = () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=4', false);
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) throw new Error('Something went wrong!');
};
