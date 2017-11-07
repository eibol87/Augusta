import React, { Component } from 'react';
import DataTable from '../forms/DataTable';
import clients from '../../api/clients.json'
import './Clients.css'


class Clients extends Component {
	constructor(){
		super()
		this.state={
			thead:['cliente','Direccion Cliente','Teléfono'],
			clients:[]
			}
		}
	
	componentDidMount(){
		this.setState(
		{
			clients:[...clients[0].Clients] 
		})
	}

  render(){
    return(
    	<div className="client">
	    	<DataTable 
	    		thead={this.state.thead} 
	    		tbody={this.state.clients}
	    	/>
	    </div>
    )
  }
}

export default Clients