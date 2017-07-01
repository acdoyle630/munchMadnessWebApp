/*jshint esversion: 6 */

const express = require('express');
const yelp = express.Router();

yelp.get('/', ( req, res ) =>{
  res.send('wat');

});