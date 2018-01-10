import {
 FETCH_PRICESLIST_INIT,
 FETCH_PRICESLIST_SUCCESS,
 FETCH_PRICESLIST_FAILURE

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
  
    default:
      return state
  }
}