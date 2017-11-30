import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class AddArticles extends Component {
  render(){
    const options ={
      defaultSortName:'type',
      defaultSortOrder: 'asc',
      expandBy: 'column',
      toolBar: this.createCustomToolBar
    }
    return (
      <BootstrapTable 
        className="BootstrapTable-style" 
        striped hover condensed insertRow
        data={ this.props.articles } 
        options={{defaultSortName:'entry_date', defaultSortOrder: 'asc' }} 
        >
        <TableHeaderColumn dataField='id' isKey autoValue={ true } hidden={ true }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_id'>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='final_customer_code'>Código Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='type'>Tipo</TableHeaderColumn>
        <TableHeaderColumn dataField='leather'>Categoría</TableHeaderColumn>
        <TableHeaderColumn dataField='color'>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='complements'>Complementos</TableHeaderColumn>
        <TableHeaderColumn dataField='barcode'>Código barras</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Precio</TableHeaderColumn>
      </BootstrapTable>
      )
  }

}

export default PanelContainer(AddArticles)