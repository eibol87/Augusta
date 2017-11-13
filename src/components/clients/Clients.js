import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import clients from '../../data/customers.json'
import './Clients.css'

class Clients extends Component {
	constructor(){
		super()
		this.state={
			thead:['id','contacto','Dirección','Nombre Fiscal','Teléfono','Entrega','Dias'],
			clients:[]
			}
		}
	
	componentDidMount(){
		this.setState(
		{
			clients:[...clients] 
		})
	}
	getClientsForShowTable(){
		return this.state.clients.map((client) => {
			return [client.id,client.contact,client.address,client.fiscal_name,client.phone,client.delivery_type,client.delivery_days]
		})
	}
	
  render(props){
    return(
    	<div className="Client">
    	<h2>Clientes</h2>
	    	<div className="Client--panel">
    			<DataTable 
		    		thead={this.state.thead} 
		    		tbody={this.getClientsForShowTable()}
		    	/>
		   </div>
	    </div>
    )
  }
}

export default Clients