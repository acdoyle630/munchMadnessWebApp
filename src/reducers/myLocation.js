/*jshint esversion: 6*/

import {
  LOAD_MY_LOCATION
} from '../action/index.js';

const initialState = {
    myLocation : ''
};

const myLocation = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_MY_LOCATION:
        return Object.assign({}, state, {
        myLocation : (action.myLocation)
      });



    default : return state;
  }
};

export default myLocation;