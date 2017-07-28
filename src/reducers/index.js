/*jshint esversion: 6*/
import {combineReducers} from 'redux';

import finalFork from './finalFork';
import championDish from './championDish';
import winner from './winner';
import myLocation from './myLocation';
import myPrice from './myPrice';
import round  from './round';

export default combineReducers({
  finalFork,
  championDish,
  winner,
  myLocation,
  myPrice,
  round
});
