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
      <Table className="DataTable" striped bordered condensed hover>
		    <thead>
		      <tr>
		      	<th>#</th>
		      	{this.state.thead.map((th) =>
							<th>{th}</th>
		     		)}
		      </tr>
		    </thead>
		    <tbody>
		    	{this.state.tbody.map((client) =>
           	<tr>
            {client.map((data)=>
  						<td>{data}</td>
            )}
		      </tr>
          )}
		    </tbody>
  </Table>
      )
  }
}
export default DataTable