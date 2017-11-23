import React, { Component } from 'react';
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class PricesList extends Component {
	
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
  createCustomModalHeader(onClose, onSave) {
    const headerStyle = {
      fontWeight: 'bold',
      fontSize: 'large',
      textAlign: 'center',
      backgroundColor: '#eeeeee'
    };
    return (
      <div className='modal-header' style={ headerStyle }>
        <h3>Añadir nuevo cliente particular</h3>
      </div>
    );
  }
	
  render(){
    const options={
      defaultSortName:'contact',
      defaultSortOrder: 'asc',
      expandBy: 'column',
      insertText: 'Añadir cliente',
      searchPosition: 'right',  // right or left
      toolBar: this.createCustomToolBar,
      afterInsertRow: this.props.onAfterInsertRow,
      insertModalHeader: this.createCustomModalHeader
    }
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.props.onAfterSaveCell}
    return(
    	<BootstrapTable
      cellEdit={ cellEditProp } 
     	className="BootstrapTable-style" 
     	striped hover condensed search insertRow
     	data={ this.props.data.pricesList } 
     	options={{defaultSortName:'type', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	     	<TableHeaderColumn dataField='id' hiddenOnInsert autoValue={ true } hidden={ true } isKey={ true } >id</TableHeaderColumn>
        <TableHeaderColumn dataField='type' editable={ false } dataSort >Tipo</TableHeaderColumn>
	      <TableHeaderColumn dataField='leather' editable={ false } dataSort >Categoría</TableHeaderColumn>
	      <TableHeaderColumn dataField='base_price' editable={ { validator: this.props.basePriceStatusValidator } } dataFormat={ this.priceFormatter } dataSort>Precio Base</TableHeaderColumn>
	      <TableHeaderColumn dataField='prices_per_customer' editable={ false } dataFormat={ this.priceFormatter } dataSort>Precio Medio</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

export default PanelContainer(PricesList)