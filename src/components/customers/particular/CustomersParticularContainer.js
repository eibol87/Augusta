import React, { Component } from 'react';
import {getCustomers,UpdateCustomer,createCustomer} from '../../../services/Api'
import CustomersParticular from './CustomersParticular'
import toastr from 'toastr'
import * as customerActions from '../../../actions/customerActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CustomersParticularContainer extends Component {
  constructor(){
    super()
    this.state={
      edited: []
    }
  }
  
  async componentWillMount(){
    await this.props.customerActions.fetchCustomersParticular('particular')
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
    delete row.id //delete id because if not needed pass to mongodb
    row.phone= Number(row.phone)
    row.type='particular'
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
      <CustomersParticular
        data={this.props.customers} 
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

function mapStateToProps(state){
  return {
    customers: state.customerList.customer,
    loading: state.customerList.loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    customerActions: bindActionCreators(customerActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomersParticularContainer)