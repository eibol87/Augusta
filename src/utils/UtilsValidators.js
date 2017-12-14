export function phoneStatusValidator(value, row) {

  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  const nan = isNaN(parseInt(value, 10)) //isNumeric
    
  if (value.length === 0){
    
    return true; 
    
  }
    
  if (nan) {
    
    return  response.notification.type = 'Solo puedes introducir números';
    
  }
    
  if(value.length < 9){
    
    return response.notification.type = 'Un teléfono tiene mínimo 9 números';
    
  }
    
  return true;

}

export function emailStatusValidator(value, row){

  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  if (value.length === 0){
    
    return true; 
    
  }
    
  if(!(regex.test(value))){
    
    return response.notification.type = 'Formato incorrecto, ha de ser así mail@mail.com';
    
  }
    
  return true;
  
}

export function fielRequireddStatusValidator(value, row){
    
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    
  if (!value) {
    
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = `Este campo no puede estar vacío`;
    response.notification.title = 'Campos requeridos*';
    
  }
    
  return response;
}