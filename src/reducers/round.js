/*jshint esversion: 6*/

import {
  PICK_ROUND
} from '../action/index.js';

const initialState = {
  round : 0
  };

const round = (state = initialState, action) =>{
  switch(action.type){
    case PICK_ROUND:
      return Object.assign({}, state, {
        round : action.round
      });

    default : return state;
  }
};

export default round;