export function setSessionStorage(token){
  sessionStorage.setItem('token', token);
}
export function getSessionStorage(){
  return sessionStorage.getItem('token');
}
export function removeSessionStorage(){
  return sessionStorage.removeItem('token');
}
