import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import {getCustomers} from '../../services/Api'
import './Customers.css'

class Customers extends Component {
	constructor(){
		super()
		this.state={
			thead:['Cliente','Empresa','Contacto','Teléfono','Email','Dirección','Ciudad'],
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
			return [customers.type,customers.fiscal_name,customers.contact,customers.phone,customers.email,customers.address,customers.city]
		})
	}
	
  render(props){
    return(
    	<div className="Customers">
    	<h2 className="Customers-title">CLIENTES</h2>
    	<p className="Customers-subTitle">{this.state.customers.length} clientes totales</p>
	    	<div className="Customers-panel">
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