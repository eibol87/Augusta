import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class ArticlesExpand extends Component {
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
  render() {
    const hasEdited = this.state.edited.length
    if(hasEdited){
      const dataEdited=this.state.edited[0]
      const cellName=this.state.edited[0].cellName
      const data=this.props.data
      this.props.updateCell(dataEdited,cellName,data)
      this.state.edited = []
    }
    const tdStyle={whiteSpace: 'normal'}
    const cellEditProp = {mode: 'dbclick', blurToSave: true, afterSaveCell: this.onAfterSaveCell}
    return (
      <BootstrapTable 
        hover condensed 
        cellEdit={ cellEditProp } 
        data={ this.props.data }>
        <TableHeaderColumn width='150' dataField='id' hidden={ true } isKey={ true }>id</TableHeaderColumn>
        <TableHeaderColumn dataField='color' dataSort>Color</TableHeaderColumn>
        <TableHeaderColumn dataField='barcode' dataSort>Código de barras</TableHeaderColumn> 
        </BootstrapTable>);
  }}
export default ArticlesExpand