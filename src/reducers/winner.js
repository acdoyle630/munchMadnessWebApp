/*jshint esversion: 6*/

import {
  LOAD_WINNER
} from '../action/index.js';

const initialState = {
    champWinner : {}
};

const winner = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_WINNER:
    console.log(action);
      return Object.assign({}, state, {
        champWinner : action.winner
      });

    default : return state;
  }
};

export default winner;