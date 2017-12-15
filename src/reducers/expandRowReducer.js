import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  RESET_STATE_EXPAND_EDITED
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

    default:

      return state
      
  }
}