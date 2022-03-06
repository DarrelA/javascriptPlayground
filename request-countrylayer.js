const countryRequest = new XMLHttpRequest();
const countryCode = 'MX';

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find((country) => country.alpha2Code === countryCode);
    console.log(country.name);
  } else if (e.target.readyState === 4) console.log('Something went wrong!');
});

// Turn off to save API calls.
// countryRequest.open(
//   'GET',
//   `http://api.countrylayer.com/v2/all?access_key=${API_KEY_COUNTRYLAYER}`
// );
// countryRequest.send();
