import axios from 'axios'
import {getSessionStorage} from './LocalStorage'


const urlLocal ='http://localhost:3000/'
const herokuUrl='https://api-augusta.herokuapp.com/'

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
    });
}


