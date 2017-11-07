import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './DataTable.css'


class DataTable extends Component {
	constructor () {
	  	super()
	    this.state = {
	    	tbody:[],
	    	thead:[]
	    }
    }
  componentWillReceiveProps (nextProps) {
  	this.setState(
    { 
    	tbody:[...nextProps.tbody],
    	thead:[...nextProps.thead] 
   	})
  }
 	
  render(){
    return(
      <Table className="DataTable--fontColor DataTable--coloRows" striped bordered condensed hover>
		    <thead>
		      <tr>
		      	<th>#</th>
		      	{this.state.thead.map((th) =>
							<th>{th}</th>
		     		)}
		      </tr>
		    </thead>
		    <tbody>
		    	{this.state.tbody.map((td) =>
           	<tr>
		        <td>{td.id}</td>
		        <td>{td.nombre_negocio}</td>
		        <td>{td.direccion_cliente}</td>
		        <td>{td.telefono}</td>
		      </tr>
          )}
		    </tbody>
  </Table>
      )
  }
}
export default DataTable