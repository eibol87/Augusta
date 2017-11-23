import React, { Component } from 'react';
import {getCustomers,UpdateCustomer,createCustomer} from '../../../services/Api'
import CustomersParticular from './CustomersParticular'
import toastr from 'toastr'

class CustomersParticularContainer extends Component {
  constructor(){
    super()
    this.state={
      customer:[{
        id:'',
        entry_date:'',
        contact:'',
        email: '',
        city:'',
        contact_id: '',
        phone: '',
        expand:[{
          id:'',
          address:'',
          notes: '',
        }]
      }],
      edited: []
    }}
  componentDidMount(){
   this.getCustomers()
  }
  async getCustomers(){
    const response = await getCustomers('particular')
      if(response){
        this.setState({
          customer: [...response]
          .map(function (customer){
            return ({
              id:customer._id,
              entry_date:customer.entry_date,
              contact:customer.contact,
              email: customer.email,
              city:customer.city,
              contact_id: customer.contact_id,
              phone: customer.phone,
              expand: [{
                id:customer._id,
                notes: customer.notes,
                address:customer.address
              }]                    
            })
          })
        })
      }   
    }
  onAfterSaveCell = ({ id }, cellName) =>{
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
    })}

  updateCell = async (dataEdited,cellName,data) => {
    const body = {};
    const findDataRowEdited = data.filter(element => element.id === dataEdited.id )
    
    body[cellName] = findDataRowEdited[0][cellName]
    
    try {
     const result = await UpdateCustomer(dataEdited.id,body)
      if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
      //clean state
      this.state.edited=[]
    }
      catch(e) {
        toastr.error('Error al resolver la promesa')
        this.state.edited=[]
        throw e
    }
  }
  onAfterInsertRow = async (row) => {
    delete row.id
    row.phone= Number(row.phone)
    row.type='particular'
    const result = await createCustomer(row)
    this.getCustomers()
     //if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
  }
  phoneStatusValidator(value, row) {
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
  emailStatusValidator(value, row){

    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.length === 0){
      return true; 
    }
    if(!(regex.test(value))){
      return response.notification.type = 'Formato incorrecto, ha de ser así mail@mail.com';
    }
    return true;}
  fielRequireddStatusValidator(value, row){
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
      response.isValid = false;
      response.notification.type = 'error';
      response.notification.msg = `Este campo no puede estar vacío`;
      response.notification.title = 'Campos requeridos*';
    }
     return response;

  }
  render(){
    const hasEdited = this.state.edited.length
    if(hasEdited) this.updateCell(this.state.edited[0],this.state.edited[0].cellName,this.state.customer) 
    return(
      <CustomersParticular
        data={this.state} 
        onAfterSaveCell={this.onAfterSaveCell}
        updateCell={this.updateCell}
        onAfterInsertRow={this.onAfterInsertRow}
        phoneStatusValidator={this.phoneStatusValidator}
        emailStatusValidator={this.emailStatusValidator}
        fielRequireddStatusValidator={this.fielRequireddStatusValidator}
      />
    )
  }
}
export default CustomersParticularContainer