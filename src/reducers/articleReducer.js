import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  UPDATE_SELECT_ROW,
  UPDATE_ARTICLES_INIT,
  UPDATE_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_FAILURE
} from '../actions/types'

import initialState from './initialState'

export default function articleListReduce(state = initialState.article, action){
  
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
    case UPDATE_SELECT_ROW:
      return {
        ...state,
        selected: [...action.payload]
      }
    case UPDATE_ARTICLES_INIT:
      return{
        ...state,
        loading:true
      }
   
    case UPDATE_ARTICLES_FAILURE:
      return{
        ...state,
        error: action.payload,
        loading: false
      }
   
    case UPDATE_ARTICLES_SUCCESS:
      return{
        ...state,
        list: [...state.article],
        error:null,
        loading: true
      }
   
    default:
      return state
  }
}