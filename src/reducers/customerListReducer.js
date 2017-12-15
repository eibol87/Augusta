import {
  FETCH_CUSTOMERS_PARTICULAR_INIT,
  FETCH_CUSTOMERS_ENTERPRISE_INIT,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CREATE_CUSTOMER_INIT,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_INIT,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_STATE_CUSTOMER,
  RESET_STATE_CUSTOMER_EDITED
} from '../actions/types'

import initialState from './initialState'

export default function customerListReduce(state = initialState.customerList, action){
  
  switch (action.type) {
  
    case FETCH_CUSTOMERS_PARTICULAR_INIT:
  
      return {
  
        ...state,
        loading: true
  
      }
  
    case FETCH_CUSTOMERS_ENTERPRISE_INIT:
  
      return {
  
        ...state,
        loading: true
  
      }
  
    case FETCH_CUSTOMERS_FAILURE:
  
      return {
  
        ...state,
        customers: [],
        error: action.payload,
        loading: false

      }
  
    case FETCH_CUSTOMERS_SUCCESS:
  
      return {
  
        ...state,
        customer: action.payload,
        error: null,
        loading: false
  
      }
  
    case CREATE_CUSTOMER_INIT:
  
      return{
  
        ...state,
        loading:true
  
      } 
  
    case CREATE_CUSTOMER_FAILURE:
  
      return{
     
        ...state,
        error: action.payload,
        loading: false
  
      }
  
    case CREATE_CUSTOMER_SUCCESS:
    
      return{
    
        ...state,
        customer: [...state.customer,action.payload],
        error:null,
        loading: true
    
      }
    
    case UPDATE_CUSTOMER_INIT:
    
      return{
    
        ...state,
        loading:true
    
      }
   
    case UPDATE_CUSTOMER_FAILURE:
   
      return{
   
        ...state,
        error: action.payload,
        loading: false
   
      }
   
    case UPDATE_CUSTOMER_SUCCESS:
   
      return{
   
        ...state,
        customer: [...state.customer],
        error:null,
        loading: true
   
      }
   
    case UPDATE_STATE_CUSTOMER:
   
      return {
   
        ...state,
        edited: [...state.edited,action.payload]
   
      }
   
    case RESET_STATE_CUSTOMER_EDITED:
   
      return {
   
        ...state,
        edited: []
   
      }
   
    default:
   
      return state
  
  }
}