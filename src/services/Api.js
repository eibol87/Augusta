import axios from 'axios'
import {getSessionStorage} from './LocalStorage'


const urlLocal ='http://localhost:3000/'
const herokuUrl='https://api-augusta.herokuapp.com/'

export function getCustomers (){
  const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}customers`
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
export function getCustomerById (id){
   const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}customer/${id}`
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
    });
}

export function getOrders (filter='orders'){
   const token = `Bearer ${getSessionStorage()}`
   const url= `${urlLocal}${filter}`
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
export function getArticles (state){
  const token = `Bearer ${getSessionStorage()}`
  const paramsState= (state) ? `?state=${state}` :''
   const url= `${urlLocal}articles${paramsState}`
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


