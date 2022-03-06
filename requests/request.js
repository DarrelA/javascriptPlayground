const getPuzzleAsync = () =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) reject('Something went wrong!');
    });

    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=4');
    request.send();
  });

const getPuzzleSync = () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=4', false);
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) throw new Error('Something went wrong!');
};
