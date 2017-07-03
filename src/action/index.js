/*jshint esversion: 6*/

export const LOAD_CONTENDERS = "LOAD_CONTENDERS";
export const LOAD_CHAMPIONDISH = "LOAD_CHAMPIONDISH";

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