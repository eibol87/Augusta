import React, { Component } from 'react';
import DataTable from '../../forms/dataTable/DataTable';
import {getOrders} from '../../../services/Api'
import '../../customers/Customers.css'

class Finalized extends Component {
	constructor(){
		super()
		this.state={
			thead:['Fecha entrada','Cliente','Número de articulos','Estado'],
			orders:[]
			}
		}
	
	componentDidMount(){
		getOrders('ordersByFinalized')
			.then(response =>
				this.setState(
				{
					orders:[...response] 
				})
			)
	}
	getBodyTable(){
		return this.state.orders.map((orders) => {
			console.log(orders)
			return [orders.entry_date,orders.customer_id.contact,orders.articles.length,orders.state]
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

export default Finalized