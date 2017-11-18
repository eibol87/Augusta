import React, { Component } from 'react';
import {getCustomers} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
let count = 0
class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fiscal_address'>Dirección fiscal</TableHeaderColumn>
          <TableHeaderColumn dataField='fiscal_city'>Ciudad fiscal</TableHeaderColumn>
          <TableHeaderColumn dataField='fiscal_id'>NIE</TableHeaderColumn>
          <TableHeaderColumn dataField='delivery_type'>Reparto</TableHeaderColumn>
          <TableHeaderColumn dataField='delivery_days'>Dias Reparto</TableHeaderColumn>
          <TableHeaderColumn dataField='notes' isKey={ true }>Notas</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}
class CustomersEnterprise extends Component {
	constructor(){
		super()
		this.state={
			customer:[{
        count:0,
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
          fiscal_address: '',
          fiscal_city: '',
          fiscal_id: '',
          delivery_type: '',
           delivery_days: []
        }]
      }]
			}
		}
  
	componentDidMount(){
    getCustomers('empresa')
    .then(response =>
    this.setState({
          customer: [...response]
          .map(function (customer){
            return ({
              count: count++,
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
                fiscal_address: customer.fiscal_address,
                fiscal_city: customer.fiscal_city,
                fiscal_id: customer.fiscal_id,
                delivery_type: customer.delivery_type,
                delivery_days: [...customer.delivery_days]
              }]
                      
            })
          })
        })
    )	}
   
	rowClassNameFormat(row, rowIdx) {

    return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : '';}
  isExpandableRow(row) {
    if ((row.count < 0)) return false;
    return true;}
  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );}
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );}
  
  render(props){
   
    return(
     <BootstrapTable 
     	className="BootstrapTable-style" 
     	hover condensed height='300' 
      data={ this.state.customer } 
     	options={{defaultSortName:'fiscal_name', defaultSortOrder: 'asc',  expandBy: 'column' }} 
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
      autoCollapse={ { sort: true, search: true, filter: true } }
      expandColumnOptions={ {
          expandColumnVisible: true,
          expandColumnComponent: this.expandColumnComponent,
          columnWidth: 25}}
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='count' hidden={ true } isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
       	<TableHeaderColumn dataField='fiscal_name' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Empresa</TableHeaderColumn>
        <TableHeaderColumn dataField='contact' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Contacto</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Teléfono</TableHeaderColumn>
        <TableHeaderColumn dataField='email' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='city' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Ciudad</TableHeaderColumn>
        <TableHeaderColumn dataField='address' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Dirección</TableHeaderColumn>
        
     </BootstrapTable>

		)
  }
}
export default PanelContainer(CustomersEnterprise)