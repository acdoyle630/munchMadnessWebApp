/*jshint esversion: 6*/

export const LOAD_CONTENDERS = "LOAD_CONTENDERS";

export const loadContenders = contenders =>{
  return{
    type : LOAD_CONTENDERS,
    contenders
  };
};