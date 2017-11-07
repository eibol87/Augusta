import React, { Component } from 'react';
import DataTable from '../forms/DataTable';
import clients from '../../api/clients.json'
import './Clients.css'

class Clients extends Component {
	constructor(){
		super()
		this.state={
			thead:['Cliente','Direccion Cliente','Teléfono','Poblacion','Reparto'],
			clients:[]
			}
		}
	
	componentDidMount(){
		this.setState(
		{
			clients:[...clients[0].Clients] 
		})
	}
	getClientsForShowtable(){
		return this.state.clients.map((client) => {
			return [client.cliente,client.nombre_negocio,client.direccion_cliente,client.telefono,client.poblacion,client.reparto]
		})
	}

  render(){
  	console.log("getClients: ",this.getClientsForShowtable())
    return(
    	<div className="client">
	    	<DataTable 
	    		thead={this.state.thead} 
	    		tbody={this.getClientsForShowtable()}
	    	/>
	    </div>
    )
  }
}

export default Clients