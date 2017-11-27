import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class ArticlesExpand extends Component {
 
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  render() {
    return (
      <BootstrapTable 
        hover condensed 
        data={ this.props.data }>
        <TableHeaderColumn width='150' dataField='id' hidden={ true } isKey={ true }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='color' dataSort>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='barcode' dataSort>Código de barras</TableHeaderColumn> 
        <TableHeaderColumn dataField='output_date' width='245'dataFormat={ this.dateFormatter } dataSort>Salida</TableHeaderColumn>
        </BootstrapTable>);
  }}
export default ArticlesExpand