import React, { Component } from 'react';
import {getCustomers,UpdateCustomer} from '../../../services/Api'
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
  async componentDidMount(){
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
        this.state.edited=[]
        throw e
    }}
  
  render(){
    const hasEdited = this.state.edited.length
    if(hasEdited) this.updateCell(this.state.edited[0],this.state.edited[0].cellName,this.state.customer) 
    return(
      <CustomersEnterprise
        data={this.state} 
        onAfterSaveCell={this.onAfterSaveCell}
        updateCell={this.updateCell}
      />
    )
  }
}
export default CustomersEnterpriseContainer