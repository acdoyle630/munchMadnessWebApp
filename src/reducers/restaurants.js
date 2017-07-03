/*jshint esversion: 6*/

import {
  LOAD_CONTENDERS
} from '../action/index.js';

const initialState = {
    first: {},
    second: {},
    third: {},
    fourth: {},
    current : "one"
};

const contenders = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_CONTENDERS:
      if(state.current === "one"){
        return Object.assign({}, state, {
        first : (JSON.parse(action.contenders.result)),
        current : "two"
      });
      }
      if(state.current === "two"){
        return Object.assign({}, state, {
        second : (JSON.parse(action.contenders.result)),
        current : "three"
      });
      }
      if(state.current === "three"){
        return Object.assign({}, state, {
        third : (JSON.parse(action.contenders.result)),
        current : "four"
      });
      }
      if(state.current === "four"){
        return Object.assign({}, state, {
        fourth : (JSON.parse(action.contenders.result)),
        current : "done"
      });
      }
      if(state.current === "done"){
        break;
    }

    default : return state;
  }
};

export default contenders;