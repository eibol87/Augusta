import React, { Component } from 'react';
import DataTable from '../forms/dataTable/DataTable';
import clients from '../../api/clients.json'
import './Clients.css'

class Clients extends Component {
	constructor(){
		super()
		this.state={
			thead:['Id','Cliente','Direccion Cliente','Teléfono','Poblacion','Reparto'],
			clients:[]
			}
		}
	
	componentDidMount(){
		this.setState(
		{
			clients:[...clients[0].Clients] 
		})
	}
	getClientsForShowTable(){
		return this.state.clients.map((client) => {
			return [...this.state.thead]
		})
	}

  render(){
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