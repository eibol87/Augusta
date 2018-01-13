import React, { Component } from 'react';
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class DeliveryNotes extends Component {
	
  dateFormatter(cell, row) {

		cell =new Date(cell)
		return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
	
  }
	
  render(){

    return( 
      
      <BootstrapTable 
       	className="BootstrapTable-style" 
       	striped hover condensed 
       	data={ this.props.data } 
       	options={{defaultSortName:'entry_date', defaultSortOrder: 'asc' }} 
       	trClassName={this.rowClassNameFormat}>
	      <TableHeaderColumn dataField='id' dataSort filter={ { type: 'TextFilter', delay: 100 } }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_name' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	      <TableHeaderColumn dataField='entry_date' dataFormat={ this.dateFormatter } isKey dataSort filter={ { type: 'DateFilter', delay: 100 } }>Fecha entrada'</TableHeaderColumn>
	      <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Número de articulos</TableHeaderColumn>
	    </BootstrapTable>
		
    )
  }
}

export default PanelContainer(DeliveryNotes)