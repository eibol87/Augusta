import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getOrders} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'

class Orders extends Component {
	constructor(){
		super()
		this.state={
			thead:['Fecha entrada','Cliente','Número de articulos','Estado'],
			orders:[]
			}
		}
	
	componentDidMount(){
		getOrders()
			.then(response =>
				this.setState(
				{
					orders:[...response] 
				})
			)
	}
	getBodyTable(){
		return this.state.orders.map((orders) => {
			return [orders.entry_date,orders.customer_id.contact,orders.articles.length,orders.state]
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

export default PanelContainer(Orders)