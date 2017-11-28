import React, { Component } from 'react';
import {getArticles,UpdateStateArticle} from '../../../services/Api'
import PendingArticles from './PendingArticles'
import Moment from 'moment'
import toastr from 'toastr'

const PENDING = 'pending'
class PendingArticlesContainer extends Component {
  constructor(){
    super()
    this.state={
      articles:[{
        id:'',
        final_customer_code:'',
        barcode:'',
        type:'',
        leather:'',
        color:'',
        state:'',
        price:'',
        complements:[],
        entry_date:'',
        output_date:'',
        customer_contact:'',
        customer_fiscal_name:''
      }]
      }
      this.getData = this.getData.bind(this)
      //this.handleMultipleSelection = this.handleMultipleSelection.bind(this)
    }
  componentDidMount(){
    this.getData()
  }
  async getData(){
    const response = await getArticles(PENDING)
    if(response){
      this.setState({
        articles: [...response]
        .map(function (article){   
          return ({
            id:article._id,
            final_customer_code:article.final_customer_code,
            barcode:article.barcode,
            type:article.type,
            leather:article.leather,
            color:article.color,
            state:article.state,
            price:article.price,
            complements:[...article.complements],
            customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
            customer_fiscal_name:article.customer_id.fiscal_name,
            output_date:Moment(article.output_date).format('L'),  
            entry_date:Moment(article.entry_date).format('L')
          })
        })
      })
    }    
  }
  updateData = async (id) => {
    const result = await UpdateStateArticle(id,'finalized')
      if(result){
        toastr.success(`Se ha finalizado la prenda ${result.barcode}`)
        this.getData() 
      }
  }
  handleKeyPress(target,data) {
    if(data.length === 1){
      const id = data[0].id
      this.updateData(id)
    }else{
      toastr.warning(`Hay mas de un resultado en la busqueda`)
    }
    return true
  }
  handleMultipleSelection = (data) => {
    data.forEach(function(article){
      console.log(article.id)
      this.updateData(article.id)
    },this)
  }
  render(){
    return(
      <PendingArticles 
        data={this.state} 
        updateData={this.updateData}
        handleKeyPress={this.handleKeyPress}
        handleMultipleSelection={this.handleMultipleSelection}
      />
    )
  }
}

export default PendingArticlesContainer