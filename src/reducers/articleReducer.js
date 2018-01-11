import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function customerListReduce(state = initialState.article, action){
  
  switch (action.type) {
    case FETCH_ARTICLES_INIT:
      return {
        ...state,
        loading: true
      }
  
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        list: [],
        error: action.payload,
        loading: false
      }
  
    case FETCH_ARTICLES_SUCCESS:
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