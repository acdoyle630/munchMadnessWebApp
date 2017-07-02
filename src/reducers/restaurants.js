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
  console.log(state)
  switch(action.type){
    case LOAD_CONTENDERS:
    console.log(JSON.parse(action.contenders.result));
    return Object.assign({}, state, {
      first : (JSON.parse(action.contenders.result))

    });

    default : return state;
  }
};

export default contenders;