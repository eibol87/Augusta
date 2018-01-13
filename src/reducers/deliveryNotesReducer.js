import {
  FETCH_DELIVERYNOTES_INIT,
  FETCH_DELIVERYNOTES_SUCCESS,
  FETCH_DELIVERYNOTES_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function deliveryNotesListReduce(state = initialState.deliveryNotes, action){
  
  switch (action.type) {
    case FETCH_DELIVERYNOTES_INIT:
      return {
        ...state,
        loading: true
      }
  
    case FETCH_DELIVERYNOTES_FAILURE:
      return {
        ...state,
        list: [],
        error: action.payload,
        loading: false
      }
  
    case FETCH_DELIVERYNOTES_SUCCESS:
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