import React, { Component } from 'react';
import {Table,FormGroup,FormControl,Col,Checkbox} from 'react-bootstrap';
import $ from 'jquery';
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
	     this.handleChangeButton = this.handleChangeButton.bind(this)
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
  			if(String(element).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){
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
  handleChangeButton(e){
 		$(`table tr > *:nth-child(${e.target.name})`).hide()
 	}
 	
  render(){
  	return(
  		<div>
  		{/*
	  		<Col sm={8} className="DataTable--inputSearch--left pull-left">
	  			{this.state.thead.map((columnsName,index) =>
						<a class="btn btn-default btn-md DataTable--button--column" name={index+2} onClick={this.handleChangeButton} data-column="0">{columnsName}</a>
					)}
	  		</Col>
	  		*/}
	  		<Col sm={4} className="DataTable--inputSearch--left pull-right">
	  			<FormGroup bsSize="medium">
			    	<FormControl type="text" onChange={this.handleChange} placeholder="Search in table..." />
					</FormGroup>
				</Col>
				
			  <div className="scroll">
		  	<Table className="DataTable table-fixed" striped bordered condensed hover>
			    <thead>
			      <tr>
			      	<th></th>
			      	{this.state.thead.map((columnsName) =>
								<th>{columnsName}</th>
			     		)}
			      </tr>
			    </thead>
			    <tbody>
				   	{this.state.resultSearch.map((client) =>
	           	<tr>
	           		<td> 
	           		<i class="fa fa-pencil" aria-hidden="true"></i>
	           		<i class="fa fa-eye" aria-hidden="true"></i>
	           			{/*
	           			<Checkbox id={client[0]} className="DataTable-checkbox"></Checkbox>
	           				*/}
	           		</td>
		            {client.map((data)=>
		  						<td>{data}</td>
		            )}
		         	</tr>
	          )}
			    </tbody>
			     <thead>
			      <tr>
			      	<th></th>
			      	{this.state.thead.map((columnsName) =>
								<th>{columnsName}</th>
			     		)}
			      </tr>
			    </thead>
	  		</Table>
	  		</div>
	  		<span>{this.state.resultSearch.length} registros encontrados</span>
	  	</div>
    )
  }
}
//<i class="fa fa-eye" aria-hidden="true"></i><i class="fa fa-pencil" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i>
export default DataTable