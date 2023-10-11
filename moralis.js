    const web3ApiKey = 'gysLEDyK7XynUh0dkOJLpUIf7DKDRkyCKBABH6UKBHzmFdOVtrW5rK9gsCpYb11l';
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const options = {
      method: 'GET',
      headers,
      params: { chain: '0x89' },
    };
    fetch(
      ('https://deep-index.moralis.io/api/v2/nft' +
      '/0x17a009bC2a642711A2E0eb58bC760FA520F9CA91' +
      '/315936875005671560093754083051011296956685286201647333762932934107'), 
      options
    )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
