import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as customerActions from '../../../actions/customerActions'
import CustomersEnterprise from './CustomersEnterprise'

import * as validateFields from '../../../utils/UtilsValidators'
import * as utilsTable from '../../../utils/UtilsTable'

const ENTERPRISE = 'empresa'

class CustomersEnterpriseContainer extends Component {
  
  componentWillMount(){

    this.fetchCustomers()

  }
  
  async fetchCustomers(){

    await this.props.customerActions.fetchCustomersEnterprise(ENTERPRISE)
  }

   componentWillReceiveProps(nextProps){

    //comprobamos si hay algun registros en el state.edited, una vez que entramos
    //lo reseteamos para asegurarnos que solo entra una vez se edita una celda
    if(nextProps.edited.length){
     
      const dataEdited=nextProps.edited[0]
      const cellName=nextProps.edited[0].cellName
      const data=this.props.customers

      this.updateCell(dataEdited,cellName,data)
      this.props.customerActions.resetStateCustomerEdited()

    }
   
  }

  onAfterSaveCell = ({ id }, cellName) =>{
  
    this.props.customerActions.updateStateCustomer({ id, cellName })

  }

   updateCell(dataEdited,cellName,data) {
   
    utilsTable.updateCell(dataEdited,cellName,data,this.props.customerActions.updateCustomer)

  }

  onAfterInsertRow = async (row) => {
    
    const result = await utilsTable.onAfterInsertRow(row,this.props.customerActions.createCustomer,ENTERPRISE)
    
    if(result === "CREATE_CUSTOMER_SUCCESS"){
      
      this.fetchCustomers()

    }
  }

  phoneStatusValidator(value, row) {
    
    return validateFields.phoneStatusValidator(value, row);

  }

  emailStatusValidator(value, row){

    return validateFields.emailStatusValidator(value, row)

  }

  fielRequireddStatusValidator(value, row){
    
    return validateFields.fielRequireddStatusValidator(value, row)
  }

  render(){
     
    return(
      <CustomersEnterprise
        data={this.props.customers} 
        onAfterSaveCell={this.onAfterSaveCell}
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
    loading: state.customerList.loading,
    edited: state.customerList.edited

  }

}

function mapDispatchToProps(dispatch){

  return {

    customerActions: bindActionCreators(customerActions,dispatch)

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomersEnterpriseContainer)
