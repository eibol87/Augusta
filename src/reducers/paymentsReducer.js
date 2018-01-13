import {
  FETCH_PAYMENTS_INIT,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function deliveryNotesListReduce(state = initialState.payments, action){
  
  switch (action.type) {
    case FETCH_PAYMENTS_INIT:
      return {
        ...state,
        loading: true
      }
  
    case FETCH_PAYMENTS_FAILURE:
      return {
        ...state,
        list: [],
        error: action.payload,
        loading: false
      }
  
    case FETCH_PAYMENTS_SUCCESS:
      return {  
        ...state,
        list: action.payload,
        error: null,
        loading: false
      }
   
    default:
      return state
  }
}