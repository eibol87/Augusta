import axios from 'axios'

const token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMGFlMTkxNmM2OGY5OWU1YTI5ZjgxNCIsImlhdCI6MTUxMDY2MjU1Mn0.XQmqdFRadVan5O474bPQZnbAIh6dpHMeGzjJq1L-O-I'


export function getCustomers (){
   const url= `http://localhost:3004/customers`
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
export function getArticles (){
   const url= `http://localhost:3004/articles`
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
   const url= `http://localhost:3004/${filter}`
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

