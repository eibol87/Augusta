import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  RESET_STATE_EXPAND_EDITED,
  UPDATE_CUSTOMER_EXPAND_INIT,
  UPDATE_CUSTOMER_EXPAND_SUCCESS,
  UPDATE_CUSTOMER_EXPAND_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function expandRowReduce(state = initialState.expandRow, action){
  
  switch (action.type) {
    case LOAD_STATE_EXPAND:
      return {
        ...state,
        edited: []
      }

    case RESET_STATE_EXPAND_EDITED:
      return {
        ...state,
        edited: []
      }

    case UPDATE_STATE_EXPAND:
      return {
        ...state,
        edited: [...state.edited,action.payload]
      }

    case UPDATE_CUSTOMER_EXPAND_INIT:
      return {
        ...state,
        loading: true
      }

    case UPDATE_CUSTOMER_EXPAND_SUCCESS:
      return {
        ...state,
        edited: [...state.customer],
        error:null,
        loading: true
      }

    case UPDATE_CUSTOMER_EXPAND_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    default:
      return state
      
  }
}