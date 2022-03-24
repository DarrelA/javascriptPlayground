const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: OMDBAPI_API_KEY,
      s: searchTerm,
    },
  });
  if (response.data.Error) return [];
  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = /*html*/ `
    <label><b>Search For a Movie</b></label>
    <input class="input" />
    <div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
    </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async (event) => {
  if (event.target.value === '') return;
  const movies = await fetchData(event.target.value);

  if (!movies.length) {
    dropdown.classList.remove('is-active');
    return;
  }

  resultsWrapper.innerHTML = '';

  for (const movie of movies) {
    const option = document.createElement('a');
    option.classList.add('dropdown-item');
    option.innerHTML = /*html*/ `
      <img src='${movie.Poster === 'N/A' ? '' : movie.Poster}' />
      ${movie.Title}
      `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener('input', debounce(onInput));
document.addEventListener('click', (event) => {
  if (!root.contains(event.target)) dropdown.classList.remove('is-active');
  else if (input.value !== '') dropdown.classList.add('is-active');
});
