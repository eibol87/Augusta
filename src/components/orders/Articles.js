import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getArticles} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'

class Articles extends Component {
	constructor(){
		super()
		this.state={
			thead:['Cliente','Tipo','Piel','Color','Estado','Código de barras'],
			articles:[]
			}
		}
	
	componentDidMount(){
		getArticles('')
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
    	
    			<DataTable 
		    		thead={this.state.thead} 
		    		tbody={this.getBodyTable()}
		    	/>
	    )
  }
}

export default PanelContainer(Articles)