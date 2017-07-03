/*jshint esversion: 6*/
import {combineReducers} from 'redux';

import finalFork from './finalFork';
import championDish from './championDish';

export default combineReducers({
  finalFork,
  championDish
});