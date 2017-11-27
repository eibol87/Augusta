import React, { Component } from 'react';
import {getArticles} from '../../../services/Api'
import DeliveredArticles from './DeliveredArticles'
import Moment from 'moment'

class DeliveredArticlesContainer extends Component {
  constructor(){
    super()
    this.state={
      articles:[{
        id:'',
        final_customer_code:'',
        type:'',
        leather:'',
        color:'',
        state:'',
        price:'',
        complements:[],
        output_date:'',
        customer_contact:'',
        customer_fiscal_name:''
      }]
      }
    }
  componentDidMount(){
   this.getData()
  }
  async getData(){
    const response = await getArticles('pending')
    if(response){
      this.setState({
      articles: [...response]
        .map(function (article){
          return ({
            id:article._id,
            final_customer_code:article.final_customer_code,
            type:article.type,
            leather:article.leather,
            color:article.color,
            state:article.state,
            price:article.price,
            complements:[...article.complements],
            customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
            customer_fiscal_name:article.customer_id.fiscal_name,
            output_date:Moment(article.output_date).format('L')
          })
        })
      })
    } 
  }

  render(){
    return(
      <DeliveredArticles data={this.state}/>
    )
  }
}

export default DeliveredArticlesContainer