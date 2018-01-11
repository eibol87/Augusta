import {
 FETCH_PRICESLIST_INIT,
 FETCH_PRICESLIST_SUCCESS,
 FETCH_PRICESLIST_FAILURE,
 UPDATE_PRICESLIST_INIT,
 UPDATE_PRICESLIST_SUCCESS,
 UPDATE_PRICESLIST_FAILURE,
 RESET_STATE_PRICESLIST_EDITED,
 UPDATE_STATE_PRICESLIST,
 CREATE_PRICESLIST_INIT,
 CREATE_PRICESLIST_SUCCESS,
 CREATE_PRICESLIST_FAILURE

} from './types'

import api from '../services/Api'

export function updateStatePricesList (id,price) {
  return {
    type: UPDATE_STATE_PRICESLIST,
    payload: id,price
  };
}

export function resetStatePricesListEdited(){
  return {
    type: RESET_STATE_PRICESLIST_EDITED
  }
}

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

export function updatePricesListFailure(error){
  return {
    type: UPDATE_PRICESLIST_FAILURE,
    payload: error
  }
}

export function updatePricesListSuccess(){
  return {
    type: UPDATE_PRICESLIST_SUCCESS
  }
}

export function savePricesListSuccess(){
  return {
    type: CREATE_PRICESLIST_SUCCESS
  }
}

export function createPricesListFailure(error){
  return {
    type: CREATE_PRICESLIST_FAILURE,
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

export function updatePricesList(id,price){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_PRICESLIST_INIT
      }
    })
    
    try {
      await api.pricesList.update(id,price)
      return dispatch(updatePricesListSuccess())
    } catch (error){
      return dispatch(updatePricesListFailure(error))
    }
  }
}

export function createPricesList(article){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: CREATE_PRICESLIST_INIT
      }
    })

    try {
      await api.pricesList.new(article)
      return dispatch(savePricesListSuccess())
    } catch (error){
      return dispatch(createPricesListFailure(error))

    }
  }
}
