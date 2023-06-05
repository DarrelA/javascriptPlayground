const getCountryName = async (countryCode) => {
  const response = await fetch(
    `http://api.countrylayer.com/v2/all?access_key=${API_KEY_COUNTRYLAYER}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else throw new Error('Unable to fetch the data.');
};
