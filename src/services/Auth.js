import axios from 'axios'
import { setSessionStorage } from './LocalStorage.js'

export function checkLogin(email,password){
  const herokuUrl='https://api-augusta.herokuapp.com/login'
  const url= `http://localhost:3000/login`
  const body ={username: email, password:password}
  return axios.post(url,body)
    .then(function(response){
      if(response === undefined){
        return false
      }else if(response.status === 200){
        setSessionStorage(response.data.token)
        return true
      }
     })
    .catch(function (error) {
      console.log(error);
    });
}


