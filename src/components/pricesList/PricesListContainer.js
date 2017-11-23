import React, { Component } from 'react';
import {getPricesList} from '../../services/Api'
import PricesList from './PricesList'
import toastr from 'toastr'

class PricesListContainer extends Component {
  constructor(){
    super()
    this.state={
      pricesList:[{
        _id:'',
        type:'',
        leather: '',
        base_price:'',
        prices_per_customer:''

      }]
    }
  }
  componentDidMount(){
    getPricesList()
      .then(response =>
        this.setState({
          pricesList: [...response]
          .map(function (priceList){
            const sum = (priceList.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
            const avg= (sum/priceList.assign_prices.length).toFixed(2)
            return ({
              _id:priceList._id,
              type:priceList.type,
              leather: priceList.leather,
              base_price:priceList.base_price,
              prices_per_customer:avg
            })
          })
        })
      )
  }
  render(){
    // const hasEdited = this.state.edited.length
    // if(hasEdited) this.updateCell(this.state.edited[0],this.state.edited[0].cellName,this.state.customer) 
     return(
      <PricesList
        data={this.state} 
      />
    )
  }
}

export default PricesListContainer