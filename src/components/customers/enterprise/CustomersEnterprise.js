import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CustomersEnterpriseExpand from './CustomersEnterpriseExpand'
import CustomersEnterpriseModal from './CustomersEnterpriseModal'
import MySearchField from '../../forms/MySearchField'

class CustomersEnterprise extends Component {
	 
   rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'BootstrapTable-tr-intermitate-color' : ''
  }
  isExpandableRow(row) {
    if ((row.count < 0)) return false;
    return true;}
  expandComponent = (row)=> {
    return (
      <CustomersEnterpriseExpand data={ row.expand } updateCell={this.props.updateCell} />
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
        <h3>Añadir nuevo cliente empresa</h3>
      </div>
    );
  }
  createCustomModalBody = (columns, validateState, ignoreEditable) => {
    return (
      <CustomersEnterpriseModal columns={ columns }
        validateState={ validateState }
        ignoreEditable={ ignoreEditable }/>
    );
  }
  render(props){
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.props.onAfterSaveCell}
    const options={
      //insertModalBody: this.createCustomModalBody,
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
    const expandColumnOptions={ expandColumnVisible: true, expandColumnComponent: this.expandColumnComponent,columnWidth: 25}
    const Dias = [ 'Lunes mañana', 'Lunes tarde', 'Martes mañana', 'Martes tarde','Miércoles mañana', 'Miérciles tarde','Jueves mañana', 'Jueves tarde','Viernes mañana', 'Viernes tarde' ];
    return(
      <BootstrapTable 
        cellEdit={ cellEditProp }
        height='360'
        insertRow
        className="BootstrapTable-style" 
        hover condensed search
        data={ this.props.data.customer }
        options={options} 
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        autoCollapse={ { sort: true, search: true, filter: true } }
        expandColumnOptions={expandColumnOptions }
        trClassName={this.rowClassNameFormat}>
        <TableHeaderColumn width='150' dataField='id' hiddenOnInsert autoValue={ true } hidden={ true } isKey={ true }>Cliente</TableHeaderColumn>
       	<TableHeaderColumn width='150' dataField='fiscal_name' editable={ { validator: this.props.fielRequireddStatusValidator }} tdStyle={tdStyle} dataSort>Empresa</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='contact' editable={ { validator: this.props.fielRequireddStatusValidator }} tdStyle={tdStyle} dataSort>Contacto</TableHeaderColumn>
        <TableHeaderColumn width='90'  dataField='phone' editable={ { validator: this.props.phoneStatusValidator } } tdStyle={tdStyle} dataSort>Teléfono</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='email' editable={ { validator: this.props.emailStatusValidator }} tdStyle={tdStyle} dataSort>Email</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='city' tdStyle={tdStyle} dataSort>Ciudad</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='address' tdStyle={tdStyle} dataSort >Dirección</TableHeaderColumn>
        <TableHeaderColumn width='150' hidden={ true } dataField='fiscal_address' tdStyle={tdStyle}>Dirección fiscal</TableHeaderColumn>
        <TableHeaderColumn width='150' hidden={ true } dataField='fiscal_city' tdStyle={tdStyle}>Ciudad fiscal</TableHeaderColumn>
        <TableHeaderColumn width='150' hidden={ true } dataField='fiscal_id' tdStyle={tdStyle}>NIE</TableHeaderColumn>
        <TableHeaderColumn width='150' editable={ { type: 'checkbox', options: { values: 'Sí:No' } } } hidden={ true } dataField='delivery_type' tdStyle={tdStyle}>Reparto</TableHeaderColumn>
        <TableHeaderColumn width='150' editable={ { type: 'select', options: { values: Dias } } } hidden={ true } dataField='delivery_days' tdStyle={tdStyle}>Dias Reparto</TableHeaderColumn>
        <TableHeaderColumn width='150' hidden={ true } dataField='notes' tdStyle={tdStyle}>Notas</TableHeaderColumn>
    
     </BootstrapTable>
		)}
}
export default PanelContainer(CustomersEnterprise)