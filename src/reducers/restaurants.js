/*jshint esversion: 6*/

import {
  LOAD_CONTENDERS
} from '../action/index.js';

const initialState = {
    first: {},
    second: {},
    third: {},
    fourth: {}
};

const contenders = (state = initialState, action) =>{
  console.log(state);
  switch(action.type){
    case LOAD_CONTENDERS:
    if(initialState.fourth === {} && initialState.first !== {} && initialState.second !== {} && initialState.second !== {}){
    console.log(JSON.parse(action.contenders.result));
    return Object.assign({}, state, {
      fourth : (JSON.parse(action.contenders.result))
    });
    }
    if(initialState.third === {} && initialState.first !== {} && initialState.second !== {}){
      return Object.assign({}, state, {
      third : (JSON.parse(action.contenders.result))
    });
    }
    if(initialState.second === {} && initialState.first !== {}){
      return Object.assign({}, state, {
      second : (JSON.parse(action.contenders.result))
    });
    }
    if(initialState.first == {}){
      return Object.assign({}, state, {
      first : (JSON.parse(action.contenders.result))
    });
    }

    default : return state;
  }
};

export default contenders;