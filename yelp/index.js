/*jshint esversion: 6*/

const yelp = require('yelp-fusion');
const client = require('../protection/private.json');
const clientId = client.clientId;
const clientSecret = client.clientSecret;


const searchRequest = {
  term:'sushi',
  location: 'long beach, CA'
};


const searchYelp = (serachCriteria) => {
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(serachCriteria).then(response => {
      const firstResult = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
    });
  }).catch(e => {
    console.log(e);
  });
};

module.exports = {
  searchYelp
};

