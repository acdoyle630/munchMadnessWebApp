/*jshint esversion: 6*/
const yelp = require('yelp-fusion');
const client = require('../protection/private.json');
const express = require('express');
const Router  = express.Router();
const clientId = client.clientId;
const clientSecret = client.clientSecret;
//const {searchYelp} = require('../yelp');
let result = "";
let paused = false;

const searchRequest = {
  term:'pizza',
  location: 'long beach, CA'
};

function searchYelp (serachCriteria)  {
  paused = true;
  console.log('searching');
  return yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(serachCriteria).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      result = prettyJson;
      console.log(result);
      paused = false;
    });
  }).catch(e => {
    console.log(e);
  });
}



Router.post('/', ( req, res ) =>{
  searchYelp({
    term : req.body.searchBar,
    location: "Honolulu, HI"
  });
  waitForIt();
  function waitForIt(){
        if (paused) {
          console.log('waiting');
            setTimeout(function(){waitForIt()},100);
        } else {
          console.log('sending');
            res.send({result});
        }
  }
});


    // console.log(result);
    // res.send({result});



module.exports = Router;