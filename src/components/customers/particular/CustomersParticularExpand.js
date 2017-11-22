import React, { Component } from 'react';
import toastr from 'toastr'
import {UpdateCustomer} from '../../../services/Api'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class CustomersParticularExpand extends Component {
  constructor(){
    super()
      this.state={
        edited: []
      }
    }

  onAfterSaveCell = ({ id }, cellName) => {
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
  })}
  updateCell = async () => {
    const body = {}
    const dataEdited =this.state.edited[0]
    const cellname = dataEdited.cellName
    const findDataRowEdited =this.props.data.filter(element => element.id === dataEdited.id )
    
    body[cellname] = findDataRowEdited[0][cellname]
    
    try {
      await UpdateCustomer(dataEdited.id,body)
      toastr.success( `${body[cellname]}`,'Se ha guardado:')
      this.state.edited=[]
    }
      catch(e) {
        toastr.error('No se ha podido guardar tu registro')
        this.state.edited=[]
        throw e
    }
  }
  render() {
    const hasEdited = this.state.edited.length
    if(hasEdited) this.updateCell()
      
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
    return (
      <BootstrapTable 
        hover condensed 
        cellEdit={ cellEditProp } 
        data={ this.props.data }>
        <TableHeaderColumn dataField='id' hidden={ true } isKey={ true } dataSort filter={ { type: 'TextFilter', delay: 100 } }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='address' tdStyle={tdStyle}>Dirección</TableHeaderColumn>
        <TableHeaderColumn dataField='notes'tdStyle={tdStyle}>Notas</TableHeaderColumn>
      </BootstrapTable>);
  }}
  export default CustomersParticularExpand