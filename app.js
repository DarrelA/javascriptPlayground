const autoCompleteConfig = {
  renderOption(movie) {
    return `
  <img src='${movie.Poster === 'N/A' ? '' : movie.Poster}' />
  ${movie.Title} ${movie.Year}
  `;
  },

  inputValue(movie) {
    return movie.Title;
  },

  async fetchData(searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: OMDBAPI_API_KEY,
        s: searchTerm,
      },
    });
    if (response.data.Error) return [];
    return response.data.Search;
  },
};

for (let side of ['left', 'right']) {
  createAutoComplete({
    root: document.querySelector(`#${side}-autocomplete`),
    ...autoCompleteConfig,

    onOptionSelect(movie) {
      document.querySelector('.tutorial').classList.add('is-hidden');
      onMovieSelect(
        movie,
        document.querySelector(`#${side}-summary`),
        `${side}`
      );
    },
  });
}

let leftMovie, rightMovie;
const onMovieSelect = async (movie, summary, side) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: OMDBAPI_API_KEY,
      i: movie.imdbID,
    },
  });

  summary.innerHTML = movieTemplate(response.data);
  side === 'left' ? (leftMovie = response.data) : (rightMovie = response.data);
  if (leftMovie && rightMovie) runComparison();
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    '#left-summary .notification'
  );
  const rightSideStats = document.querySelectorAll(
    '#right-summary .notification'
  );

  // Works for any order of stats.
  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];
    const leftSideValue = leftStat.dataset.value;
    const rightSideValue = rightStat.dataset.value;

    if (isNaN(rightSideValue) || isNaN(leftSideValue)) {
      rightStat.classList.remove('is-primary');
      leftStat.classList.remove('is-primary');
    } else if (rightSideValue > leftSideValue) {
      leftStat.classList.remove('is-primary');
      leftStat.classList.add('is-warning');
    } else {
      rightStat.classList.remove('is-primary');
      rightStat.classList.add('is-warning');
    }
  });
};

const movieTemplate = (movieDetail) => {
  const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
    const value = +word;
    if (isNaN(value)) return prev;
    else return prev + value;
  }, 0);

  const dollars = +movieDetail.BoxOffice.replace(/\D/g, '');
  const metaScore = +movieDetail.Metascore;
  const imdbRating = +movieDetail.imdbRating;
  const imdbVotes = +movieDetail.imdbVotes.replace(/,/g, '');

  return /*html*/ `
<article class="media">
  <figure class="media-left">
    <p class="image"><img src="${movieDetail.Poster}" alt="poster" /></p>
  </figure>

  <div class="media-content">
    <div class="content">
      <h1>${movieDetail.Title}</h1>
      <h4>${movieDetail.Genre}</h4>
      <p>${movieDetail.Plot}</p>
    </div>
  </div>
</article>

<article data-value=${awards} class="notification is-primary">
  <p class="title">${movieDetail.Awards}</p>
  <p class="subtitle">Awards</p>
</article>
<article data-value=${dollars} class="notification is-primary">
  <p class="title">${movieDetail.BoxOffice}</p>
  <p class="subtitle">BoxOffice</p>
</article>
<article data-value=${metaScore} class="notification is-primary">
  <p class="title">${movieDetail.Metascore}</p>
  <p class="subtitle">Metascore</p>
</article>
<article data-value=${imdbRating} class="notification is-primary">
  <p class="title">${movieDetail.imdbRating}</p>
  <p class="subtitle">IMDB Rating</p>
</article>
<article data-value=${imdbVotes} class="notification is-primary">
  <p class="title">${movieDetail.imdbVotes}</p>
  <p class="subtitle">IMDB Votes</p>
</article>

`;
};
