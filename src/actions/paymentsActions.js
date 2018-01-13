import {
  FETCH_PAYMENTS_INIT,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE
} from './types'

import api from '../services/Api'

import Moment from 'moment'


export function fetchPaymentsSuccess(payments){
  return {
    type: FETCH_PAYMENTS_SUCCESS,
    payload: payments
  }
}

export function fetchPaymentsFailure(error){
  return {
    type: FETCH_PAYMENTS_FAILURE,
    payload: error
  }
}

export function fetchPayments(){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PAYMENTS_INIT
      }
    })

    try {
     const data = await api.payments.getAll()
      const newState = [...data]
        .map(function (customer){
            return ({
              plusInvoces:customer.plusAllInvoces,
              client:customer.client,
              plusAllPayments:customer.plusAllPayments,
              debt:customer.plusAllInvoces-customer.plusAllPayments
            })
          })
      return dispatch(fetchPaymentsSuccess(newState))
    } catch (error){
      return dispatch(fetchPaymentsFailure(error))
    }
  }
}

