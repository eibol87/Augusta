import axios from 'axios'
import { setSessionStorage } from './LocalStorage.js'
const {REACT_APP_API_SERVER} = process.env
export function checkLogin(email,password){
  const body ={username: email, password:password}
  return axios.post(`${REACT_APP_API_SERVER}login`,body)
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


