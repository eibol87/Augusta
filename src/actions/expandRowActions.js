import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  RESET_STATE_EXPAND_EDITED,
  UPDATE_CUSTOMER_EXPAND_INIT,
  UPDATE_CUSTOMER_EXPAND_SUCCESS,
  UPDATE_CUSTOMER_EXPAND_FAILURE
} from './types'

import api from '../services/Api'

export function loadExpandRow () {
  return {
    type: LOAD_STATE_EXPAND
  };
}

export function updateStateExpand (id,customer) {
  return {
    type: UPDATE_STATE_EXPAND,
    payload: id,customer
  };
}

export function resetStateExpandEdited () {
  return {
    type: RESET_STATE_EXPAND_EDITED
  };
}

export function updateCustomerExpandFailure(error){
  console.log("updateCustomerExpandFailure: ", error)
  return {
    type: UPDATE_CUSTOMER_EXPAND_FAILURE,
    payload: error
  }
}

export function updateCustomerExpandSuccess(){
  return {
    type: UPDATE_CUSTOMER_EXPAND_SUCCESS
  }
}


export function updateExpandCustomer(id,customer){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_CUSTOMER_EXPAND_INIT
      }
    })
    
    try {
      console.log("id: ",id, "customer: ", customer)
      await api.customers.update(id,customer)
      return dispatch(updateCustomerExpandSuccess())
    } catch (error){
      return dispatch(updateCustomerExpandFailure(error))
    }
  }
}
