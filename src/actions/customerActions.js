import {
  FETCH_CUSTOMERS_PARTICULAR_INIT,
  //FETCH_CUSTOMERS_ENTERPRISE_INIT,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  SAVE_CUSTOMER_INIT,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_INIT,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_STATE_CUSTOMER,
  RESET_STATE_CUSTOMER_EDITED

} from './types'

import {
  getCustomers,
  UpdateCustomer
} from '../services/Api'

// Actions Creations

export function resetStateCustomerEdited(){
  return {
    type: RESET_STATE_CUSTOMER_EDITED
  }
}

export function fetchCustomersSuccess(customers){
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
  }
}

export function fetchCustomersFailure(error){
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error
  }
}

export function saveCustomerSuccess(){
  return {
    type: SAVE_CUSTOMER_SUCCESS
  }
}

export function saveCustomerFailure(error){
  return {
    type: SAVE_CUSTOMER_FAILURE,
    payload: error
  }
}

export function updateCustomerSuccess(){
  return {
    type: UPDATE_CUSTOMER_SUCCESS
  }
}

export function updateCustomerFailure(error){
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error
  }
}

export function fetchCustomersParticular(particular){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_CUSTOMERS_PARTICULAR_INIT
      }
    })

    try {
      const data = await getCustomers(particular)
      const newState = [...data]
        .map(function (customer){
          return ({
            id:customer._id,
            entry_date:customer.entry_date,
            contact:customer.contact,
            email: customer.email,
            city:customer.city,
            contact_id: customer.contact_id,
            phone: customer.phone,
            expand: [{
              id:customer._id,
              notes: customer.notes,
              address:customer.address
            }]                    
          })
        })
      return dispatch(fetchCustomersSuccess(newState))
    } catch (error){
      return dispatch(saveCustomerFailure(error))
    }
  }
}

export function updateCustomer(id,customer){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_CUSTOMER_INIT
      }
    })
    
    try {
      await UpdateCustomer(id,customer)
      return dispatch(updateCustomerSuccess())
    } catch (error){
      return dispatch(saveCustomerFailure(error))
    }
  }
}

export function updateStateCustomer (id,customer) {
  return {
    type: UPDATE_STATE_CUSTOMER,
    payload: id,customer
  };
}

export function saveCustomer(customer){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_CUSTOMER_INIT
      }
    })

    try {
      await UpdateCustomer(customer)
      return dispatch(saveCustomerSuccess())
    } catch (error){
      return dispatch(saveCustomerFailure(error))
    }
  }
}