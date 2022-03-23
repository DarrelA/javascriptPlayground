const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: OMDBAPI_API_KEY,
      s: searchTerm,
    },
  });
  console.log(response);
};

const input = document.querySelector('input');

// Deboucing an input: Waiting for some time to pass after the last event to actually do something.
const debounce = (func, delay = 700) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

const onInput = (event) => fetchData(event.target.value);
input.addEventListener('input', debounce(onInput));
