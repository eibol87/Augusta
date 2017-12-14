import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  INIT_STATE_EXPAND
} from '../actions/types'

import initialState from './initialState'

export default function expandRowReduce(state = initialState.expandRow, action){
  switch (action.type) {
    case LOAD_STATE_EXPAND:
      return {
        ...state,
        edited: []
      }
    case INIT_STATE_EXPAND:
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