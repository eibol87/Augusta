import React, { Component } from 'react';
import {getOrders} from '../../services/Api'
import PanelContainer from '../panelContainer/PanelContainer.js'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Orders extends Component {
	constructor(){
		super()
		this.state={
			thead:['Fecha entrada','Cliente','Número de articulos','Estado'],
			orders:[{
				_id:'',
				entry_date:'',
				customer_name:'',
				numberOfArticles:''
			}]
			}
		}
	
	componentDidMount(){
		getOrders()
			.then(response =>
				this.setState({
					orders: [...response]
					.map(function (order){
						return ({
							_id:order._id,
							entry_date:order.entry_date,
							customer_name:order.customer_id.contact,
							numberOfArticles:[...order.articles].length
						})
					})
				})
			)
	}
	getBodyTable(){
		return this.state.orders.map((orders) => {
			return [orders.entry_date,orders.customer_id.contact,orders.articles.length]
		})
	}
	
  render(){
    return(
    <BootstrapTable 
     	className="BootstrapTable-style" 
     	striped hover condensed height='300' 
     	data={ this.state.orders } 
     	options={{defaultSortName:'entry_date', defaultSortOrder: 'asc' }} 
     	trClassName={this.rowClassNameFormat}>
	     <TableHeaderColumn dataField='entry_date' isKey dataSort filter={ { type: 'TextFilter', delay: 100 } }>Fecha entrada'</TableHeaderColumn>
	      <TableHeaderColumn dataField='customer_name' dataSort filter={ { type: 'TextFilter', delay: 100 } }>Cliente</TableHeaderColumn>
	      <TableHeaderColumn dataField='numberOfArticles'  dataSort filter={ { type: 'TextFilter', delay: 100 } }>Número de articulos</TableHeaderColumn>
	    </BootstrapTable>
		
    )
  }
}

export default PanelContainer(Orders)