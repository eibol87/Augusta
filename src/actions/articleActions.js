import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  UPDATE_SELECT_ROW,
  UPDATE_ARTICLES_INIT,
  UPDATE_ARTICLES_SUCCESS,
  UPDATE_ARTICLES_FAILURE
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

export function updateSelectRow(row){
  return {
    type: UPDATE_SELECT_ROW,
    payload: row
  }
}

export function updateArticlesFailure(error){
  return {
    type: UPDATE_ARTICLES_FAILURE,
    payload: error
  }
}

export function updateArticlesSuccess(){
  return {
    type: UPDATE_ARTICLES_SUCCESS
  }
}

export function updateState(id,customer){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_ARTICLES_INIT
      }
    })
    
    try {
      const result = await api.articles.updateState(id,customer)
      console.log("result", result)
      return dispatch(updateArticlesSuccess())
    } catch (error){
      return dispatch(updateArticlesFailure(error))
    }
  }
}

export function fetchAllArticles(){
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

export function fetchArticles(type){
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_ARTICLES_INIT
      }
    })

    try {
     const data = await api.articles.getAll(type)
      const newState = [...data]
        .map(function (article){   
          return ({
            id:article._id,
            final_customer_code:article.final_customer_code,
            barcode:article.barcode,
            type:article.type,
            leather:article.leather,
            color:article.color,
            state:article.state,
            price:article.price,
            complements:[...article.complements],
            customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
            customer_fiscal_name:article.customer_id.fiscal_name,
            output_date:Moment(article.output_date).format('L'),  
            entry_date:Moment(article.entry_date).format('L')
          })
        })
      return dispatch(fetchArticlesSuccess(newState))
    } catch (error){
      return dispatch(fetchArticlesFailure(error))
    }
  }
}


