const getCountryName = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const countryInfo = data.find(
          (country) => country.alpha2Code === countryCode
        );
        resolve(countryInfo.name);
      } else if (e.target.readyState === 4) reject('Something went wrong!');
    });

    countryRequest.open(
      'GET',
      `http://api.countrylayer.com/v2/all?access_key=${API_KEY_COUNTRYLAYER}`
    );
    countryRequest.send();
  });
