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
     const data = await api.pricesList.getAll()
      const newState = [...data]
        .map(function (priceList){
            const sum = (priceList.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
            const avg= (sum/priceList.assign_prices.length).toFixed(2)
            return ({
              id:priceList._id,
              type:priceList.type,
              leather: priceList.leather,
              base_price:priceList.base_price,
              prices_per_customer:avg
            })
          })
      return dispatch(fetchPricesListSuccess(newState))
    } catch (error){
      return dispatch(fetchPricesListFailure(error))
    }
  }
}