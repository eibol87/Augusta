import React, { Component } from 'react';
import {getCustomers,UpdateCustomer,createCustomer} from '../../../services/Api'
import CustomersEnterprise from './CustomersEnterprise'
import toastr from 'toastr'

class CustomersEnterpriseContainer extends Component {
  constructor(){
    super()
    this.state={
      customer:[{
        id:'',
        entry_date:'',
        contact:'',
        address:'',
        email: '',
        city:'',
        type: '',
        phone: '',
        notes: '',
        fiscal_name:'',
        expand:[{
          id:'',
          fiscal_address: '',
          fiscal_city: '',
          fiscal_id: '',
          delivery_type: '',
          delivery_days: []
        }]
      }],
      edited: []
      }}
  componentDidMount(){
   this.getCustomers()
  }
  async getCustomers(){
   const response = await getCustomers('empresa')
    if(response){
      this.setState({
        customer: [...response]
          .map(function (customer){
            return ({
              id:customer._id,
              entry_date:customer.entry_date,
              contact:customer.contact,
              address:customer.address,
              email: customer.email,
              city:customer.city,
              phone: customer.phone,
              notes: customer.notes,
              fiscal_name: customer.fiscal_name,
              expand: [{
                 id:customer._id,
                fiscal_address: customer.fiscal_address,
                fiscal_city: customer.fiscal_city,
                fiscal_id: customer.fiscal_id,
                delivery_type: customer.delivery_type,
                delivery_days: [...customer.delivery_days]
              }]
                      
            })
          })
      })
    }}
  onAfterSaveCell = ({ id }, cellName) =>{
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
    })
  }

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
        this.state.edited=[]
        throw e
    }
  }
  onAfterInsertRow = async (row) => {
    delete row.id //delete id because if not needed pass to mongodb
    row.phone= Number(row.phone)
    row.type='empresa'
    const result = await createCustomer(row)
    if(result === 200) toastr.success(`Se ha añadido el cliente ${row.contact}`)
    this.getCustomers()
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
      <CustomersEnterprise
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
export default CustomersEnterpriseContainer