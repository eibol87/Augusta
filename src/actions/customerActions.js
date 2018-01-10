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

} from './types'

import api from '../services/Api'

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
    type: CREATE_CUSTOMER_SUCCESS
  }
}

export function createCustomerFailure(error){
  return {
    type: CREATE_CUSTOMER_FAILURE,
    payload: error
  }
}

export function createCustomerSuccess(){
  return {
    type: CREATE_CUSTOMER_SUCCESS
  }
}

export function updateCustomerFailure(error){
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error
  }
}

export function updateCustomerSuccess(){
  return {
    type: UPDATE_CUSTOMER_SUCCESS
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
     const data = await api.customers.getAll(particular)
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
      return dispatch(fetchCustomersFailure(error))
    }
  }
}

export function fetchCustomersEnterprise(enterprise){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_CUSTOMERS_ENTERPRISE_INIT
      }
    })

    try {
     const data = await api.customers.getAll(enterprise)
      const newState = [...data]
        .map(function (customer){
            return ({
              id:customer._id,
              entry_date:customer.entry_date,
              contact:customer.contact,
              address:customer.address,
              email: customer.email,
              city:customer.city,
              phone: customer.phone,
              notes: customer.notes,
              fiscal_name: customer.fiscal_name,
              expand: [{
                id:customer._id,
                fiscal_address: customer.fiscal_address,
                fiscal_city: customer.fiscal_city,
                fiscal_id: customer.fiscal_id,
                delivery_type: customer.delivery_type,
                delivery_days: [...customer.delivery_days]
              }]
                      
            })
          })
      return dispatch(fetchCustomersSuccess(newState))
    } catch (error){
      return dispatch(fetchCustomersFailure(error))
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
      await api.customers.update(id,customer)
      return dispatch(updateCustomerSuccess())
    } catch (error){
      return dispatch(updateCustomerFailure(error))
    }
  }
}

export function updateStateCustomer (id,customer) {
  return {
    type: UPDATE_STATE_CUSTOMER,
    payload: id,customer
  };
}

export function createCustomer(customer){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: CREATE_CUSTOMER_INIT
      }
    })

    try {
      await api.customers.new(customer)
      return dispatch(createCustomerSuccess())
    } catch (error){
      return dispatch(createCustomerFailure(error))

    }
  }
}