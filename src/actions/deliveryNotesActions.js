import {
  FETCH_DELIVERYNOTES_INIT,
  FETCH_DELIVERYNOTES_SUCCESS,
  FETCH_DELIVERYNOTES_FAILURE
} from './types'

import api from '../services/Api'

import Moment from 'moment'


export function fetchDeliveryNotesSuccess(deliveryNotes){
  return {
    type: FETCH_DELIVERYNOTES_SUCCESS,
    payload: deliveryNotes
  }
}

export function fetchDeliveryNotesFailure(error){
  return {
    type: FETCH_DELIVERYNOTES_FAILURE,
    payload: error
  }
}

export function fetchDeliveryNotes(){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_DELIVERYNOTES_INIT
      }
    })

    try {
     const data = await api.deliveryNotes.getAll()
      const newState = [...data]
        .map(function (deliveryNote){
            return ({
              _id:deliveryNote._id,
              id:deliveryNote.id,
              entry_date:Moment(deliveryNote.entry_date).format('L'),
              customer_name:deliveryNote.customer_id.contact,
              numberOfArticles:[...deliveryNote.articles].length
            })
          })
      return dispatch(fetchDeliveryNotesSuccess(newState))
    } catch (error){
      return dispatch(fetchDeliveryNotesFailure(error))
    }
  }
}

