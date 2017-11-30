import React, { Component } from 'react';
import AddArticles from './AddArticles'
import { getCustomers, getListArticleType, getColors, getComplements, getPricesList  } from '../../../services/Api'

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
    return result.map((value) =>({value:value.contact, label:value.contact}))
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
  render(){
    return (
      <AddArticles 
        getPriceArticle={this.getPriceArticle}
        getComplements={this.getComplements}
        getColors={this.getColors} 
        getListArticle={this.getListArticle} 
        getListCustomers={this.getListCustomers}/>
    )
  }

}

export default AddArticlesContainer
