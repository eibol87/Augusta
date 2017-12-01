import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import MySearchField from '../../forms/MySearchField'

class FinalizedArticles extends Component {
  
  dateFormatter(cell, row) {
    cell =new Date(cell)
    return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }
  priceFormatter(cell, row) {
    return `${cell} <i class='glyphicon glyphicon-eur'></i>`;
  }
  createCustomToolBar = props => {
    return (
      <div style={ { margin: '0px 0px 10px 0px' } }>
        { props.components.btnGroup }
        <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
          { props.components.searchPanel }
        </div>
      </div>
  )}
  render(){
    const options={
      defaultSortName:'output_date',
      defaultSortOrder: 'desc',
      toolBar: this.createCustomToolBar,
      searchField: (props) => (<MySearchField { ...props }/>)
    }
    return(
      <BootstrapTable
      className="BootstrapTable-style"
      striped hover condensed search
      data={ this.props.data.articles } 
      options={options} 
      trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='output_date' width='245'dataFormat={ this.dateFormatter } dataSort filter={ { type: 'DateFilter', delay: 100 } }>Fecha</TableHeaderColumn>
        <TableHeaderColumn dataField='customer_contact' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
        <TableHeaderColumn dataField='type' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Artículo</TableHeaderColumn>
        <TableHeaderColumn dataField='leather'dataSort filter={ { type: 'TextFilter', delay: 100 } }>Tipo</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort dataFormat={ this.priceFormatter } filter={ { type: 'TextFilter', delay: 100 } }>Precio</TableHeaderColumn> 
      </BootstrapTable>
    )
  }
}

export default PanelContainer(FinalizedArticles)