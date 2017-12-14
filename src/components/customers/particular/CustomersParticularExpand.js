import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as expandRowActions from '../../../actions/expandRowActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CustomersParticularExpand extends Component {
  constructor(){
    super()
    }
  componentWillMount(){
    this.props.expandRowActions.loadExpandRow()
  }
  onAfterSaveCell = ({ id }, cellName) => {
    this.props.expandRowActions.updateStateExpand( { id, cellName })
  
  }

  render() {
    const hasEdited = this.props.edited.edited.length
    if(hasEdited){
      const dataEdited=this.props.edited.edited[0]
      const cellName=this.props.edited.edited[0].cellName
      const data=this.props.data

      this.props.updateCell(dataEdited,cellName,data)
      this.props.expandRowActions.initStateExpand()
     
    }
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
    return (
      <BootstrapTable 
        hover condensed 
        cellEdit={ cellEditProp } 
        data={ this.props.data }>
        <TableHeaderColumn width='150' dataField='id' hidden={ true } isKey={ true }>id</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='address' tdStyle={tdStyle}>Dirección</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='notes'tdStyle={tdStyle}>Notas</TableHeaderColumn>
      </BootstrapTable>);
  }}

function mapStateToProps(state){
  return {
    edited: state.expandRow
  }
}

function mapDispatchToProps(dispatch){
  return {
    expandRowActions: bindActionCreators(expandRowActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomersParticularExpand)