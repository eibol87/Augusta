import React, { Component } from 'react';
import {Table,FormGroup,FormControl,Col} from 'react-bootstrap';
import './DataTable.css'


class DataTable extends Component {
	constructor () {
	  	super()
	    this.state = {
	    	resultSearch:[],
	    	tbody:[],
	    	thead:[],
	    	value: ''
	    }
	     this.handleChange = this.handleChange.bind(this)
    }
  componentWillReceiveProps (nextProps) {
  	this.setState(
    { 
    	tbody:[...nextProps.tbody],
    	resultSearch:[...nextProps.tbody],
    	thead:[...nextProps.thead] 
   	})
  }
 
  handleChange (e) {
  	//e.preventDefault()
  	const filter = this.state.tbody.filter((data) =>{
			if(data.indexOf(e.target.value)==1){
				//console.log(data)
				return data
  		}
  	})
  	console.log(filter)
  	if(e.target.value != ''){
			this.setState({ resultSearch: filter })
  	}else{
  		console.log("vacio")
  		this.setState({ resultSearch: this.state.tbody })
  	}
  }
 	
  render(){
  	return(
  		<div>
	  		  <Col sm={4} className="DataTable--inputSearch--left pull-left">
			  		<FormGroup bsSize="medium">
			 	     <FormControl type="text" onChange={this.handleChange} placeholder="Search in table..." />
						</FormGroup>
				  </Col>
				  <Col sm={2} className="DataTable--selectPage--right pull-right">
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
				   	{this.state.resultSearch.map((client) =>
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