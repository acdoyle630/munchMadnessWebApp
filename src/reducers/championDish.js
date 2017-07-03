/*jshint esversion: 6*/

import {
  LOAD_CHAMPIONDISH
} from '../action/index.js';

const initialState = {
    leftChamp: {},
    rightChamp: {},
    currentChampionContender : "one"
};

const winners = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_CHAMPIONDISH:
      if(action.contenders.id === 1 || action.contenders.id === 2){
        return Object.assign({}, state, {
        leftChamp : (action.contenders),
        currentChampionContender : "two"
      });
      }
      if(action.contenders.id === 3 || action.contenders.id === 4){
        return Object.assign({}, state, {
        rightChamp : (action.contenders),
        current : "done"
      });
      }
      if(state.current === "done"){
        break;
    }

    default : return state;
  }
};

export default winners;