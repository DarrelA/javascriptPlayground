const getPuzzleAsync = (callback) => {
  const request = new XMLHttpRequest(); // Making an HTTP request

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) callback('Something went wrong!');
  });

  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
  request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=4');
  request.send();
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
