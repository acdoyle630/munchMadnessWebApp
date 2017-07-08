/*jshint esversion: 6*/
import {combineReducers} from 'redux';

import finalFork from './finalFork';
import championDish from './championDish';
import winner from './winner';
import myLocation from './myLocation';

export default combineReducers({
  finalFork,
  championDish,
  winner,
  myLocation
});