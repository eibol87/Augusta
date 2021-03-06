import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import * as expandRowActions from '../../../actions/expandRowActions'

import * as utilsTable from '../../../utils/UtilsTable'

class CustomersEnterpriseExpand extends Component {
  
 componentWillMount(){

    this.props.expandRowActions.loadExpandRow()

  }

  componentWillReceiveProps(nextProps){
     
     if(nextProps.edited.length){
      
      const dataEdited=nextProps.edited[0]
      const cellName=nextProps.edited[0].cellName
      //creo una array con todos los expand
      const data=this.props.allData.map((row) => row.expand[0] )
     
      this.updateCell(dataEdited,cellName,data)
      this.props.expandRowActions.resetStateExpandEdited()
     
    }
   
  }

  onAfterSaveCell = ({ id }, cellName) => {

    this.props.expandRowActions.updateStateExpand( { id, cellName })

  }

  updateCell(dataEdited,cellName,data) {
   
    utilsTable.updateCell(dataEdited,cellName,data,this.props.expandRowActions.updateExpandCustomer)

  }

  render() {

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
  }
}

function mapStateToProps(state){

  return {

    edited: state.expandRow.edited

  }

}

function mapDispatchToProps(dispatch){

  return {

    expandRowActions: bindActionCreators(expandRowActions,dispatch)

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CustomersEnterpriseExpand)
