import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getCustomers} from '../../services/Api'
import './Customers.css'

class Customers extends Component {
	constructor(){
		super()
		this.state={
			thead:['id','Contacto','Dirección','Ciudad','Teléfono','Cliente','Nombre fiscal'],
			customers:[]
			}
		}
	
	componentDidMount(){
		getCustomers()
		.then(response =>
			this.setState(
			{
				customers:[...response] 
			})
		)
	}
	getcustomersForShowTable(){
		return this.state.customers.map((customers) => {
			return [customers.id,customers.contact,customers.address,customers.city,customers.phone,customers.type,customers.fiscal_name]
		})
	}
	
  render(props){
    return(
    	<div className="Customers">
    	<h2>Clientes</h2>
	    	<div className="Customers--panel">
    			<DataTable 
		    		thead={this.state.thead} 
		    		tbody={this.getcustomersForShowTable()}
		    	/>
		   </div>
	    </div>
    )
  }
}

export default Customers