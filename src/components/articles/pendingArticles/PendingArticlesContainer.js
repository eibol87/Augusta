import React, { Component } from 'react';
import {getArticles} from '../../../services/Api'
import PendingArticles from './PendingArticles'
import Moment from 'moment'

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
 
  render(){
    return(
      <PendingArticles data={this.state} />
    )
  }
}

export default PendingArticlesContainer