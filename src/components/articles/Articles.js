import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getArticles} from '../../services/Api'
import '../customers/Customers.css'

class Articles extends Component {
	constructor(){
		super()
		this.state={
			thead:['Tipo','Categoría','Precio Base'],
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
			return [articles.type,articles.leather,articles.base_price]
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