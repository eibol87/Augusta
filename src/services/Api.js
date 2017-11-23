import axios from 'axios'
import {getSessionStorage} from './LocalStorage'
import toastr from 'toastr'
const {REACT_APP_API_SERVER} = process.env
const token = `Bearer ${getSessionStorage()}`


export function createCustomer (customer){
   const url= `${REACT_APP_API_SERVER}customer`
    return axios.post(url,customer,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.status)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}

export function getCustomers (customer){
   const paramsCustomer= (customer) ? `?customer=${customer}` :''
   const url= `${REACT_APP_API_SERVER}customers/${paramsCustomer}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getCustomersPayments (){
   const url= `${REACT_APP_API_SERVER}customers/payments`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function getPricesList (){
   const url= `${REACT_APP_API_SERVER}pricesList`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });}

export function getDeliveryNotes (){
   const url= `${REACT_APP_API_SERVER}deliveryNotes`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });}
export function getArticles (state){
  const paramsState= (state) ? `?state=${state}` :''
   const url= `${REACT_APP_API_SERVER}articles/${paramsState}`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
        // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')
    });
}
export function UpdateCustomer (id,body){
   const url= `${REACT_APP_API_SERVER}customer/${id}`
    return axios.put(url,
      body,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
      // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')

    });
}
export function UpdatePriceToPriceList (id,price){
  const url= `${REACT_APP_API_SERVER}pricesList/${id}`
    return axios.put(url,
      price,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
      // Display an error toast, with a title
      toastr.error('Problema al comunicarse con el servidor')

    });
}


