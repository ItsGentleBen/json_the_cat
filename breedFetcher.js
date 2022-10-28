const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let site = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(site, (err, response/*I dont know what to do with response */, body) => {
    if (err) {
      return callback(err, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback('Breed is not found', null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription, };