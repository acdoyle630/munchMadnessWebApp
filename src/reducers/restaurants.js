/*jshint esversion: 6*/

import {
  LOAD_CONTENDERS
} from '../action/index.js';

const initialState = {
  fisrt : "",
  second : "",
  third : "",
  fourth : ""
};

const contenders = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_CONTENDERS:
    return state;
    default : return state;
  }
};

export default contenders;