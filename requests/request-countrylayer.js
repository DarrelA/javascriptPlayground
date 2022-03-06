const getCountryName = (countryCode) =>
  fetch(`http://api.countrylayer.com/v2/all?access_key=${API_KEY_COUNTRYLAYER}`)
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error('Unable to fetch the data.');
    })
    .then((data) => data.find((country) => country.alpha2Code === countryCode))
    .catch((err) => err);
