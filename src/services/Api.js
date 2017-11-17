import axios from 'axios'

const token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMGFlMTkxNmM2OGY5OWU1YTI5ZjgxNCIsImlhdCI6MTUxMDY2MjU1Mn0.XQmqdFRadVan5O474bPQZnbAIh6dpHMeGzjJq1L-O-I'


export function getCustomers (){
   const url= `http://localhost:3000/customers`
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
   const url= `http://localhost:3000/customer/${id}`
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
   const url= `http://localhost:3000/pricesList`
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
   const url= `http://localhost:3000/${filter}`
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
  console.log(state)
  const paramsState= (state) ? `?state=${state}` :''
   const url= `http://localhost:3000/articles${paramsState}`
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


