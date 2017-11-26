import React, { Component } from 'react';
import {getArticles} from '../../../services/Api'
import Articles from './Articles'
import Moment from 'moment'

class ArticlesContainer extends Component {
  constructor(){
    super()
    this.state={
      url:'',
      states:{ 
        pending: 'pending',
       finalized: 'finalized',
       delivered: 'delivered'
      },
      articles:[{
        id:'',
        final_customer_code:'',
        type:'',
        leather:'',
        state:'',
        price:'',
        complements:[],
        entry_date:'',
        customer_contact:'',
        customer_fiscal_name:'',
        expand:[{
          id:'',
          barcode:'',
          color:'',
          output_date:''
        }]
      }]
      }
    }
  componentDidMount(){
   this.getData()
  }
  async getData(){
    const response = await getArticles()
      if(response){
        this.setState({
          articles: [...response]
          .map(function (article){
            return ({
              id:article._id,
              final_customer_code:article.final_customer_code,
              type:article.type,
              leather:article.leather,
              state:article.state,
              price:article.price,
              complements:[...article.complements],
              customer_contact:(article.customer_id.fiscal_name) ? article.customer_id.fiscal_name : article.customer_id.contact,
              customer_fiscal_name:article.customer_id.fiscal_name,
              entry_date:Moment(article.entry_date).format('L'),
              expand: [{
                id:article._id,
                barcode:article.barcode,
                color: article.color,
                output_date:Moment(article.output_date).format('L')
              }]
            
            })
          })
        })
      }
  }
  render(){
    return (
      <Articles 
      data={this.state}
      />
    )
  }
}
export default ArticlesContainer