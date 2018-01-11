import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from './types'

import api from '../services/Api'

import Moment from 'moment'
// Actions Creations

export function fetchArticlesSuccess(articles){
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  }
}

export function fetchArticlesFailure(error){
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  }
}

export function fetchArticles(){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_ARTICLES_INIT
      }
    })

    try {
     const data = await api.articles.getAll()
      const newState = [...data]
        .map(function (article){
            return ({
              id:article._id,
              final_customer_code:article.final_customer_code,
              type:article.type,
              leather:article.leather,
              state:article.state,
              price:article.price,
              complements:[...article.complements],
              customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
              customer_fiscal_name:article.customer_id.fiscal_name,
              entry_date:Moment(article.entry_date).format('L'),
              expand: [{
                id:article._id,
                barcode:article.barcode,
                color: article.color,
                output_date:Moment(article.output_date).format('L')
              }]
            
            })
          })
      return dispatch(fetchArticlesSuccess(newState))
    } catch (error){
      return dispatch(fetchArticlesFailure(error))
    }
  }
}

