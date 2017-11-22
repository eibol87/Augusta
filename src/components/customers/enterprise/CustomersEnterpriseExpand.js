import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class CustomersEnterpriseExpand extends Component {
  constructor(){
    super()
      this.state={
        edited: []
      }
    }
  onAfterSaveCell = ({ id }, cellName) => {
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]})}
  render() {
    const hasEdited = this.state.edited.length
    if(hasEdited){
      const dataEdited=this.state.edited[0]
      const cellName=this.state.edited[0].cellName
      const data=this.props.data
      this.props.updateCell(dataEdited,cellName,data)
    }
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
     return (
      <BootstrapTable 
        hover condensed 
        cellEdit={ cellEditProp } 
        data={ this.props.data }>
        <TableHeaderColumn dataField='id' hidden={ false } isKey={ true }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='fiscal_address' tdStyle={tdStyle}>Dirección fiscal</TableHeaderColumn>
        <TableHeaderColumn dataField='fiscal_city' tdStyle={tdStyle}>Ciudad fiscal</TableHeaderColumn>
        <TableHeaderColumn dataField='fiscal_id' tdStyle={tdStyle}>NIE</TableHeaderColumn>
        <TableHeaderColumn dataField='delivery_type' tdStyle={tdStyle}>Reparto</TableHeaderColumn>
        <TableHeaderColumn dataField='delivery_days' tdStyle={tdStyle}>Dias Reparto</TableHeaderColumn>
        <TableHeaderColumn dataField='notes' tdStyle={tdStyle}>Notas</TableHeaderColumn>
    </BootstrapTable>);
  }}
export default CustomersEnterpriseExpand