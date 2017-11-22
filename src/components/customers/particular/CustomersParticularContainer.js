import React, { Component } from 'react';
import {getCustomers,UpdateCustomer} from '../../../services/Api'
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
    }
  }
  componentDidMount(){
    getCustomers('particular')
    .then(response =>
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
    )}
  onAfterSaveCell = ({ id }, cellName) =>{
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
    })}

   updateCell = async () => {
    const body = {};
    const dataEdited = this.state.edited[0]
    const {cellname} = dataEdited

    const findDataRowEdited = this.state.customer.filter(element => element.id === dataEdited.id )
    
    body[cellname] = findDataRowEdited[0][cellname]
    
    try {
      await UpdateCustomer(dataEdited.id,body)
      toastr.success( `${body[cellname]}`,'Se ha guardado:')
      this.state.edited=[]
    }
      catch(e) {
        toastr.error('No se ha podido guardar tu registro')
        this.state.edited=[]
        throw e
    }
  }
  
  render(){
    const hasEdited = this.state.edited.length
    if(hasEdited) this.updateCell() 
    return(
      <CustomersParticular
        data={this.state} 
        onAfterSaveCell={this.onAfterSaveCell}
        updateCell={this.updateCell}
      />
    )
  }
}
export default CustomersParticularContainer