/*jshint esversion: 6*/

import {
  LOAD_MY_PRICE
} from '../action/index.js';

const initialState = {
    myPrice : ''
};

const myPrice = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_MY_PRICE:
        console.log('hit price reducer');
        return Object.assign({}, state, {
        myPrice : (action.myPrice)
      });



    default : return state;
  }
};

export default myPrice;