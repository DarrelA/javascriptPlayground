const getPuzzle = (callback) => {
  //   Making an HTTP request
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) callback('Something went wrong!');
  });

  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=4');
  request.send();
};
