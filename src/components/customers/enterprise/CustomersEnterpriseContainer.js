import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as customerActions from '../../../actions/customerActions'
import CustomersEnterprise from './CustomersEnterprise'

import * as validateFields from '../../../utils/UtilsValidators'
import * as utilsTable from '../../../utils/UtilsTable'

const ENTERPRISE = 'empresa'

class CustomersEnterpriseContainer extends Component {
  
  async componentWillMount(){

    await this.props.customerActions.fetchCustomersEnterprise(ENTERPRISE)

  }

  onAfterSaveCell = ({ id }, cellName) =>{
  
    this.props.customerActions.updateStateCustomer({ id, cellName })

  }

   updateCell(dataEdited,cellName,data) {
   
    utilsTable.updateCell(dataEdited,cellName,data,this.props.customerActions.updateCustomer)

  }

   onAfterInsertRow = async (row) => {
    
    utilsTable.onAfterInsertRow(row,ENTERPRISE,this.props.customerActions.createCustomer)
    
    await this.props.customerActions.fetchCustomersParticular(ENTERPRISE)

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
     if(this.props.edited.length){
     
      const dataEdited=this.props.edited[0]
      const cellName=this.props.edited[0].cellName
      const data=this.props.customers

      this.updateCell(dataEdited,cellName,data)
      this.props.customerActions.resetStateCustomerEdited()

    }
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
