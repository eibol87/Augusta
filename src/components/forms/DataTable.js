import React, { Component } from 'react';
import {Table,FormGroup,FormControl,Col} from 'react-bootstrap';
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
  		<div>
	  		  <Col sm={4} className="DataTable--inputSearch--left pull-left">
			  		<FormGroup bsSize="medium">
			 	     <FormControl type="text" placeholder="Search in table..." />
						</FormGroup>
				  </Col>
				  <Col sm={2} className="DataTable--selectPage--left pull-right">
		  			<select class="form-control">
					    <option>5</option>
					    <option>10</option>
					    <option>15</option>
					    <option>20</option>
					  </select>
				  </Col>
	      <Table className="DataTable" striped bordered condensed hover>
			    <thead>
			      <tr>
			      	{this.state.thead.map((th) =>
								<th>{th} <i class="fa fa-sort" aria-hidden="true"></i></th>
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
	  		</div>
    )
  }
}
export default DataTable