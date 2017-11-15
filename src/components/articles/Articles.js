import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getArticles} from '../../services/Api'
import '../customers/Customers.css'

class Articles extends Component {
	constructor(){
		super()
		this.state={
			thead:['Tipo','Categoría','Precio Base','Precio medio','Clientes'],
			articles:[]
			}
		}
	
	componentDidMount(){
		getArticles()
			.then(response =>
				this.setState(
				{
					articles:[...response] 
				})
			)
	}
	getBodyTable(){
		return this.state.articles.map((articles) => {
			const sum = (articles.assign_prices.reduce((acc, sum) => acc + Number(sum) ,0))
			const avg= (sum/articles.assign_prices.length).toFixed(2)

			return [articles.type,articles.leather,articles.base_price,avg,articles.prices_per_customer.length]
		})
	}
	
  render(){
    return(
    	<div className="Customers">
    	<h2>Articulos</h2>
	    	<div className="Customers--panel">
    			<DataTable 
		    		thead={this.state.thead} 
		    		tbody={this.getBodyTable()}
		    	/>
		   </div>
	    </div>
    )
  }
}

export default Articles