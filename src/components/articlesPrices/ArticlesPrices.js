import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getArticlesPrices} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'

class ArticlesPrices extends Component {
	constructor(){
		super()
		this.state={
			thead:['Tipo','Categoría','Precio Base','Precio medio','Clientes'],
			articlesPrices:[]
			}
		}
	
	componentDidMount(){
		getArticlesPrices()
			.then(response =>
				this.setState(
				{
					articlesPrices:[...response] 
				})
			)
	}
	getBodyTable(){
		return this.state.articlesPrices.map((articlesPrices) => {
			const sum = (articlesPrices.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
			const avg= (sum/articlesPrices.assign_prices.length).toFixed(2)

			return [articlesPrices.type,articlesPrices.leather,articlesPrices.base_price,avg,articlesPrices.prices_per_customer.length]
		})
	}
	
  render(){
    return(
    	
    			<DataTable 
		    		thead={this.state.thead} 
		    		tbody={this.getBodyTable()}
		    	/>
		
    )
  }
}

export default PanelContainer(ArticlesPrices)