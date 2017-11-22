import React, { Component } from 'react';
import PanelContainer from '../../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CustomersParticularExpand from './CustomersParticularExpand'

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
  render(){
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.props.onAfterSaveCell}
    const options={defaultSortName:'contact', defaultSortOrder: 'asc',  expandBy: 'column' }
    const expandColumnOptions={ expandColumnVisible: true, expandColumnComponent: this.expandColumnComponent,columnWidth: 25}
    
    return(
      <BootstrapTable 
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
        <TableHeaderColumn dataField='id' hidden={ true } isKey={ true } >id</TableHeaderColumn>
        <TableHeaderColumn dataField='contact' tdStyle={tdStyle} dataSort >Contacto</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' tdStyle={tdStyle} dataSort >Teléfono</TableHeaderColumn>
        <TableHeaderColumn dataField='email' tdStyle={tdStyle} dataSort >Email</TableHeaderColumn>
        <TableHeaderColumn dataField='city' tdStyle={tdStyle} dataSort >Ciudad</TableHeaderColumn>
      </BootstrapTable>
		)
  }
}
export default PanelContainer(CustomersParticular)