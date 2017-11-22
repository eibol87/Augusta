import axios from 'axios'
import {getSessionStorage} from './LocalStorage'
import toastr from 'toastr'


const urlLocal ='http://localhost:3000/'
const herokuUrl='https://api-augusta.herokuapp.com/'

export function createCustomer (customer){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}customer`
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
  const token = `Bearer ${getSessionStorage()}`
   const paramsCustomer= (customer) ? `?customer=${customer}` :''
   const url= `${urlLocal}customers/${paramsCustomer}`
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
  const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}customers/payments`
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
   const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}pricesList`
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
   const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}deliveryNotes`
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
  const token = `Bearer ${getSessionStorage()}`
  const paramsState= (state) ? `?state=${state}` :''
   const url= `${urlLocal}articles/${paramsState}`
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
  const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}customer/${id}`
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


