/*jshint esversion: 6*/

export const LOAD_CONTENDERS = "LOAD_CONTENDERS";

export const loadContenders = contenders =>{
  console.log('hitting action');
  return{
    type : LOAD_CONTENDERS,
    contenders
  };
};