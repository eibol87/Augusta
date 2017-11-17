import React, { Component } from 'react';
import {getCustomers} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fiscal_name' isKey={ true }>fiscal_name</TableHeaderColumn>
          <TableHeaderColumn dataField='fiscal_address'>fiscal_address</TableHeaderColumn>
          <TableHeaderColumn dataField='fiscal_city'>fiscal_city</TableHeaderColumn>
          <TableHeaderColumn dataField='fiscal_id'>fiscal_id</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}
class Customers extends Component {
	constructor(){
		super()
		this.state={
			customers:[{
        id:'',
        entry_date:'',
        contact:'',
        address:'',
        email: '',
        city:'',
        contact_id: '',
        type: '',
        phone: '',
        inactive: '',
        notes: '',
        delivery_type: '',
        delivery_days: [],
        expand:[{
          fiscal_name:'',
          fiscal_address: '',
          fiscal_city: '',
          fiscal_id: ''
        }]
      }]
			}
		}

	 componentDidMount(){
		getCustomers()
		.then(response =>
			this.setState({
          customers: [...response]
          .map(function (customer){
            return ({
              id:customer._id,
              entry_date:customer.entry_date,
              contact:customer.contact,
              address:customer.address,
              email: customer.email,
              city:customer.city,
              contact_id: customer.contact_id,
              type: customer.type,
              phone: customer.phone,
              inactive: customer.inactive,
              notes: customer.notes,
              delivery_type: customer.delivery_type,
              delivery_days: [...customer.delivery_days],
              expand: [{
                  fiscal_name: customer.fiscal_name,
                  fiscal_address: customer.fiscal_address,
                  fiscal_city: customer.fiscal_city,
                  fiscal_id: customer.fiscal_id
              }]
                      
            })
          })
        })
		)
	}
	
	rowClassNameFormat(row, rowIdx) {
  // row is whole row object
  // rowIdx is index of row
  return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : '';
}
  isExpandableRow(row) {
    if (row.type === 'Particular') return false;
    return true;
    
  }
  expandComponent(row) {
    return (
      <BSTable data={ row.expand } />
    );
  }
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );
  }


  render(props){
    return(
     <BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.customers } 
     	options={{defaultSortName:'contact', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
      autoCollapse={ { sort: true, search: true, filter: true } }
      expandColumnOptions={ {
          expandColumnVisible: true,
          expandColumnComponent: this.expandColumnComponent,
          columnWidth: 25
        } }>

     	<TableHeaderColumn dataField='type' isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
      <TableHeaderColumn dataField='contact' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Contacto</TableHeaderColumn>
      <TableHeaderColumn dataField='phone' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Teléfono</TableHeaderColumn>
      <TableHeaderColumn dataField='email' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Email</TableHeaderColumn>
      <TableHeaderColumn dataField='address' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Dirección</TableHeaderColumn>
      <TableHeaderColumn dataField='city' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Ciudad</TableHeaderColumn>
     </BootstrapTable>
		)
  }
}

export default PanelContainer(Customers)