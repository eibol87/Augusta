import React, { Component } from 'react';
import DataTable from '../../forms/dataTable/DataTable';
import {getArticles} from '../../../services/Api'
import '../../customers/Customers.css'

class Delivered extends Component {
	constructor(){
		super()
		this.state={
			thead:['Cliente','Tipo','Piel','Color','Estado','Código de barras'],
			articles:[]
			}
		}
	
	componentDidMount(){
		getArticles('?state=delivered')
			.then(response =>
				this.setState(
				{
					articles:[...response] 
				})
			)
	}
	getBodyTable(){
		return this.state.articles.map((article) => {
			return [article.customer_id.contact,article.type,article.leather,article.color,article.state,article.barcode]
		})
	}
	
  render(){
    return(
    	<div className="Customers">
    	<h2>Finalizar</h2>
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

export default Delivered