import React, { Component } from 'react';
import DataTable from '../../forms/dataTable/DataTable';
import {getArticles} from '../../../services/Api'
import '../../customers/Customers.css'

class Pending extends Component {
	constructor(){
		super()
		this.state={
			thead:['Cliente','Tipo','Piel','Color','Estado','Código de barras'],
			articles:[]
			}
		}
	
	componentDidMount(){
		getArticles('?state=pending')
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
    	<h2>Pendiente</h2>
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

export default Pending