import axios from 'axios'
import {getSessionStorage} from './LocalStorage'
import toastr from 'toastr'

const {REACT_APP_API_SERVER} = process.env


export function getCustomers (customer){
  const token = `Bearer ${getSessionStorage()}`
   const paramsCustomer= (customer) ? `?customer=${customer}` :''
   const url= `${REACT_APP_API_SERVER}customers/${paramsCustomer}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getCustomersPayments (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}customers/payments`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getPricesList (type,leather){
  let query = '' 
  if(type && leather){ 
    query = `?type=${type.label}&leather=${leather.label}`
  }
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}pricesList${query}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
});}
export function getListArticleType (type){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}listArticlesType/${type}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
});}


export function createArticle (article){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}articles`
    return axios.post(url,article,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.status)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function UpdateStateArticle (id,state){
  const token = `Bearer ${getSessionStorage()}`
  const url= `${REACT_APP_API_SERVER}article/${id}`
    return axios.put(url,
      {state:state},{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')

    });
}

export function getColors (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}colors`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getComplements (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}complements`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getArticles (state){
   const token = `Bearer ${getSessionStorage()}`
  const paramsState= (state) ? `?state=${state}` :''
   const url= `${REACT_APP_API_SERVER}articles/${paramsState}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}


const API = {

  customers: {
    async getAll (type) {
      const params= (type) ? `?customer=${type}` :''
      const response = await axios(`${REACT_APP_API_SERVER}customers/${params}`, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    },

    async update (id,body) {
      const response = await axios.put(`${REACT_APP_API_SERVER}customer/${id}`,body, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
     
      return response.data
    },

    async new (customer) {
      const response = await axios.post(`${REACT_APP_API_SERVER}customer`,customer, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    }
   },

  pricesList:{
    async getAll (type,leather) {
      let query = ''
      if(type && leather){ 
        query = `?type=${type.label}&leather=${leather.label}`
      }
      const response = await axios(`${REACT_APP_API_SERVER}pricesList${query}`, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    },
    async update (id,price) {
      const response = await axios.put(`${REACT_APP_API_SERVER}pricesList/${id}`,price, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
     
      return response.data
    },
    async new (article) {
      const response = await axios.post(`${REACT_APP_API_SERVER}pricesList`,article, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    }
   },
   articles:{
    async getAll (state) {
      const paramsState= (state) ? `?state=${state}` :''
      const response = await axios(`${REACT_APP_API_SERVER}articles/${paramsState}`, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    }
   },
   deliveryNotes:{
    async getAll() {
      const response = await axios(`${REACT_APP_API_SERVER}deliveryNotes`, {
        headers: {
          Authorization: `Bearer ${getSessionStorage()}`
        }
      })
      return response.data
    }
   }
  }

  
export default API
