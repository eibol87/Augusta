import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CustomersParticularExpand from './CustomersParticularExpand'
import MySearchField from '../../forms/MySearchField'

class CustomersParticular extends Component {

	rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : ''}
  isExpandableRow(row) {
    if ((row.count < 0)) return false;
    return true;}
  expandComponent = (row)=> {
    return (
      <CustomersParticularExpand data={ row.expand } updateCell={this.props.updateCell} />
    );}
  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? '(-)' : '(+)' );
    } else {
      content = ' ';
    }
    return (
      <div> { content } </div>
    );}
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
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.props.onAfterSaveCell}
    const options={
      defaultSortName:'contact',
      defaultSortOrder: 'asc',
      expandBy: 'column',
      insertText: 'Añadir cliente',
      searchPosition: 'right',  // right or left
      toolBar: this.createCustomToolBar,
      afterInsertRow: this.props.onAfterInsertRow,
      insertModalHeader: this.createCustomModalHeader,
      searchField: (props) => (<MySearchField { ...props }/>)
    }
    const expandColumnOptions={ 
      expandColumnVisible: true, 
      expandColumnComponent: this.expandColumnComponent,
      columnWidth: 25
    }
    return(
      <BootstrapTable 
        height='360'
        insertRow
        cellEdit={ cellEditProp }
       	className="BootstrapTable-style" 
       	hover condensed search
        data={ this.props.data.customer }
       	options={options} 
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        autoCollapse={ { sort: true, search: true, filter: true } }
        expandColumnOptions={expandColumnOptions }
        trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn dataField='id' hiddenOnInsert autoValue={ true } hidden={ true } isKey={ true } >id</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='contact' editable={ { validator: this.props.fielRequireddStatusValidator }} tdStyle={tdStyle} dataSort >Contacto</TableHeaderColumn>
        <TableHeaderColumn width='90' dataField='phone'  editable={ { validator: this.props.phoneStatusValidator } } tdStyle={tdStyle} dataSort >Teléfono</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='email' editable={ { validator: this.props.emailStatusValidator }} tdStyle={tdStyle} dataSort >Email</TableHeaderColumn>
        <TableHeaderColumn width='100' dataField='city' tdStyle={tdStyle} dataSort >Ciudad</TableHeaderColumn>
        <TableHeaderColumn hidden={ true } dataField='notes' >Notas</TableHeaderColumn>
        <TableHeaderColumn hidden={ true } dataField='address' >Dirección</TableHeaderColumn>
      </BootstrapTable>
		)
  }
}

export default PanelContainer(CustomersParticular)