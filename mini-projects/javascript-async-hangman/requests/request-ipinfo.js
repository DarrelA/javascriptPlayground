const getLocation = async () => {
  const response = await fetch(
    `https://ipinfo.io/json?token=${ACCESS_TOKEN_IPINFO}`
  );
  if (response.status === 200) return await response.json();
  else throw new Error('Unable to fetch data.');
};
