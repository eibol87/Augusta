import React, { Component } from 'react';
import {getArticles} from '../../../services/Api'
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'

class Articles extends Component {
	
	dateFormatter(cell, row) {
		cell =new Date(cell)
		return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
	}
	enumFormatter(cell, row, enumObject) {
		return enumObject[cell];
	}
	
  render(){
  	  return(
    	<BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed 
     	data={ this.props.data.articles } 
     	options={{defaultSortName:'entry_date', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	    <TableHeaderColumn dataField='customer_contact' isKey dataSort>Cliente</TableHeaderColumn>
	    <TableHeaderColumn dataField='type' dataSort>Artículo</TableHeaderColumn>
	    <TableHeaderColumn dataField='leather'dataSort>Tipo</TableHeaderColumn>
	    <TableHeaderColumn dataField='color' dataSort>Color</TableHeaderColumn>
    	<TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
     	<TableHeaderColumn dataField='state' dataSort filterFormatted dataFormat={ this.enumFormatter } formatExtraData={ this.props.data.states } filter={ { type: 'SelectFilter', options: this.props.data.states } }>Estado</TableHeaderColumn>
      <TableHeaderColumn dataField='barcode' dataSort>Código de barras</TableHeaderColumn> 
      </BootstrapTable>
	    )
  }
}

export default PanelContainer(Articles)