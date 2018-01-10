import {
 FETCH_PRICESLIST_INIT,
 FETCH_PRICESLIST_SUCCESS,
 FETCH_PRICESLIST_FAILURE

} from './types'

import api from '../services/Api'

export function fetchPricesListSuccess(pricesList){
  return {
    type: FETCH_PRICESLIST_SUCCESS,
    payload: pricesList
  }
}

export function fetchPricesListFailure(error){
  return {
    type: FETCH_PRICESLIST_FAILURE,
    payload: error
  }
}

export function fetchPricesList(){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRICESLIST_INIT
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