import {
 FETCH_PRICESLIST_INIT,
 FETCH_PRICESLIST_SUCCESS,
 FETCH_PRICESLIST_FAILURE,
 UPDATE_PRICESLIST_INIT,
 UPDATE_PRICESLIST_SUCCESS,
 UPDATE_PRICESLIST_FAILURE,
 RESET_STATE_PRICESLIST_EDITED,
 UPDATE_STATE_PRICESLIST,
 CREATE_PRICESLIST_INIT,
 CREATE_PRICESLIST_SUCCESS,
 CREATE_PRICESLIST_FAILURE,
 CREATE_PRICESLIST_WARNING

} from '../actions/types'

import initialState from './initialState'

export default function customerListReduce(state = initialState.pricesList, action){
  
  switch (action.type) {
    case FETCH_PRICESLIST_INIT:
      return {
        ...state,
        loading: true
      }
  
    case FETCH_PRICESLIST_FAILURE:
      return {
        ...state,
        list: [],
        error: action.payload,
        loading: false
      }
  
    case FETCH_PRICESLIST_SUCCESS:
      return {  
        ...state,
        list: action.payload,
        error: null,
        loading: true
      }
    case UPDATE_PRICESLIST_INIT:
      return{
        ...state,
        loading:true
      }
   
    case UPDATE_PRICESLIST_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false
      }
   
    case UPDATE_PRICESLIST_SUCCESS:
      return{
        ...state,
        list: [...state.list],
        error:null,
        loading: true
      }
    case RESET_STATE_PRICESLIST_EDITED:
      return {
        ...state,
        edited: []
      }
    case UPDATE_STATE_PRICESLIST:
      return {
        ...state,
        edited: [...state.edited,action.payload]
      }
    case CREATE_PRICESLIST_INIT:
      return{
        ...state,
        loading:true
      } 
  
    case CREATE_PRICESLIST_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false
      }
  
    case CREATE_PRICESLIST_SUCCESS:
      return{
        ...state,
        list: [...state.list],
        error:null,
        loading: true
      }

    case CREATE_PRICESLIST_WARNING:
      return{
        ...state,
        list: [...state.list],
        error:null,
        loading: true
      }
  
    default:
      return state
  }
}