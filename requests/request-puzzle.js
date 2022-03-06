const getPuzzleAsync = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else throw new Error('Unable to fetch the puzzle.');
};

const getPuzzleSync = () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=4', false);
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) throw new Error('Something went wrong!');
};
