import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import clients from '../../data/customers.json'
import './Clients.css'

class Clients extends Component {
	constructor(){
		super()
		this.state={
			thead:['id','Contacto','Dirección','Ciudad','Teléfono','Cliente','Nombre fiscal'],
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
			return [client.id,client.contact,client.address,client.city,client.phone,client.type,client.fiscal_name]
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