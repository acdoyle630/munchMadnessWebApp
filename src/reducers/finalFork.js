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
        first : (action.contenders),
        current : "two"
      });
      }
      if(state.current === "two"){
        return Object.assign({}, state, {
        second : (action.contenders),
        current : "three"
      });
      }
      if(state.current === "three"){
        return Object.assign({}, state, {
        third : (action.contenders),
        current : "four"
      });
      }
      if(state.current === "four"){
        return Object.assign({}, state, {
        fourth : (action.contenders),
        current : "done"
      });

    }

    default : return state;
  }
};

export default contenders;