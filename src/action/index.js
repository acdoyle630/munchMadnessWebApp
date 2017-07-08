/*jshint esversion: 6*/

export const LOAD_CONTENDERS = "LOAD_CONTENDERS";
export const LOAD_CHAMPIONDISH = "LOAD_CHAMPIONDISH";
export const LOAD_WINNER = "LOAD_WINNER";
export const LOAD_MY_LOCATION = 'LOAD_MY_LOCATION';

export const loadContenders = contenders =>{
  console.log('hitting action');
  return{
    type : LOAD_CONTENDERS,
    contenders
  };
};

export const loadChampionDish = contenders  =>{
  return{
    type: LOAD_CHAMPIONDISH,
    contenders
  };
};

export const loadWinner = winner =>{
  return{
    type : LOAD_WINNER,
    winner
  };
};

export const loadMyLocation = myLocation =>{
  return {
    type: LOAD_MY_LOCATION,
    myLocation
  };
};

