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
export function checkLogin(email,password){
  const url= `http://localhost:3004/login`
  const body ={username: email, password:password}
  return axios.post(url,body)
    .then(function(response){
      if(response === undefined){
        return false
      }else if(response.status === 200){
        return true
      }
     })
    .catch(function (error) {
      console.log(error);
    });


}
// export function getYelpDataById (id){
//   const url= `https://yelp-api-proxy.herokuapp.com/businesses/${id}/reviews`
//     return axios.get(url,{
//         headers: {
//            Authorization: `${token}`
//         }
//     })
//     .then(response => response.data.reviews)
// }

