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
  	let match =[]
  	this.state.tbody.forEach((data) =>{
  		data.some(function(element){
	  		if(element.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1){
	  			match.push(data)
					return true
	  		}
  		})
  	})
  	if(e.target.value !== ''){
			this.setState({ resultSearch: match })
  	}else{
  		this.setState({ resultSearch: this.state.tbody })
  	}
  }
  getNumberOfItemsForPage () {
    return Math.floor(this.state.tbody.length / this.state.numberItemsForPage)
  }
  getResultsLimitForPage () {
    const startPosition = ((this.props.match.params.page * this.state.numberItemsForPage) - this.state.numberItemsForPage)
    const endPosition = (this.props.match.params.page * this.state.numberItemsForPage)
    return this.state.results.slice(startPosition, endPosition)
  }
 	
  render(){
  	return(
  		<div>
  		<Col sm={4} >
			 		<span>{this.state.resultSearch.length} registros encontrados</span>
				</Col>
	  		<Col sm={4} className="DataTable--inputSearch--left pull-right">
			 		<FormGroup bsSize="medium">
			    	<FormControl type="text" onChange={this.handleChange} placeholder="Search in table..." />
					</FormGroup>
				</Col>
			  <div className="scroll">
		  	<Table className="DataTable table-fixed" striped bordered condensed hover>
			    <thead>
			      <tr>
			      	{this.state.thead.map((th) =>
								<th>{th}</th>
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
	  	</div>
    )
  }
}
export default DataTable