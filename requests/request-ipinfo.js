const getLocation = () =>
  fetch(`https://ipinfo.io/json?token=${ACCESS_TOKEN_IPINFO}`)
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error('Unable to fetch data.');
    })
    .then((location) => location)
    .catch((err) => err);
