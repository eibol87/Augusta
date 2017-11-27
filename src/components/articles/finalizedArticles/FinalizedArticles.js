import React, { Component } from 'react';
import {getArticles} from '../../../services/Api'
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Moment from 'moment'

class FinalizedArticles extends Component {
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  priceFormatter(cell, row) {
    return `${cell} <i class='glyphicon glyphicon-eur'></i>`;
  }
  render(){
    return(
      <BootstrapTable  
      className="BootstrapTable-style"
      striped hover condensed
      data={ this.props.data.articles } 
      options={{defaultSortName:'customer_contact', defaultSortOrder: 'asc' }}  
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='customer_contact' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Artículo</TableHeaderColumn>
        <TableHeaderColumn dataField='leather'dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
        <TableHeaderColumn dataField='color' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='entry_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Alta</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort dataFormat={ this.priceFormatter } filter={ { type: 'TextFilter', delay: 100 } }>Precio</TableHeaderColumn> 
        <TableHeaderColumn dataField='barcode' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Código de barras</TableHeaderColumn> 
      </BootstrapTable>
    )
  }
}

export default PanelContainer(FinalizedArticles)