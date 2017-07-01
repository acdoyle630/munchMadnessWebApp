/*jshint esversion: 6*/
const yelp = require('yelp-fusion');
const client = require('../protection/private.json');
const express = require('express');
const Router  = express.Router();
const clientId = client.clientId;
const clientSecret = client.clientSecret;
const {searchYelp} = require('../yelp');

const searchRequest = {
  term:'pasta',
  location: 'long beach, CA'
};




Router.get('/', ( req, res ) =>{
  const searchYelp = (serachCriteria) => {
    console.log('searching');
    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(serachCriteria).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        result = prettyJson;
        console.log(result);
        return;
      }).then(res.send({result}));
    }).catch(e => {
      console.log(e);
    });
  };

  searchYelp(searchRequest);

    // console.log(result);
    // res.send({result});

});

module.exports = Router;