import React, { Component } from 'react';
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class PricesList extends Component {
	
	priceFormatter(cell, row) {
	  return `${cell} <i class='glyphicon glyphicon-eur'></i>`;
	}
	
  render(){
    return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed 
     	data={ this.props.data.pricesList } 
     	options={{defaultSortName:'type', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	     	<TableHeaderColumn dataField='type' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
	      <TableHeaderColumn dataField='leather' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Categoría</TableHeaderColumn>
	      <TableHeaderColumn dataField='base_price' dataFormat={ this.priceFormatter } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Precio Base</TableHeaderColumn>
	      <TableHeaderColumn dataField='prices_per_customer' dataFormat={ this.priceFormatter } dataSort filter={ { type: 'TextFilter', delay: 100 } }>Precio Medio</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

export default PanelContainer(PricesList)