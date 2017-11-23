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
      this.state.edited = []
    }
    const Dias = [ 'Lunes mañana', 'Lunes tarde', 'Martes mañana', 'Martes tarde','Miércoles mañana', 'Miérciles tarde','Jueves mañana', 'Jueves tarde','Viernes mañana', 'Viernes tarde' ];
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
     return (
      <BootstrapTable 
        hover condensed 
        cellEdit={ cellEditProp } 
        data={ this.props.data }>
        <TableHeaderColumn width='150' dataField='id' hidden={ true } isKey={ true }>id</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='fiscal_address' tdStyle={tdStyle}>Dirección fiscal</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='fiscal_city' tdStyle={tdStyle}>Ciudad fiscal</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='fiscal_id' tdStyle={tdStyle}>NIE</TableHeaderColumn>
        <TableHeaderColumn editable={ { type: 'checkbox', options: { values: 'Sí:No' } } } width='150' dataField='delivery_type' tdStyle={tdStyle}>Reparto</TableHeaderColumn>
        <TableHeaderColumn editable={ { type: 'select', options: { values: Dias } } } width='150' dataField='delivery_days' tdStyle={tdStyle}>Dias Reparto</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='notes' tdStyle={tdStyle}>Notas</TableHeaderColumn>
    </BootstrapTable>);
  }}
export default CustomersEnterpriseExpand