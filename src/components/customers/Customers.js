import React, { Component } from 'react';
import {getCustomers} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Customers extends Component {
	constructor(){
		super()
		this.state={
			customers:[]
			}
		}
	
	componentDidMount(){
		getCustomers()
		.then(response =>
			this.setState(
			{
				customers:[...response] 
			})
		)
	}
	
	rowClassNameFormat(row, rowIdx) {
  // row is whole row object
  // rowIdx is index of row
  return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : '';
}

  render(props){
    return(
     <BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.customers } 
     	options={{defaultSortName:'contact', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>

     	<TableHeaderColumn dataField='type' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
      <TableHeaderColumn dataField='fiscal_name' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Empresa</TableHeaderColumn>
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