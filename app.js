const autoCompleteConfig = {
  renderOption(movie) {
    return `
  <img src='${movie.Poster === 'N/A' ? '' : movie.Poster}' />
  ${movie.Title} ${movie.Year}
  `;
  },

  onOptionSelect(movie) {
    onMovieSelect(movie);
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

createAutoComplete({
  root: document.querySelector('#left-autocomplete'),
  ...autoCompleteConfig,
});

createAutoComplete({
  root: document.querySelector('#right-autocomplete'),
  ...autoCompleteConfig,
});

const onMovieSelect = async (movie) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: OMDBAPI_API_KEY,
      i: movie.imdbID,
    },
  });
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
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

<article class="notification is-primary">
  <p class="title">${movieDetail.Awards}</p>
  <p class="subtitle">Awards</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.BoxOffice}</p>
  <p class="subtitle">BoxOffice</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.Metascore}</p>
  <p class="subtitle">Metascore</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.imdbRating}</p>
  <p class="subtitle">IMDB Rating</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.imdbVotes}</p>
  <p class="subtitle">IMDB Votes</p>
</article>

`;
};
