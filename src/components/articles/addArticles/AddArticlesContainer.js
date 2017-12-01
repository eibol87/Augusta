import React, { Component } from 'react';
import AddArticles from './AddArticles'
import { getCustomers, getListArticleType, getColors, getComplements, getPricesList,createArticle  } from '../../../services/Api'
import toastr from 'toastr'
class AddArticlesContainer extends Component {
  constructor(){
    super()
    this.state={
      articles:[]
    }
  }
  async getListArticle(type){
    const result = await getListArticleType(type)
    return result.map((value) =>({value:value, label:value}))
  }
  async getListCustomers(){
    const result = await getCustomers()
    return result.map((value) =>
      (
        {value:(value.fiscal_name) ? value.fiscal_name : value.contact, customer_id:value._id, label:(value.fiscal_name) ? value.fiscal_name : value.contact}
      ))
  }
  async getColors(){
    const result = await getColors()
    return result.map((value) =>({value:value.color, label:value.color}))
  }
  async getComplements(){
    const result = await getComplements()
    return result.map((value) =>({value:value.complement, label:value.complement}))
  }
  async getPriceArticle(type,leather){
    const result = await getPricesList(type,leather)
    if(result === 'not found article'){
      return 0
    }else{
      return result.base_price
    }
    
  }
  barcodeValidator(value, row) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    const nan = isNaN(parseInt(value, 10)) //isNumeric
    if (nan) {
      return  response.notification.type = 'Solo puedes introducir números';
    }
    return true;
  }
  onAfterInsertRow = async (row) => {
    delete row.id //delete id because if not needed pass to mongodb
    row.state='pending'
    console.log(row)
    const result = await createArticle(row)
    console.log(result)
    // if(result === 201) toastr.warning(`El artículo ${row.type} ya existe`)
    // if(result === 200) toastr.success(`Se ha añadido el artículo ${row.type}`)
    // this.getPriceList()
  }
  render(){
    return (
      <AddArticles 
        barcodeValidator={this.barcodeValidator}
        onAfterInsertRow={this.onAfterInsertRow}
        getPriceArticle={this.getPriceArticle}
        getComplements={this.getComplements}
        getColors={this.getColors} 
        getListArticle={this.getListArticle} 
        getListCustomers={this.getListCustomers}/>
    )
  }

}

export default AddArticlesContainer
