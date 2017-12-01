import React, { Component } from 'react';
import {getPricesList,UpdatePriceToPriceList,createPriceList} from '../../services/Api'
import PricesList from './PricesList'
import toastr from 'toastr'

class PricesListContainer extends Component {
  constructor(){
    super()
    this.state={
      pricesList:[{
        id:'',
        type:'',
        leather: '',
        base_price:'',
        prices_per_customer:''
      }],
      edited: []
    }
  }
  componentDidMount(){
    this.getPriceList()
  }
  onAfterSaveCell = ({ id }, cellName) =>{
    this.setState({
      edited: [ ...this.state.edited, { id, cellName } ]
    })}

  async getPriceList(){
     const response = await getPricesList()
      if(response){
        this.setState({
          pricesList: [...response]
          .map(function (priceList){
            const sum = (priceList.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
            const avg= (sum/priceList.assign_prices.length).toFixed(2)
            return ({
              id:priceList._id,
              type:priceList.type,
              leather: priceList.leather,
              base_price:priceList.base_price,
              prices_per_customer:avg
            })
          })
        })
      }
  }
  updateCell = async (dataEdited,cellName,data) => {
    const body = {};
    const findDataRowEdited = data.filter(element => element.id === dataEdited.id )
      
    body[cellName] = findDataRowEdited[0][cellName]
      
    try {
      const result = await UpdatePriceToPriceList(dataEdited.id,body)
      if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
      //clean state
      this.state.edited=[]
    }
    catch(e) {
      toastr.error('Error al resolver la promesa')
      this.state.edited=[]
    throw e
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
  updateCell = async (dataEdited,cellName,data) => {
    const body = {};
    const findDataRowEdited = data.filter(element => element.id === dataEdited.id )
    
    body[cellName] = findDataRowEdited[0][cellName]
    try {
     const result = await UpdatePriceToPriceList(dataEdited.id,body)
      if(result) toastr.success( `${body[cellName]}`,'Se ha guardado:')
      //clean state
      this.state.edited=[]
    }
      catch(e) {
        toastr.error('Error al resolver la promesa')
        this.state.edited=[]
        throw e
    }
  }
  onAfterInsertRow = async (row) => {
    delete row.id //delete id because if not needed pass to mongodb
    delete row.prices_per_customer
    const result = await createPriceList(row)
    if(result === 201) toastr.warning(`El artículo ${row.type} ya existe`)
    if(result === 200) toastr.success(`Se ha añadido el artículo ${row.type}`)
    this.getPriceList()
  }
  render(){
    const hasEdited = this.state.edited.length
    if(hasEdited) this.updateCell(this.state.edited[0],this.state.edited[0].cellName,this.state.pricesList) 
    return(
      <PricesList
        data={this.state} 
        onAfterSaveCell={this.onAfterSaveCell}
        updateCell={this.updateCell}
        onAfterInsertRow={this.onAfterInsertRow}
        basePriceStatusValidator={this.basePriceStatusValidator}
      />
    )
  }
}

export default PricesListContainer