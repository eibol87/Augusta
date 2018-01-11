import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as pricesListActions from '../../actions/pricesListActions'

import {createPriceList} from '../../services/Api'
import PricesList from './PricesList'
import toastr from 'toastr'
import * as utilsTable from '../../utils/UtilsTable'
import api from '../../services/Api'

class PricesListContainer extends Component {
  
  componentWillMount(){

   this.fetchPricesList()

  }

  async fetchPricesList(){

    await this.props.pricesListActions.fetchPricesList()

  }

  componentWillReceiveProps(nextProps){

    //comprobamos si hay algun registros en el state.edited, una vez que entramos
    //lo reseteamos para asegurarnos que solo entra una vez se edita una celda
    if(nextProps.edited.length){
     
      const dataEdited=nextProps.edited[0]
      const cellName=nextProps.edited[0].cellName
      const data=this.props.list
      
      this.updateCell(dataEdited,cellName,data)
      this.props.pricesListActions.resetStatePricesListEdited()

    }
   
  }
  
  
  updateCell(dataEdited,cellName,data) {
  
    utilsTable.updateCell(dataEdited,cellName,data,this.props.pricesListActions.updatePricesList)

  }

  onAfterSaveCell = ({ id }, cellName) =>{
  
    this.props.pricesListActions.updateStatePricesList({ id, cellName })

  }

  // onAfterInsertRow = async (row) => {

  //   delete row.id //delete id because if not needed pass to mongodb
  //   delete row.prices_per_customer

  //   const result = await createPriceList(row)

  //   if(result === 201) toastr.warning(`El artículo ${row.type} ya existe`)
  //   if(result === 200) toastr.success(`Se ha añadido el artículo ${row.type}`)
    
  // }
  onAfterInsertRow = async (row) => {
    
    const result = await utilsTable.onAfterInsertRowPricesList(row,this.props.pricesListActions.createPricesList)
    
    if(result === "CREATE_PRICESLIST_SUCCESS"){
      
      this.fetchPricesList()

    }
  }

  basePriceStatusValidator(value, row) {

    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    const nan = isNaN(parseInt(value, 10)) //isNumeric
    
    if (nan) {
    
      return  response.notification.type = 'Solo puedes introducir números';
    
    }
    
    return true;
  
  }

  render(){
    
    return(
      <PricesList
        data={this.props.list} 
        onAfterSaveCell={this.onAfterSaveCell}
        updateCell={this.updateCell}
        onAfterInsertRow={this.onAfterInsertRow}
        basePriceStatusValidator={this.basePriceStatusValidator}
      />
    )
  }
}

function mapStateToProps(state){

  return {

    list: state.pricesList.list,
    loading: state.pricesList.loading,
    edited: state.pricesList.edited
  
  }

}

function mapDispatchToProps(dispatch){

  return {

    pricesListActions: bindActionCreators(pricesListActions,dispatch)

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(PricesListContainer)

