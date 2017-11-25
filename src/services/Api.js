import axios from 'axios'
import {getSessionStorage} from './LocalStorage'
import toastr from 'toastr'
const {REACT_APP_API_SERVER} = process.env

export function createCustomer (customer){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}customer`
    return axios.post(url,customer,{
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
export function getPricesList (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}pricesList`
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

export function getDeliveryNotes (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}deliveryNotes`
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
export function UpdateCustomer (id,body){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${REACT_APP_API_SERVER}customer/${id}`
    return axios.put(url,
      body,{
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
export function UpdatePriceToPriceList (id,price){
  const token = `Bearer ${getSessionStorage()}`
  const url= `${REACT_APP_API_SERVER}pricesList/${id}`
    return axios.put(url,
      price,{
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


