import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAILURE
} from '.types'


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

export function fetchArticleSuccess(article){
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: article
  }
}

export function fetchArticleFailure(error){
  return {
    type: FETCH_ARTICLE_FAILURE,
    payload: error
  }
}

export function saveArticleSuccess(){
  return {
    type: SAVE_ARTICLE_SUCCESS
  }
}

export function saveArticleFailure(error){
  return {
    type: SAVE_ARTICLE_FAILURE,
    payload: error
  }
}